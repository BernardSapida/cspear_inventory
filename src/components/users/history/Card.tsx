import ConditionChip from '@/components/ConditionChip';
import RequestStatusChip from '@/components/RequestStatusChip';
import { FunctionComponent } from 'react';
import CustomButton from '../../CustomButton';

interface CardProps {
    title: string;
    borrowStatus: string;
    condition: string;
    time: string;
    url: string;
}

const Card: FunctionComponent<CardProps> = ({ title, borrowStatus, condition, time, url }) => {

    return (
        <div className='p-3 border-1 shadow rounded-md flex justify-between items-center'>
            <div>
                <p className='mb-2'><strong>{title}</strong></p>
                <div className='flex gap-2 items-center my-2'>
                    <p className='text-sm font-semibold'>Borrow Status: </p>
                    <RequestStatusChip status={borrowStatus} />
                </div>
                <div className='flex gap-2 items-center my-2'>
                    <p className='text-sm font-semibold'>Equipment Condtion: </p>
                    <ConditionChip status={condition} />
                </div>
            </div>
            <div className='text-right'>
                <time className='block text-tiny text-default-400 mb-2'>{time}</time>
                <CustomButton
                    label={'View details'}
                    url={url}
                />
            </div>
        </div>
    );
}

export default Card;