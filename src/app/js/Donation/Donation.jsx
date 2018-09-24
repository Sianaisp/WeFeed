import React from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    // geocodeByPlaceId,
    getLatLng
} from "react-places-autocomplete";

class PostDonation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lng: null
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    componentDidMount() {
        this.props.handleInputChange("foodtitle", "");
        this.props.handleInputChange("food", "");
        this.props.handleInputChange("foodvalue", "");
        this.props.handleInputChange("address", "");
        this.props.handleInputChange("city", "");
        this.props.handleInputChange("pick_up_date", "");
        this.props.handleInputChange("pick_up_time", "");
        this.props.handleInputChange("cooked", "");
        this.props.handleInputChange("designated_charities", "");
        this.props.handleInputChange("special_instructions", "");
    }
    handleSelect(latLng) {
        this.setState({
            lat: latLng.lat,
            lng: latLng.lng
        });
    }

    render() {
        return (
            <div>
                <h1>Make a donation:</h1>
                <input
                    type="text"
                    value={this.props.foodtitle}
                    onChange={evt => this.props.handleInputChange("foodtitle", evt.target.value)}
                    className="input"
                    placeholder="Title"
                />
                <br />
                <input
                    type="file"
                    value={this.props.picture}
                    onChange={evt => this.props.handleInputChange("picture", evt.target.files[0])}
                    className="input"
                    placeholder="Profile Picture"
                />
                <br />
                <input
                    type="text"
                    value={this.props.food}
                    onChange={evt => this.props.handleInputChange("food", evt.target.value)}
                    className="input"
                    placeholder="What kind of food is it?"
                />
                <br />
                <input
                    type="text"
                    value={this.props.foodvalue}
                    onChange={evt => this.props.handleInputChange("foodvalue", evt.target.value)}
                    className="input"
                    placeholder="Estimated value of the food?"
                />
                <br />{" "}
                <div>
                    {" "}
                    Address:
                    <LocationSearchInput
                        value={this.props.address}
                        onSelect={this.handleSelect}
                        onChange={evt => this.props.handleInputChange("address", evt.target.value)}
                        placeholder="Address"
                    />
                </div>
                <input
                    type="text"
                    value={this.props.address}
                    onChange={evt => this.props.handleInputChange("address", evt.target.value)}
                    className="input"
                    placeholder="Address"
                />
                <br />
                <input
                    type="text"
                    value={this.props.city}
                    onChange={evt => this.props.handleInputChange("city", evt.target.value)}
                    className="input"
                    placeholder="City"
                />
                <br />
                <div> Date:</div>
                <input
                    type="date"
                    value={this.props.pick_up_date}
                    onChange={evt => this.props.handleInputChange("pick_up_date", evt.target.value)}
                    className="input"
                    placeholder="Pick up date "
                />
                <br />
                <div> Time:</div>
                <input
                    type="time"
                    value={this.props.pick_up_time}
                    onChange={evt => this.props.handleInputChange("pick_up_time", evt.target.value)}
                    className="input"
                    placeholder="Pick up time"
                />
                <br />
                <input
                    type="text"
                    value={this.props.cooked}
                    onChange={evt => this.props.handleInputChange("cooked", evt.target.value)}
                    className="input"
                    placeholder="Is it cooked food?"
                />
                <br />
                <input
                    type="text"
                    value={this.props.special_instructions}
                    onChange={evt =>
                        this.props.handleInputChange("special_instructions", evt.target.value)
                    }
                    className="input"
                    placeholder="Any special instructions?"
                />
                <br />
                <input
                    type="text"
                    value={this.props.designated_charities}
                    onChange={evt =>
                        this.props.handleInputChange("designated_charities", evt.target.value)
                    }
                    className="input"
                    placeholder="Any preference in charities?"
                />
                <br />
                <button className="button" onClick={() => this.props.postdonation()}>
                    Post
                </button>
            </div>
        );
    }
}

export default PostDonation;

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: "" };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.props.onSelect(latLng))
            .catch(error => console.error("Error", error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: "Search Places ...",
                                className: "location-search-input"
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? "suggestion-item--active"
                                    : "suggestion-item";
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}