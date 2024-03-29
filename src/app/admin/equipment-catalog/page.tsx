'use client';

import { trpc } from '@/lib/trpc/client';
import { columns, availabilityStatusOptions } from "../../../Data/AdminCatalogData";
import CustomTable from '@/components/CustomTable';
import { UserContext } from '@/store/UserContext';
import { useContext } from 'react';

function EquipmentCatalog() {
    const { user } = useContext(UserContext);
    const INITIAL_VISIBLE_COLUMNS = ["name", "stock", "isAvailable", "actions"];
    const getEquipments = trpc.equipments.getEquipments.useQuery();
    const equipments = getEquipments.data;

    return (
        <>
            <h1 className="text-3xl font-semibold my-6">Equipment Catalog</h1>
            <hr />
            <div className='mt-5'>
                <CustomTable
                    columns={columns}
                    records={equipments}
                    availabilityStatusOptions={availabilityStatusOptions}
                    INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
                    user={user}
                    type={'CATALOG'}
                    isLoading={getEquipments.isLoading}
                    getTableData={getEquipments}
                />
            </div>
        </>
    );
}

export default EquipmentCatalog;