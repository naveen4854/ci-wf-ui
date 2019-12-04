import React, { useState } from 'react';
import { TabMenu } from 'src/shared-components';
import AddUserList from './add-user/add-user-list';
import EditUserList from './edit-user/edit-user-list';

const tabs = [
    { id: 'Add_User', label: 'Add User', icon: 'pi pi-fw pi-home' },
    { id: 'Edit_User', label: 'Edit User', icon: 'pi pi-fw pi-calendar' },
]

const UserManagementHome = () => {
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    console.log(currentTab, 'test currentTab')
    return <>
        <TabMenu tabs={tabs} tabChange={setCurrentTab} activeItem={currentTab || tabs[0]}>
        </TabMenu>
        {currentTab.id === 'Add_User' && <AddUserList />}
        {currentTab.id === 'Edit_User' && <EditUserList />}
    </>
}

export default UserManagementHome;