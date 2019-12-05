import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import './header.scss';
import UsersFilter from 'src/user-management/search/user-filter';

const Header: React.FC = () => {
    const [hasFilterMenu, setHasFilterMenu] = useState(false);
    const [sideMenuVisible, setSideMenuVisible] = useState(false);
    const [filterIconVisible, setFilterIconVisible] = useState(true);
    const [filterMenuVisible, setFilterMenuVisible] = useState(false);

    const toggleSideMenu = () => {
        setSideMenuVisible(!sideMenuVisible);
        setFilterIconVisible(sideMenuVisible)
    }

    const toggleFilterMenu = () => {
        setFilterMenuVisible(!filterMenuVisible)
        setFilterIconVisible(filterMenuVisible)
    }

    const filterTemplate = () => {
        switch (window.location.pathname) {
            case '/dashboard':
                return < h1 > dashboard</h1 >
            case '/user-management':
                return <UsersFilter />
            default:
                return <h1>none!</h1>
        }
    }

    useEffect(() => {
        const routeHasFilter = () => {
            switch (window.location.pathname) {
                case '/dashboard':
                    return false
                case '/user-management':
                    return true
                default:
                    return false;
            }
        }
        setHasFilterMenu(routeHasFilter);
    });


    return (
        <div>
            <div className="bg-white border-bottom fixed-top">
                <div className="col-sm-12 col-lg12 col-md-12 header-block">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <Sidebar id="navigationSidebar" visible={sideMenuVisible} onHide={toggleSideMenu}>
                                <nav className="nav flex-column navigation">
                                    <NavLink exact activeClassName="active" className="nav-link" to={'/dashboard'} onClick={toggleSideMenu}>
                                        <i className="linecons-cog fa fa-cog"></i><span>Dashboard</span>
                                    </NavLink>
                                    <NavLink exact activeClassName="active" className="nav-link" to={'/user-management'} onClick={toggleSideMenu}>
                                        <i className="linecons-cog fa fa-cog"></i><span>User Management</span>
                                    </NavLink>
                                </nav>
                            </Sidebar>

                            <Button icon="fa fa-bars" label="" onClick={toggleSideMenu}> </Button>
                            <span className="logo">
                                <a className="navbar-brand" href="/"> <img src={require("../../common/assets/images/icons/n_square.svg")} alt="logo" /></a>
                            </span>
                            <span className="title">CI WF</span>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="form-inline mt-2 mt-md-0 user-block  pull-right">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={'/dashboard'}>
                                            <i className="fa fa-user-circle-o"></i> User Name <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {hasFilterMenu && <div id="filterSidebar" className="right-filter-block">
                <Sidebar visible={filterMenuVisible} onHide={toggleFilterMenu}>
                    {
                        filterTemplate()
                    }
                </Sidebar>
                {filterIconVisible && <Button icon="fa fa-filter" onClick={toggleFilterMenu} />}
            </div>}
        </div >
    )
}

export default Header;


