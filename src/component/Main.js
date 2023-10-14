import React from "react";

const Main = (props) => {
    return(
        <>
            <session className="main">
                <div className="card">
                    <img src={props.item.imageUrl} alt="card-img" />
                    <div className="card-item">
                        <img className="card-location" src="/image/location.png" alt="card-location"/>
                        <span className="country">{props.item.location}</span>
                        <span><a className="map" href={props.item.googleMapsUrl}>View on Google Map</a></span>
                        <h1 className="card-title">{props.item.title}</h1>
                        <p className="date">
                            <span>{props.item.startDate} - </span>
                            <span>{props.item.endDate}</span>
                        </p>
                        <p className="card-description">{props.item.description}</p>
                    </div>
                </div>
            </session>
            <hr className="line"></hr>
        </>
    )
}

export default Main