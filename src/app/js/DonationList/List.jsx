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
                                <b>What type of food is it?</b>
                                <br />
                                {donation.food}
                                <br />
                                <b>Estimated value of the food:</b>
                                <br />
                                {donation.foodvalue}
                                <br />
                                <b>Venue name:</b>
                                <br />
                                {donation.venuename}
                                <br />
                                <b>Address:</b>
                                <br />
                                {donation.address}
                                <br />
                                <b>Is the food already prepared?</b>
                                <br />
                                {donation.cooked}
                                <br />
                                <b>When is the pick up?</b>
                                <br />
                                {donation.pick_up_date}
                                <br />
                                <b>Charity preferences:</b>
                                <br />
                                {donation.designated_charities}
                                <br />
                                <b>Special Instructions:</b>
                                <br />
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
