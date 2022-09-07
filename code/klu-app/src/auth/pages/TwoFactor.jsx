import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import iconKluLogo from '../../assets/images/icons/header/general-logo-full.svg'
import iconKBack from '../../assets/images/icons/login/button_back.svg'
import '../../assets/theme/base/login-component-style-v1.0.css';


export const TwoFactor = () => {

    const navigate = useNavigate();
    const loginViewIsActive = JSON.parse(localStorage.getItem('tempUserLogin'));   

    let hasError = false;

    useEffect(() => {
        if(!loginViewIsActive){
            navigate('/home',{replace:true});
        }
    }, [])


    return (
        <div className="container-fluid login">
            <div className="row login__container">
                <div className="col-md-5 login__container--bg">
                    <div className="login__btngroup">
                        <Link className="btn login__btnreturn--index" to={"/home"}>
                            <img src={iconKBack} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="col-md-7 d-flex justify-content-center align-items-center">
                    <div className="logintf__form">
                        <div className="text-center">
                            <img className="login__logo" src={iconKluLogo} alt="logo-klu" />
                            <div className="logintf__titlegroup">
                                <h1 className="login__title">Two-factor authentication</h1>
                                <span className="login__subtitle">El inicio de sesión está protegido con una aplicación de
                                    autenticación. Introduce el código de autenticación abajo.</span>
                            </div>

                        </div>
                        <div className="d-flex justify-content-center">
                            <form>
                                <div>
                                    <label className={`form-label  ${(hasError) ? 'login__message-error' : ''}`}>Código de verificación</label>
                                    <input type="number" className={`form-control  ${(hasError) ? 'login__message-error' : ''}`} id="login-input-email" />
                                    <span className={`form-control  ${(hasError) ? 'login__message-error' : 'd-none'}`}>No tienes acceso a tu dispositivo de autenticación? Puedes hacer log in con el código de recuperación.</span>
                                </div>

                                <button className="btn btn-secondary login__button login__button--login" type="submit">Iniciar sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
