import React, { useState } from 'react';
import { DataTable } from 'src/shared-components';
import AddNewUserForm from './add-user-form';

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
    const [visible, setVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState({ name: '', role: '', city: '', country: '' })

    const userSelected = (e: any) => {
        setSelectedUser(e.data);
        setVisible(true);
    };
    return (
        <div className='reports-block'>
            <div className="reports-header">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <h2 className="title">CI-WF Users List</h2>
                    </div>
                </div>

            </div>
            {visible && <AddNewUserForm onClose={() => setVisible(false)} visible={visible} data={selectedUser}></AddNewUserForm>}
            <div className="reports-table">
                <DataTable
                    value={dummyData} paginator={true} rows={10}
                    selectionMode="single"
                    onRowClick={userSelected}
                    emptyMessage="No Users Found"
                    columns={columns}
                />
            </div>
        </div >
    )
}

export default AddUserTab;