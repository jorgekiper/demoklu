import { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import iconKluLogo from '../../assets/images/icons/header/general-logo-full.svg'
import iconKBack from '../../assets/images/icons/login/button_back.svg'
import '../../assets/theme/base/login-component-style-v1.0.css';


export const ResetPassword = () => {

    const navigate = useNavigate();
    const loginViewIsActive = JSON.parse(localStorage.getItem('tempUserLogin'));    

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
            <div className="login__rpform">
                <div className="text-center">
                    <img className="login__logo" src={iconKluLogo} alt="logo-klu" />
                    <div className="login__titlegroup">
                    <h1 className="login__title">Recuperar contraseña</h1>
                    </div>
                    
                </div>
                <form>
                    <div>
                        <label className="form-label login__message-error">Nueva contraseña </label>
                        <input type="password" className="form-control login__message-error" id="login-input-email" placeholder="email@klu.mx" />
                    </div>

                    <div className="login__container--rp">
                        <label className="form-label login__message-error">Confirmar contraseña </label>
                        <input type="password" className="form-control login__message-error" id="input__rp--cp" placeholder="email@klu.mx" />
                        <span className="login__message-error">Ups! ocurrio un problema verifica tus datos</span>
                    </div>
            
                    <button className="btn btn-secondary login__button login__button--login" type="submit">Enviar</button>
                </form>             
            </div>
        </div>
    </div>
</div>
  )
}
