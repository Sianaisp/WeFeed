import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import CircleMarker from "./CircleMarker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Map extends Component {
    static defaultProps = {
        center: {
            lat: 52.5,
            lng: 13.4
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "80vh", width: "80%" }}>
                <GoogleMapReact
                    id="map"
                    bootstrapURLKeys={{ key: "AIzaSyABgGifJz-Q8iS7L_dVSCMH5cBVma0IP64" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent lat={59.955413} lng={30.337844} text={"Berlin"} />
                    <CircleMarker
                        lat={52.5063688}
                        lng={13.3711224}
                        onClick={e => console.log("click")}
                        onMouseLeave={e => console.log("mouseLeave")}
                    >
                        Donation 1
                    </CircleMarker>

                    <CircleMarker lat={52.47} lng={13.4} borderColor="blue">
                        Donation 2
                    </CircleMarker>
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
