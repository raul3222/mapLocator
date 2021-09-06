import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://static.maps.2gis.com/1.0'
});

export const getCoordApi = {
    
    getCoord(latitude, longitude) {
        return instance.get(`?s=880x500&c=${latitude},${longitude}&z=13`)
            .then(responce => {
                return responce.config.baseURL + responce.config.url;
            })
    }
}
 