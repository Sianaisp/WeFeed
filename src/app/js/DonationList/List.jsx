import React, { Component } from "react";

class List extends Component {
    render() {
        return (
            <div className="list-style">
                <div className="listtitle">Donation List </div>
                {this.props.donations.length ? (
                    this.props.donations.map(donation => (
                        <div className="list-group" key={donation._id}>
                            <div className="listfood">
                                <h2 className="donationtitle">{donation.donationtitle}</h2>
                                <b>What type of food is it? </b>
                                {donation.food}
                                <br />
                                <b>Estimated value of the food:</b>
                                {donation.foodvalue}
                                <br />
                                <b>Venue name:</b>
                                {donation.venuename}
                                <br />
                                <b>Address:</b>
                                {donation.address}
                                <br />
                                <b>Is the food already prepared?</b>
                                {donation.cooked}
                                <br />
                                <b>When is the pick up?</b>
                                {donation.pick_up_date}
                                <br />
                                <b>Charity preferences:</b>
                                {donation.designated_charities}
                                <br />
                                <b>Special Instructions:</b>
                                {donation.special_instructions}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-donations"> NO DONATIONS REGISTERED</div>
                )}
            </div>
        );
    }
}

export default List;
