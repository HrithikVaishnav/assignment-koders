import React from 'react';
import {Link , NavLink} from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import TableChartIcon from '@material-ui/icons/TableChart';
import PersonIcon from '@material-ui/icons/Person';
import ErrorIcon from '@material-ui/icons/Error';
import './sidebar.css';
const Navbar = () => {
    return(
        <div className="container">
            <div className="sidebar">
                <div className="logo">
                    <Link className="logo-link">
                        Home
                    </Link>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <div className="icons">
                            <CreateIcon/>
                        </div>
                        <NavLink className="item-link" exact to="/">
                            Blog Dashboard
                        </NavLink>
                    </li>
                    <div class="vertical-line"></div>
                    <li className="nav-item">
                        <div className="icons">
                            <VerticalSplitIcon/>
                        </div>
                        <NavLink className="item-link" exact to="/blog_post">
                            Blog Posts
                        </NavLink>
                    </li>
                    <div class="vertical-line"></div>
                    <li className="nav-item">
                        <div className="icons">
                            <NoteAddIcon/>
                        </div>
                        <NavLink className="item-link" exact to="/add_post">
                            Add New Post
                        </NavLink>
                    </li>
                    <div class="vertical-line"></div>
                    <li className="nav-item">
                        <div className="icons">
                            <ViewModuleIcon/>
                        </div>
                        <NavLink className="item-link" exact to="/form">
                            Forms and Components
                        </NavLink>
                    </li>
                    <div class="vertical-line"></div>
                    <li className="nav-item">
                        <div className="icons">
                            <TableChartIcon/>
                        </div>
                        <NavLink className="item-link" exact to="/tables">
                            Tables
                        </NavLink>
                    </li>
                    <div class="vertical-line"></div>
                    <li className="nav-item">
                        <div className="icons">
                            <PersonIcon/>
                        </div>
                        <NavLink className="item-link" exact to="/user_profile">
                            User Profile
                        </NavLink>
                    </li>
                    <div class="vertical-line"></div>
                    <li className="nav-item">
                        <div className="icons">
                            <ErrorIcon/>
                        </div>
                        <NavLink className="item-link" exact to="/errors">
                            Errors
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;