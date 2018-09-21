import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 52.522193,
            lng: 13.41374
        },
        zoom: 12
    };

    render() {
        const mappedMarker = this.props.donators.address((el, i) => (
            <MapMarker key={i} lat={el.venue.lat} lng={el.venue.lon} />
        ));

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "50vh", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyABgGifJz-Q8iS7L_dVSCMH5cBVma0IP64" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {mappedMarker}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
