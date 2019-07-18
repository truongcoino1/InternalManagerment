
export const locationService = {
    getCurrentPosition: (successFunc) => {
        return new Promise((resolve, reject) => {
            if ("geolocation" in navigator) {
                let success = (result) => {
                    successFunc(result);
                    resolve();
                };

                let error = (error) => {
                    // console.log(error);
                    resolve();
                    alert(`Unable to retrieve your location. Please check your location settings`);
                };

                let options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 60000 };


                navigator.geolocation.getCurrentPosition(success, error, options);
            } else {
                alert("Geolocation not supported this browser");
                reject();
            }
        });
    }
};
