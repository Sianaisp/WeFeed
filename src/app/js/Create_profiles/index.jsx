import React from "react";

class Create_profile_vol extends React.Component {
    render() {
        return (
            <div className="container">
                <input
                    type="text"
                    value={this.props.username}
                    onChange={evt => this.props.handleInputChange("username", evt.target.value)}
                    className="input"
                    placeholder="Username"
                />

                <br />
                <br />
                <input
                    type="boolean"
                    value={this.props.car}
                    onChange={evt => this.props.handleInputChange("car", evt.target.value)}
                    className="input"
                    placeholder="Car"
                />
                <br />
                <br />
                <input
                    type="availability"
                    value={this.props.availability}
                    onChange={evt => this.props.handleInputChange("availability", evt.target.value)}
                    className="input"
                    placeholder="Availability"
                />
                <br />
                <br />
                <input
                    type="file"
                    value={this.props.picture}
                    onChange={evt => this.props.handleInputChange("picture", evt.target.files[0])}
                    className="input"
                    placeholder="Profile Picture"
                />
            </div>
        );
    }
}

export default Create_profile_vol;
