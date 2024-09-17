import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SET_ADMIN, useAppContext } from '../../../context';

const Dashboard = () => {
    const { state: { user }, dispatch } = useAppContext()
    const [sideToggle] = useState(false)
    const [ setTitle] = useState('Easy Consulting')

    useEffect(() => {
        axios.get(`https://immense-river-40491.herokuapp.com/admin?email=${user.email}`)
        .then(res => {
            if(res.data.length > 0){
                dispatch({type: SET_ADMIN, payload: true})
            }
        })
    },[dispatch, user.email])

    return (
        <div id="dashboard">
            <div id="sidebar" className={ sideToggle ? "active" : "" }>
                <div className="sidebarContent">
                    <Sidebar setTitle={setTitle}/>
                    <div className="backBtnBox">
                        <Link to="/">
                            <button className="backBtn"> 
                            <FontAwesomeIcon icon={faSignOutAlt}/>
                             back to home</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/*<div id="pageContent">*/}
            {/*    <div className="dashBoardHeader">*/}
            {/*        <div className="d-flex align-items-center">*/}
            {/*            <div id="nav-icon"*/}
            {/*            className={sideToggle ? "menu-btn" : "menu-btn open"}*/}
            {/*            onClick={() => setSideToggle(!sideToggle)}>*/}
            {/*                <span></span>*/}
            {/*                <span></span>*/}
            {/*                <span></span>*/}
            {/*                <span></span>*/}
            {/*                <span></span>*/}
            {/*                <span></span>*/}
            {/*            </div>*/}
            {/*            <h3>{title}</h3>*/}
            {/*        </div>*/}
            {/*        <PopOver/> */}
            {/*    </div>*/}
            {/*     {*/}
            {/*        admin ? <AdminDashboard/> : <UserDashboard/>*/}
            {/*    } */}
            {/*</div>*/}
        </div>
    )
}

export default Dashboard
