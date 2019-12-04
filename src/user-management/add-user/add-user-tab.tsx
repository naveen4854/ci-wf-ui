import React, { useState } from 'react';
import { DataTable } from 'src/shared-components';
import Demo from './add-user-form';

const dummyData = [{
    id: 1,
    name: 'Manoj',
    role: 'User',
    city: 'Chennai',
    country: 'India',
},
{
    id: 2,
    name: 'ABC',
    role: 'Admin',
    city: 'Delhi',
    country: 'India',
}]
const columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'role', header: 'Role' },
    { field: 'city', header: 'City' },
]

const AddUserTab = () => {

    return (
        <UsersList />
    )
};

const UsersList = () => {
    const userSelected = (e: any) => {
        console.log(e);
    }
    const [visible, setVisible] = useState(false);
    return <>
        {visible && <Demo onClose={() => setVisible(false)} visible={visible}></Demo>}
        <button onClick={() => setVisible(true)}>click!!</button>
        <DataTable
            value={dummyData} paginator={true} rows={10}
            selectionMode="single"
            onRowClick={userSelected}
            emptyMessage="No Users Found"
            columns={columns}
        />
    </>
}

export default AddUserTab;