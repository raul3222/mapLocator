import {connect} from 'react-redux';
import { compose } from 'redux';
import Coordinates from './Coordinates';
import { getCoord, updateCoords } from '../../redux/coordReduser';
import React from 'react';


class CoordinatesContainer extends React.Component{
     render(){
   return(
     <Coordinates {...this.props}/>
   )
 } 
}
let mapStateToProps = (state) => {
    
    return {
      
        latitude: state.coordReducer.latitude,
      longitude: state.coordReducer.longitude,
        url: state.coordReducer.url
       
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        getCoord: (lat, long) => {
            dispatch(getCoord(lat, long));
      },
      updateCoords: (lat, long) => {
        dispatch(updateCoords(lat, long));
      }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)(CoordinatesContainer));