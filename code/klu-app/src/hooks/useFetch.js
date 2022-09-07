import { useEffect, useState } from "react";
import {getToken} from '../helpers/getToken'


export const useFetch = ( api,request,intento ) => {

    let url =`https://klumoralesv1.b1trus7panel26.com/${api}`;

    const [state, setState] = useState({
        data: '',
        isLoading: false,
        hasError: false,
        response:null,
        code:0
    })

    const getFetch = async () => {
        const {token,deviceId} = await getToken();

        const req = {
            ...request,
            token,
            deviceId
        }

        const body = {
            method: "POST",
            credentials: 'omit',
            body: JSON.stringify(req),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer'
        };


        setState({
            ...state,
            isLoading: true,
            data: ''
        });
        console.log('useFetch::request API =',api);
        console.log('useFetch::request =',body);
        const resp = await fetch(url, body);
        const result = await resp.json();
        console.log('useFetch::response result =',result);
        const response = JSON.parse(result);
        const {code,data} = response;
        console.log('useFetch::response =',response);
        

        setState({
            data,
            isLoading:false,
            hasError:'200'!=code?true:false,
            response,
            code
        });
    }


    useEffect(() => {
        if(intento > 0){
            getFetch()
        }
    }, [intento])
    

    console.log('Use Fetch',state.data);

    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
        response: state.response,
        code:     state.code
    };
}
