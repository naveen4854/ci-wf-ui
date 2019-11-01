import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
// import { connect } from 'react-redux';
// import * as actionCreators from '../../store/actions';
import './Header.scss';
// <{}, {
//     visibleLeft: boolean,
//     visible: boolean
// }>
const Header: React.FC = () => {
    const [state, setState] = useState({
        visibleLeft: false,
        visible: false
    });

    const closeSidebar = () => {
        setState({ ...state, visible: false });
    }


    const hideFilterIcon = () => {
        setState({ ...state, visibleLeft: !state.visibleLeft });
    }

    const hideNavSidebar = () => {
        setState({ ...state, visibleLeft: false });
    }



    return (
        <div>
            <div className="bg-white border-bottom fixed-top">
                <div className="col-sm-12 col-lg12 col-md-12 header-block">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <Sidebar id="navigationSidebar" visible={state.visibleLeft} onHide={hideNavSidebar}>
                                <nav className="nav flex-column navigation">
                                    <NavLink exact activeClassName="active" className="nav-link" to={'/dashboard'} onClick={hideNavSidebar}>
                                        <i className="linecons-cog fa fa-cog"></i><span className="title">Dashboard</span>
                                    </NavLink>
                                </nav>
                            </Sidebar>

                            <Button icon="fa fa-bars" label="" onClick={hideFilterIcon}> </Button>
                            <span className="logo">
                                <a className="navbar-brand" href="/"> <img src={require("../../assets/images/icons/n_square.svg")} alt="logo" /></a>
                            </span>
                            <span className="titel">CI WF</span>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="form-inline mt-2 mt-md-0 user-block  pull-right">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={'/dashboard'}>
                                            <i className="fa fa-user-circle-o"></i> Vishal Jani (CS) <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;


