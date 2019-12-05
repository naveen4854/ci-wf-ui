import React, { useState } from 'react';
import { TabMenu } from 'src/shared-components';
import AddUserTab from './add-user/add-user-tab';
import EditUserTab from './edit-user/edit-user-tab';
import './index.scss';

const tabs = [
    { id: 'Add_User', label: 'Add User', icon: 'pi pi-fw pi-list' },
    { id: 'Edit_User', label: 'Edit User', icon: 'pi pi-fw pi-plus' },
]

const UserManagementHome = () => {
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    console.log(currentTab, 'test currentTab')
    return (
        <div className="container-fluid mt-90">
            <TabMenu tabs={tabs} tabChange={setCurrentTab} activeItem={currentTab || tabs[0]}>
            </TabMenu>
            {currentTab.id === 'Add_User' && <AddUserTab />}
            {currentTab.id === 'Edit_User' && <EditUserTab />}
        </div>
    )
}

export default UserManagementHome;