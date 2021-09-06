import React from 'react';

const Coordinates = (props) => {
    let lat1 = React.createRef();
    let long1 = React.createRef();

    let getMap = () => {
        props.getCoord(props.latitude, props.longitude);
    }
   let onChangeCoords = () => {
       let lat = lat1.current.value;
       let long = long1.current.value;
       props.updateCoords(lat, long);
       getMap(lat, long);
    }
    return (
        <div>
            <div>
                <textarea onChange={onChangeCoords} ref={lat1} value={props.latitude} placeholder='55.4565'/>
                <textarea onChange={onChangeCoords} ref={long1} value={props.longitude} placeholder='37.4565'/>
            </div>
            {/* <div> <button onClick={getMap()}>Показать</button></div> */}
               
            <br />
        
            <div>
                <img src={props.url} alt='...' />
            </div>

        </div>
    )

}

export default Coordinates;