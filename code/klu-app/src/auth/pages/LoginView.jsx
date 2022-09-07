import { useContext,useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '..'
import { useFetch } from '../../hooks';
import { LoaderFuncional } from '../../dashboard/ui/';
import iconKBack from '../../assets/images/icons/login/button_back.svg'
import iconKluLogo from '../../assets/images/icons/header/general-logo-full.svg'
import '../../assets/theme/base/login-component-style-v1.0.css';

export const LoginView = () => {

    const { login } = useContext( AuthContext );
    const navigate = useNavigate();
    const loginViewIsActive = JSON.parse(localStorage.getItem('tempUserLogin'));
    if(!loginViewIsActive){
        navigate('/home',{replace:true});
    }


    const [tempUserData, settempUserData] = useState({
        tempName:'',
        nameWithPoints:'',
        tempEmail:'',
        userPassword:'',
        intentos:0,
        errorRequest:false
    });
    const {tempName,tempEmail,userPassword,intentos,errorRequest} = tempUserData;


    const { response, hasError, isLoading } = useFetch('Login', {
        email: tempEmail,
        credential: userPassword,
        rememberMe: false,
        latUsr: "25.74477152094594",
        longUsr: "-100.17531076721475",
        channel: 1,
        ip: "183.123.23.23",
        macAddress: ""

    }, intentos);


    if (!hasError && !!response) {
        const { session, data } = response;
        login({
            email:tempEmail,
            name: loginViewIsActive.tempName,
            userId: data.userId,
            sessionId: session.sessionId,
        });
        navigate('/', {
            replace: true
        });
    }

    if(hasError){
        const { error } = response;
        console.log('Error','L-008'==error.errorCode);
        if('L-008'==error.errorCode){
            navigate('/home/twof', {
                replace: true
            });
        }
    }
    

    const onLogin = (event) => {
        event.preventDefault();
        
        const passwordEvent = event.target[0].value;
        console.log(passwordEvent);
        if (passwordEvent.length > 0) {
            settempUserData({
                ...tempUserData,
                intentos: intentos + 1,
                userPassword: passwordEvent,
                tempEmail: loginViewIsActive.tempEmail,
                tempName: loginViewIsActive.name
            })
        }
    }


    return (
       <>
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
                    <div className="login__form">
                        <div className="text-center">
                            <img className="login__logo" src={iconKluLogo} alt="logo-klu" />
                                <div className="login__titlegroup">
                                    <h1 className="login__title">¡Hola {loginViewIsActive?.nameWithPoints}!</h1>
                                    <span className="login__subtitle">Ingresa tu contraseña</span>
                                </div>

                        </div>
                        <form onSubmit={onLogin}>
                            <div>
                                <label className={`form-label   ${(hasError) ? 'login__message-error' : ''}`} name='pass'>Contraseña</label>
                                <input type="password" className={`form-control  ${(hasError) ? 'login__message-error' : ''}`} name="passwordUser" />
                                <span className={` ${(hasError) ? 'login__message-error' : 'd-none'}`}>Ups! ocurrio un problema verifica tus datos</span>
                            </div>

                            <button className="btn btn-secondary login__button login__button--login" type="submit">Iniciar sesión</button>
                        </form>
                        <Link to={"/fpassword"} className="btn btn-link--gray login__button login__button--forget">¿Olvidaste tu contraseña?</Link>
                        <Link to={"/home"} className="btn btn-link login__button login__button--return">Volver al correo electrónico</Link>
                    </div>
                </div>
            </div>
        </div>

        <LoaderFuncional show={isLoading}/>
       </>
    )
}
