import { useState,useContext } from 'react';
import { AuthContext} from '../../auth';
import { useFetch } from '../../hooks/';
import iconCard from '../../assets/images/icons/balance/general-card-ligth.svg';
import iconWarning from '../../assets/images/icons/balance/warning.svg';
import iconVerticalLine from '../../assets/images/icons/balance/line-vertical.svg';
import '../../assets/theme/base/balance-component-style-v1.0.css';

export const Balances = () => {

    const {userLogged } = useContext(AuthContext);
    const { data, hasError, isLoading } = useFetch('Balance', 
    { userId:userLogged.userId,sessionId:userLogged.sessionId,channel:1 },1);


    const formatNumber = (num=0) => {
        if(num.toString().split('.').length == 1){
            return Number(num).toLocaleString('es-MX')+'.00';
        }
        return Number(num).toLocaleString('es-MX');
    }


  return (
    <div className="container balance">
    <div className="row d-flex justify-content-between">
        <div className="col-md-3 right-container">
            <div className="balance__card">
                <img className="balance__img" src={(data?.cardURL)?data?.cardURL:iconCard} alt="card" />
            </div>
            <button type="button" className="btn btn-primary balance__button--card">Solicitar tarjetas corporativas</button>
        </div>
        <div className="col-md-9 left-container">
        
            <div className="row">
                <div className="col balance__container--right">
                    <div className="">
                        <h5 className="balance__title">SALDO EN CUENTA</h5>
                        <h4 className="balance__title">${formatNumber(data?.accountBalance) }</h4>
                    </div>
                </div>
                <div className="col balance__container--left" >
                    <div className="">
                        <h5 className="balance__title">SALDO PENDIENTE
                            <img className="balance__img---warning " src={iconWarning}
                                alt="Icon warning" />
                        </h5>
                        <h4 className="balance__title">$ {formatNumber(data?.totalPedingBalance)}</h4>
                    </div>
                </div>
            </div>

            <div className="row balance__container--progress">
                <div className="col-md-9">
                    <div className="progress balance__bar">
                        <div className="progress-bar  balance__progress" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                </div>
            </div>


            <div className="row d-flex justify-content-evenly balance__container--fondeo">
                <div className="col-md-3 balance__container--right">
                    <h5 className="balance__title">Fondeo mensual acumulado</h5>
                    <h4 className="balance__title">$ {formatNumber(data?.accumulatedMonthlyFunding)}</h4>
                </div>
                <div className="col-md-1 ">
                    <img className="balance__line" src={iconVerticalLine} alt="Linea vertical" />
                </div>
                <div className="col-md-3 ">
                    <h5 className="balance__title">Límite mensual de fondeo </h5>
                    <h4 className="balance__title">$ {formatNumber(data?.monthlyFundingLimit)}</h4>
                </div>
                <div className="col-md-1 ">
                    <img className="balance__line" src={iconVerticalLine} alt="Linea vertical" />
                </div>
                <div className="col-md-3">
                    <h5 className="balance__title">Límite restante del mes</h5>
                    <h4 className="balance__title">$ {formatNumber(data?.remainingLimit)}</h4>
                </div>

            </div>

            <div className="row balance__info">
                <div className="col-md-9 p-0">
                    <p className="balance__info--text">
                        Para poder hacer uso completo de la plataforma mandanos tus dato y firma tu contrato <em>* Solicita tus tarjetas empresariales.</em>
                    </p>
                </div>
                <div className="col-md-3 p-0">
                    <button className="btn btn-secondary balance__button--upload">Subir datos</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
