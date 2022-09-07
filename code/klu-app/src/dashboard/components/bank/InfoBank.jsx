import { useContext,useEffect,useState } from 'react';
import { AuthContext} from '../../../auth';
import { useFetch } from '../../../hooks';
import iconCopy from '../../../assets/images/icons/operaciones/bank-info/copy.svg';

export const InfoBank = () => {

    const {userLogged } = useContext(AuthContext);

    const [infoBank, setinfoBank] = useState({
        bankReceptor: "",
        beneficiario: "",
        reference: "",
        clabe: "",
        intentos:0
    });

    const {bankReceptor,beneficiario,reference,clabe,intentos} = infoBank;

    const { data, hasError, isLoading } = useFetch('DataSpei', 
    { userId:userLogged.userId,sessionId:userLogged.sessionId },1);


   useEffect(() => {
   }, [])
   
  return (
      <div className="tab-pane fade show active" id="k-pills-info" role="tabpanel" aria-labelledby="k-pills-info-tab">
          <div className="d-flex justify-content-center">
              <div className='botonera__tabcontainer'>
                  <div className="botonera__titlegroup">
                      <h4 className="botonera__title">Información bancaria </h4>
                  </div>

                  <div className="row">
                      <div className="col-6">
                          <label className="form-label ">Beneficiario</label>
                          <div className="d-flex">
                              <input type="text" className="form-control botonera__inputs" id="input-beneficiario"
                                  value={data?.Beneficiario} />
                              <button className='sn-style'
                                  onClick={() => { navigator.clipboard.writeText(data?.Beneficiario) }}
                              ><img className="botonera__iconcopy" src={iconCopy} /></button>
                          </div>
                      </div>

                      <div className="col-6">
                          <label className="form-label ">Banco receptor</label>
                          <div className="d-flex">
                              <input type="text" className="form-control botonera__inputs" id="input-banco-receptor"
                                  value={data?.BancoReceptor} />
                              <button className='sn-style'
                                  onClick={() => { navigator.clipboard.writeText(data?.BancoReceptor) }}
                              ><img className="botonera__iconcopy" src={iconCopy} /></button>
                          </div>
                      </div>
                  </div>

                  <div className="row mt-24">
                      <div className="col-md-6">
                          <label  className="form-label ">Clabe</label>
                          <div className="d-flex">
                              <input type="text" className="form-control botonera__inputs" id="input-clabe"
                                  value={data?.CLABE} />
                              <button className='sn-style'
                                  onClick={() => { navigator.clipboard.writeText(data?.CLABE) }}
                              ><img className="botonera__iconcopy" src={iconCopy} /></button>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <label className="form-label ">Referencia</label>
                          <div className="d-flex">
                              <input type="text" className="form-control  botonera__inputs" id="input-referencia"
                                  value={data?.Referencia} />
                              <button className='sn-style'
                                  onClick={() => { navigator.clipboard.writeText(data?.Referencia) }}
                              ><img className="botonera__iconcopy" src={iconCopy} /></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
