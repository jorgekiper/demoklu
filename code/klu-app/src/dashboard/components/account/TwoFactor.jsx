import { Link, NavLink, useNavigate } from 'react-router-dom'
import iconQR from '../../../assets/images/myaccount/codigo-qr.svg';
import iconBackArrow from '../../../assets/images/myaccount/back-arrow.svg';

export const TwoFactor = () => {
  return (
    <div className="container" id="my-account">
    <div className="primera">
        <div className="row text-end">
            <div className="col-md-6">
                <h5 className="configurar__titulo">Configurar 2FA</h5>
            </div>
            <div className="col-md-6">

            <Link className="btn btn-link" to={"/dashboard/account"}>
                        <img src={iconBackArrow} />
                        Volver a mi información</Link>

            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div>
                <h5 className="configurar__subtitulo">Configurar aplicación de autenticación</h5>
                <h4 className="configurar__pautas">1.- Descarga un "two-factor authenticator" llamado Google
                    Authenticator para Android y iOS.</h4>
                <h4 className="configurar__pautas">2.- Escanea el Codigo QR o introduce esta clave dwoi ncaz ozeg njju
                    mvfd ac74 r75j yrxh con
                 
                    tu aplicación de autenticación.
                </h4>
                <h4 className="configurar__pautas">3.- Una vez que escanees el codigo QR, tu aplicación te dará un
                    codigo único.
                    Introduce el
                  
                    código en el campo de confirmación abajo.
                </h4>
            </div>
            <div className="configurar__rectangle">
                <img src={iconQR} className="configurar__QR" />
            </div>
            <label className=" configurar__label">Código de verificación</label>
            <div>
                <input placeholder="Victor Manuel Pernia Politan" className="configurar__input" />
            </div>




            <div className="mt-5 ">
                <button className="btn btn-secondary configurar__verify">Verificar 2FA</button>
            </div>
        </div>
    </div>
    {/* <div className="segunda">
        <div className="row text-end">
            <div className="col-md-6">
                <h5 className="configurar__titulo">Configurar 2FA</h5>
            </div>
            <div className="col-md-6">
                <button className="btn btn-link">
                    <img src="../assets/klu/img/icons/myaccount/back-arrow.svg" />
                    Volver a mi información</button>

            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div>
                <label className=" configurar__label">Nombre</label>
                <div>
                    <input placeholder="Victor Manuel Pernia Politan" className="configurar__input" />
                </div>
                <div className="mt-5 ">
                    <button className="btn btn-secondary configurar__verify">Deshabilitar</button>
                </div>
            </div>
        </div>


    </div> */}
</div>
  )
}
