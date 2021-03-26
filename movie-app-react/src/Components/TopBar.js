import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/movie-logo.png'
import { logoutSuccess } from '../redux/authActions';

const TopBar = () => {
    const {username,isLoggedIn} = useSelector(store => ({
        isLoggedIn: store.isLoggedIn,
        username: store.username
    }));

    const menuArea = useRef(null);

    
    const [menuVisible , setMenuVisible] = useState(false);

    useEffect(() => {
        document.addEventListener('click',menuClickTracker);
        return () => {
            document.removeEventListener('click',menuClickTracker);
        }
    },[isLoggedIn])

    const menuClickTracker = event => {
        if(menuArea.current === null || 
            !menuArea.current.contains(event.target)){
                setMenuVisible(false);
            }
    }

    const dispatch = useDispatch();

    const{t} = useTranslation();

    const onLogOutSuccess = () => {
        dispatch(logoutSuccess());
    };

    let links = (
        <ul className = "navbar-nav ml-auto">
            <li>
                <Link className="nav-link" to='/login'>
                    {t('Login')}
                </Link>
            </li>
        </ul>
    );

    if(isLoggedIn){
        let dropDownClass = "dropdown-menu p-0 shadow";

        if(menuVisible){
            dropDownClass = "dropdown-menu show p-0 shadow";
        }
    links = (
        <ul className="navbar-nav ml-auto" ref={menuArea}>
            <li className="nav-item dropdown">
                <div style={{cursor: "pointer"}} className="d-flex" onClick={() => {
                    setMenuVisible(true);
                }}>
                    <span className="nav-link dropdown-toggle">{username}</span>
                </div>

                <div className={dropDownClass}>
                    <Link className="dropdown-item d-flex p-2" to="/director"
                    onClick={() => {
                        setMenuVisible(false);
                    }}>
                        <span className="material-icons mr-2">
                            create
                        </span>
                        {t('Add Director')}
                    </Link>

                    <Link className="dropdown-item d-flex p-2" to="/movies"
                    onClick={() => {
                        setMenuVisible(false);
                    }}>
                        <span className="material-icons mr-2">
                            theaters
                        </span>
                        {t('Add Movie')}
                    </Link>

                    <Link className="dropdown-item d-flex p-2" to="/studio"
                    onClick={() => {
                        setMenuVisible(false);
                    }}>
                        <span className="material-icons mr-2">
                            movie
                        </span>
                        {t('Add Studio')}
                    </Link>
                    
                    <span>
                        <Link className="dropdown-item d-flex p-2" to="/" onClick={onLogOutSuccess}>
                        <span className="material-icons text-danger mr-2">
                                    power_settings_new
                                </span>
                                    {t('Log Out')}
                        </Link>
                    </span>
                </div>
            </li>
        </ul> 
    )
    }
    return (
        <div>
            <nav className="navbar navbar-light container navbar-expand">
                <Link className="navbar-brand" to="/">
                    <img style={{marginRight: 10}}src={logo} width="60" alt="hoaxify logo"/>  
                    Movie App
                </Link>
                {links}
            </nav>
        </div>
    );
};

export default TopBar;