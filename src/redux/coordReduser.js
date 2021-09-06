import { getCoordApi } from "../api/api";
const UPD_COORD = 'UPD_COORD';
const UPD_URL = 'UPD_URL';

let initialState = {
    latitude: '',
    longitude: '',
    url: ''
}
const coordReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPD_COORD: {
            return {
                ...state, latitude:action.lat, longitude: action.long
            }
        }
        case UPD_URL: {
            return {
                ...state, url:action.url
            }
        }
        default:
            return state;
    }      
}
export const updURLActionCreator = (url) => {
    return {
        type: UPD_URL, url
    }
}

export const updateCoords = (lat, long) => {
    return {
        type: UPD_COORD,
        lat, long
    }
}

export const getCoord = (latitude, longitude) => {
    return (dispatch) => {
        getCoordApi.getCoord(latitude, longitude)
            .then(data => {
            dispatch(updURLActionCreator(data));
        })
    }
}

export default coordReducer;


