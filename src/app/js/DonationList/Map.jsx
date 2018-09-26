import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import CircleMarker from "./CircleMarker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Map extends Component {
    static defaultProps = {
        donations: [],
        center: {
            lat: 52.5,
            lng: 13.4
        },
        zoom: 13
    };

    // componentDidMount() {

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "80vh", width: "80%" }}>
                <GoogleMapReact
                    id="map"
                    bootstrapURLKeys={{ key: "AIzaSyABgGifJz-Q8iS7L_dVSCMH5cBVma0IP64" }}
                    defaultCenter={this.props.center}
                    zoom={this.props.zoom}
                >
                    <AnyReactComponent lat={59.955413} lng={30.337844} text={"Berlin"} />
                    {this.props.donations.map(donation => {
                        return (
                            <CircleMarker
                                lat={donation.lat}
                                lng={donation.lng}
                                onClick={e => console.log("CLICK")}
                                onMouseLeave={e => console.log("mouseLeave")}
                            >
                                {donation.donationtitle}
                            </CircleMarker>
                        );
                    })}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
