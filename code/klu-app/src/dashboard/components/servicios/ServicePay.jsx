import { useContext,useEffect,useState } from 'react';
import {ServiceGeneral,ServiceDetail,ServicePayment} from './'
import { AuthContext} from '../../../auth';
import { useFetch } from '../../../hooks';
import { LoaderFuncional } from '../../ui';

export const ServicePay = () => {

    const {userLogged } = useContext(AuthContext);

    const [servicePayView, setservicePayView] = useState({
        view:0,
        category:0
    });

    const {view,category} = servicePayView;

    console.log('category',category);
    console.log('view',view);



    const onSetCategory = (id) => {
        setservicePayView({
            view:1,
            category:id
        })
    }

    const onSetView = (id) => {
        setservicePayView({
            ...servicePayView,
            view:id
        })
    }


    useEffect(() => {
        setservicePayView({
            view:0,
            category:0
        });
    }, [])
    



    return (
        <>
        <div className="tab-pane fade " id="k-pills-pago-servicios" role="tabpanel" aria-labelledby="k-pills-pago-servicios-tab">
            <div className="d-flex justify-content-center">
                {
                    (0 == view) ?
                    <ServiceGeneral key={0} onSetCategory={onSetCategory} /> 
                    :<ServiceDetail  key={1} onSetView={onSetView} idCategory={category} />
                }

                {/* <ServicePayment/> */}
            </div>
        </div>
        </>
    )
}
