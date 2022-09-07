import { Link, NavLink, useNavigate } from 'react-router-dom'
import iconBackArrow from '../../../assets/images/myaccount/back-arrow.svg';
import iconCard from '../../../assets/images/myaccount/card.svg';

export const MyAccount = () => {
    return (
        <div className="container" id="my-account">
            <div className="row text-end">
                <div className="col-md-6">
                    <h4>Información  General</h4>
                </div>
                <div className="col-md-6">
                    <Link className="btn btn-link" to={"/dashboard"}>
                        <img src={iconBackArrow} />
                        Volver a mi cuenta</Link>
                </div>
            </div>
            <div className="row d-flex justify-content-center">

                <ul className="nav nav-pills mb-3" id="my-account-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="btn btn-light klu-w-300 active" id="pills-my-account-tab" data-bs-toggle="pill" data-bs-target="#pills-my-account" type="button" role="tab" aria-controls="pills-my-account" aria-selected="true">
                            <img src={iconCard} /> Información personal</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-my-account" role="tabpanel" aria-labelledby="pills-my-account-tab">
                        <div className="">
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <label for="input-account-nombre" className="form-label klu-standard">Razón social:</label>
                                    <input type="email" className="form-control klu-standard klu-w-540 " id="input-account-nombre" aria-describedby="Nombre" placeholder="Victor Manuel Pernia Politan" />
                                </div>
                                <div className="col-md-6">
                                    <label for="input-account-email" className="form-label klu-standard">Correo</label>
                                    <input type="email" className="form-control klu-standard klu-w-540 " id="input-account-email" aria-describedby="Email" placeholder="sofiatorres456@gmail.com" />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <label for="input-account-curp" className="form-label klu-standard">RFC / Tax ID:</label>
                                    <input type="email" className="form-control klu-standard klu-w-540 " id="input-account-curp" aria-describedby="CURP" placeholder="SOTR873456HDDF0223" />
                                </div>
                                <div className="col-md-6">
                                    <label for="input-account-telefono" className="form-label klu-standard">Número de teléfono</label>
                                    <input type="email" className="form-control klu-standard klu-w-540 " id="input-account-telefono" aria-describedby="Email" placeholder="sofiatorres456@gmail.com" />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <label for="input-account-curp" className="form-label klu-standard">E-Firma:</label>
                                    <input type="text" className="form-control klu-standard klu-w-540 " id="input-account-curp" aria-describedby="CURP" placeholder="Victor Manuel Pernia Politan" />
                                </div>
                                <div className="col-md-6">
                                    <label for="input-account-telefono" className="form-label klu-standard">Dirección de la empresa:</label>
                                    <input type="email" className="form-control klu-standard klu-w-540 " id="input-account-telefono" aria-describedby="Email" placeholder="sofiatorres456@gmail.com" />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <label for="input-account-curp" className="form-label klu-standard">Fecha de constitución:</label>
                                    <input type="text" className="form-control klu-standard klu-w-540 " id="input-account-curp" aria-describedby="CURP" placeholder="Victor Manuel Pernia Politan" />
                                </div>
                                <div className="col-md-6">
                                    <label for="input-account-telefono" className="form-label klu-standard">Representante legal:</label>
                                    <input type="email" className="form-control klu-standard klu-w-540 " id="input-account-telefono" aria-describedby="Email" placeholder="sofiatorres456@gmail.com" />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <label for="input-account-curp" className="form-label klu-standard">Dirección del representante legal:</label>
                                    <input type="text" className="form-control klu-standard klu-w-540 " id="input-account-curp" aria-describedby="CURP" placeholder="Victor Manuel Pernia Politan" />
                                </div>
                                <div className="col-md-6">
                                    <label for="input-account-telefono" className="form-label klu-standard">Registro de la cuenta:</label>
                                    <input type="email" className="form-control klu-standard klu-w-540 " id="input-account-telefono" aria-describedby="Email" placeholder="sofiatorres456@gmail.com" />
                                    <div className="mt-5 text-end">
                                        <Link className="btn btn-secondary klu-w-280" to={"/dashboard/tf"}>Configurar 2FA</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
