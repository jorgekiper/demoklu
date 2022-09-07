
export const getDeviceId = () => {
    const deviceIdHandler = JSON.parse(localStorage.getItem('deviceIdHandler'));
    if (!deviceIdHandler) {
        let dateTime = new Date().getTime();
        let characters = (Math.random() + 1).toString(36).substring(7) + "-"
            + (Math.random() + 1).toString(36).substring(7) + "-"
            + (Math.random() + 1).toString(36).substring(7) + "-"
            + (Math.random() + 1).toString(36).substring(7) + "-"
            + (Math.random() + 1).toString(36).substring(7);
        let deviceId = dateTime + "-" + characters;
        console.log(deviceId);
        localStorage.setItem('deviceIdHandler', JSON.stringify({deviceId}));
        return deviceId;
    }
    return deviceIdHandler.deviceId;
}
