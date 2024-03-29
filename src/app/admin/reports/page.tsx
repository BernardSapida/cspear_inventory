'use client'

import { trpc } from '@/lib/trpc/client';
import { generateExcel } from '@/utils/excel';
import { Button, Input, Skeleton } from '@nextui-org/react';
import moment from 'moment';
import { FunctionComponent, useEffect, useState } from 'react';
import { HiOutlineDocumentReport } from 'react-icons/hi';

interface ReportProps { }

const Report: FunctionComponent<ReportProps> = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const getReturnedEquipments = trpc.equipments.getReport.useMutation({
        onSuccess(data) {
            const [
                supplyEquipments,
                returnedEquipments,
                goodEquipments,
                misplacedEquipments,
                damagedEquipments
            ] = data;

            generateExcel(
                supplyEquipments,
                returnedEquipments,
                goodEquipments,
                misplacedEquipments,
                damagedEquipments
            );
        },
    });

    useEffect(() => {
        setIsLoaded(true);
    }, [setIsLoaded]);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as HTMLFormElement;
        const form = new FormData(target);
        const { reportWeekly } = Object.fromEntries(form.entries()) as { reportWeekly: string };
        const [year, week] = reportWeekly.split('W');
        const weekStartDate = moment(reportWeekly).format('YYYY-MM-DD');
        const weekEndDate =  moment(`${year}W${Number(week)+1}`).format('YYYY-MM-DD');

        getReturnedEquipments.mutate({ weekStartDate, weekEndDate });
    }

    return (
        <>
            <Skeleton className='my-6 rounded-lg w-max' isLoaded={isLoaded}>
                <h1 className="text-3xl font-semibold">Reports</h1>
            </Skeleton>
            <hr />
            <div className='my-5'>
                <Skeleton className='rounded-lg w-max my-2' isLoaded={isLoaded}>
                    <p className='text-xl'>Generate a report with information based on the selected week.</p>
                </Skeleton>
                <Skeleton className='rounded-lg w-max my-2' isLoaded={isLoaded}>
                    <p>• Supply Equipments - It contains a record of supply equipment.</p>
                </Skeleton>
                <Skeleton className='rounded-lg w-max my-2' isLoaded={isLoaded}>
                    <p>• Returned  Equipments - It contains records about borrow requests&apos; returned equipment.</p>
                </Skeleton>
                <Skeleton className='rounded-lg w-max my-2' isLoaded={isLoaded}>
                    <p>• Inventory Write-Off - It contains information about borrow requests&apos; damaged or misplaced equipment.</p>
                </Skeleton>
                <form className='my-5' id='generate-report' onSubmit={handleSubmit}>
                    <Skeleton className='rounded-lg w-full mb-2' isLoaded={isLoaded}>
                        <Input
                            name='reportWeekly'
                            labelPlacement='inside'
                            label="Weekly Report"
                            defaultValue=''
                            placeholder='#'
                            type='week'
                        />
                    </Skeleton>
                    <div className='flex justify-end'>
                        <Skeleton className='rounded-lg w-max' isLoaded={isLoaded}>
                            <Button
                                startContent={<HiOutlineDocumentReport />}
                                color='primary'
                                type='submit'
                                size='sm'
                                form='generate-report'
                            >Generate Report</Button>
                        </Skeleton>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Report;