import { useContext } from 'react';
import { AuthContext} from '../../auth';
import { useFetch } from '../../hooks';
import { Header,Footer,LoaderFuncional } from '../ui'
import { Balances,Movements,BankStocks } from './';

export const Dashboard = () => {
  localStorage.removeItem('tempUserLogin');


  const { userLogged, logout } = useContext(AuthContext);

  const { data, hasError, isLoading } = useFetch('SetSessionActivity', 
  { userId:userLogged.userId,sessionId:userLogged.sessionId,action:1 },1);

    if(hasError){
      logout();
      navigate('/home', {
          replace: true
      });
    }


  return (
    <>
    <Header/>
    <Balances/>
    <BankStocks/>
    <Movements />
    <Footer />
    <LoaderFuncional show={false} />
    </>
  )
}
