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
                                <b className="green">What type of food is it?&ensp;</b>

                                {donation.food}
                                <br />
                                <b className="green">Estimated value of the food:&ensp;</b>

                                {donation.foodvalue}
                                <br />
                                <b className="green">Venue name:&ensp;</b>

                                {donation.venuename}
                                <br />
                                <b className="green">Address:&ensp;</b>

                                {donation.address}
                                <br />
                                <b className="green">Is the food already prepared?&ensp;</b>

                                {donation.cooked}
                                <br />
                                <b className="green">When is the pick up?&ensp;</b>

                                {donation.pick_up_date}
                                <br />
                                <b className="green">Charity preferences:&ensp;</b>

                                {donation.designated_charities}
                                <br />
                                <b className="green">Special Instructions:&ensp;</b>

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
