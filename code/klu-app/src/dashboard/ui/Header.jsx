import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {endpoint} from '../../types/endpoint';
import iconKluLogo from '../../assets/images/icons/header/general-logo-full.svg';
import iconNotityActive from '../../assets/images/icons/header/notify-active.svg';
import iconAvatar from '../../assets/images/icons/header/avatar.svg';
import '../../assets/theme/base/navbar-component-style-v1.0.css';
import { useContext } from 'react';
import { AuthContext} from '../../auth';
import { useFetch,useTimer } from '../../hooks/';
import { useState } from 'react';


export const Header = () => {


    const [count, setCount] = useState(0);

    const { userLogged, logout } = useContext(AuthContext);

    const { data, hasError, isLoading } = useFetch(endpoint.setSessionActivity,
        { userId: userLogged.userId, sessionId: userLogged.sessionId, action: 2 }, count);

    const navigate = useNavigate();

    if(!!data && !hasError){
        console.log(data);
        logout();
        navigate('/home', {
            replace: true
        });
    }

    const onLogOut = (e) => {
        e.preventDefault();
        setCount(1);
    }





   return (
    <>
           <nav className="navbar navbar-expand-lg navbar-light bg-white">
               <div className="container nav-container">
                   <a className="navbar-brand" href="#">
                       <img src={iconKluLogo} alt="Klu" />
                   </a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                       aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <div className="navbar-nav me-auto mb-2 mb-lg-0">

                       </div>
                       <div className="d-flex">
                           <a className="pe-2" href="#">
                               <img src={iconNotityActive} alt="bell" />
                           </a>
                           <div className="btn-group">
            
                               <button type="button" className="avatar__btnuser dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                   <img src={iconAvatar} alt="avatar" />
                               </button>
                               <ul className="avatar__ulmenu dropdown-menu dropdown-menu-end">
                                   <li><a className="avatar__item avatar__item--bbutton dropdown-item">{userLogged?.name}</a></li>
                                   <li><Link className="avatar__item avatar__item--bbutton dropdown-item btn btn-link" to={"/dashboard/account"}>Mis datos</Link></li>
                                    <li><button 
                                   className="avatar__item avatar__item--bbutton dropdown-item"
                                   onClick={onLogOut}
                                   >Cerrar sesión</button></li>
                                   <li><a className="avatar__item avatar__item--date dropdown-item" href="#">Última sesión: {userLogged?.date}</a></li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>



           </nav> 
    </>
   )
}
