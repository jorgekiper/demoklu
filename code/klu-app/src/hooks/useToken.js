import { useEffect, useState } from "react";


export const useToken = () => {

    let url =`https://klumoralesv1.b1trus7panel26.com/Token`;

    const request = {
        "apiKey" : "L8hRmttc8Lc34dA8zc6EwdvLCtn6yd",
        "deviceId" : "pruebas"
    }

    const body = {
        method: "POST",
        credentials: 'omit',
        body: JSON.stringify(request),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer'
    };

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
        response:null,
        code:null,
        token:null
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });
        
        const resp = await fetch(url, body);
        const result = await resp.json();
        const response = JSON.parse(result);
        const {code,data} = response;

        setState({
            data,
            isLoading:false,
            hasError:'200'!=code?true:false,
            token:data.token,
            response,
            code
        });
    }


    useEffect(() => {
        getFetch();
    }, [url])
    


    return {
        token:      state.token,
        isLoading: state.isLoading,
        hasError:  state.hasError
    };
}
