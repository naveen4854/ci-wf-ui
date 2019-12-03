import React, { Component, ComponentType, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import browserHistory from '../routes/History';
import { initializeUser } from './authentication.actions';
import { UserState } from './authentication.reducer';

const Authenticate = (roles: string[] = []) => {
    const dispatch = useDispatch();
    let user = useSelector((state: any) => { console.log(state.user, 'state'); return state.user });
    const user1 = {} as UserState;
    useEffect(() => {
        setDummyUser();

        let userId = sessionStorage.getItem('sm_user');
        if (!userId || userId === '')
            return browserHistory.push('/test');

        if (!user.initialized) {
            dispatch(initializeUser(userId));
        }

    }, []);

    useEffect(() => {
        console.log(user, user1, roles, 'autho')
        if (!user.initialized) {
            return;
        }

        if (!isAuthorized(user.role, roles))
            return browserHistory.push('/test11');

    }, [user])

    const isAuthorized = (userRole: string, authorizedRoles: string[] = []) => {
        if (!userRole)
            return false;

        if (!authorizedRoles || authorizedRoles.length === 0)
            return true;

        return authorizedRoles.includes(userRole);
    }

    const setDummyUser = () => {
        sessionStorage.setItem('resourceid', '139857');
        sessionStorage.setItem('roleid', '46');
        sessionStorage.setItem('sm_username', 'Nagender Kumar');
        localStorage.setItem('OURoleID', '46');
        localStorage.setItem('OURoleName', 'System Admin');
        localStorage.setItem('OrganizationUnit', '6');
        sessionStorage.setItem('sm_user', 'nagender.kumar.consultant@nielsen.com');
        sessionStorage.setItem('userInfo', '{"Region":"8","Country":"356","LOBID":"DataScience"}');
        localStorage.setItem('allRoles', '[Input OPS Admin,Technology Admin,IO Workflow Administrator]');
    };
    console.log(user, 'user')
}

export default Authenticate;