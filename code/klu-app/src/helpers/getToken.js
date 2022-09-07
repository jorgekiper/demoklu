import { getDeviceId } from "./getDeviceId";
import { types } from "../auth/types/types";
export const getToken = async() => {
     const deviceId = getDeviceId();

    const request = {
        'apiKey': types.apiKey,
        'deviceId': deviceId
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
    const url = await fetch(`https://klumoralesv1.b1trus7panel26.com/Token`, body);
    const result = await url.json();
    const response = JSON.parse(result);
    const {code,data} = response;
    const tokenHerror = '200'!=code?true:false;

    console.log(response);
    console.log(data.token);

    return {
        token:data.token,
        tokenHerror,
        deviceId};
}
