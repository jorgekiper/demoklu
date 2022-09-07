import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useFetch,useTimer } from '../../hooks/';
import {LoaderFuncional} from '../../dashboard/ui/';
import iconKluLogo from '../../assets/images/icons/header/general-logo-full.svg'
import iconKBack from '../../assets/images/icons/login/button_back.svg'
import '../../assets/theme/base/login-component-style-v1.0.css';

export const Home = () => {

   
    const navigate = useNavigate();


    const [formEmailState, setFormEmailState] = useState({
        emailForm:'',
        intentos:0,
        errorRequest:false
    });

    // const {mins,secs} = useTimer(1,30);

    const {emailForm,intentos,errorRequest} = formEmailState;


    useEffect(() => {
        localStorage.removeItem('tempUserLogin');
        if(emailForm.length == 0 && !emailForm.includes('@')){
            return;
        }
        setFormEmailState({
            ...formEmailState,
            emailForm
        });
    }, [emailForm])
    

    const onActionForm = (event) => {
        event.preventDefault();
        setFormEmailState({
            ...formEmailState,
            emailForm:''
        });

        const emailEvent = event.target[0].value;
        console.log('emailEvent',emailEvent);

        if(emailEvent.length == 0 && !emailEvent.includes('@')){
            return;
        }
        setFormEmailState({
            ...formEmailState,
            emailForm:emailEvent,
            intentos: intentos+1
        });
    }

   
    const { data, hasError, isLoading } = useFetch('GetNameToLogin', { email:emailForm },intentos);


    if(!!data){
        console.log("entro al if");
        const { email, name,nameWithPoints} = data;
        localStorage.setItem('tempUserLogin', JSON.stringify({
            tempName:name,
            nameWithPoints,
            tempEmail:email,
            tempTwof:'',
            tempRpassword:''
        }));

        navigate('/home/login',{
            replace:true
        });
    }


    return (
        <>
        <div className="container-fluid login">
            <div className="row login__container">
                <div className="col-md-5 login__container--bg">
                    <div className="login__btngroup">
                        <a className="btn login__btnreturn--index" href="https://klu.mx/">
                            <img src={iconKBack} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-md-7 d-flex justify-content-center align-items-center">
                    <div className="login__form">
                        <div className="text-center">
                            <img className="login__logo" src={iconKluLogo} alt="logo-klu" />
                            <div className="login__titlegroup">
                                <h1 className="login__title">Iniciar sesión</h1>
                            </div>
                        </div>
                        <form onSubmit={onActionForm}>
                            <div>
                                <label className={`form-label   ${(hasError) ? 'login__message-error' : ''}`}>Correo</label>
                                <input 
                                type="email" 
                                className={`form-control  ${(hasError) ? 'login__message-error ' : ''}`} 
                                id="login-input-email"
                                name="inputgetname" 
                                />
                                <span className={` ${(hasError) ? 'login__message-error' : 'd-none'}`}>Ups! ocurrio un problema verifica tus datos</span>
                                {/* <span className={` ${(hasError) ? 'login__message-error' : 'd-none'}`}>Tu cuenta ha sido bloqueada espera {mins}:{secs < 10 ? `0${secs}` : secs} minutos</span> */}
                            </div>

                            <button className="btn btn-secondary login__button login__button--login" type="submit">Continuar</button>
                        </form>
                        <button className="btn btn-primary login__button login__button--registry">Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
        
        <LoaderFuncional show={isLoading}/>
        </>
    )
}
