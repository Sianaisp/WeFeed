import React, { Component } from "react";

class Presentation extends Component {
    render() {
        return (
            <div className="moveit">
                <div className="presentation2">
                    <div className="presentation">
                        <b>
                            <h2> What is WeFeed?</h2>
                        </b>
                        <p className="changesize">
                            {" "}
                            &ensp;&ensp;&ensp; Over 1/3 of the food produced worldwide goes to waste
                            while over 1 billion people go to bed hungry every night. While enough food
                            is produced, the problem lies in its overall distribution.
                            <br />
                            WeFeed is a platform that aims to connect restaurants, cafetarias, hotels and
                            even farms to charities so their leftover food does not go to waste.
                            Charities can take a look at our donation map to see available food in their
                            city and come and pick it up. We also connect volunteers to charities in
                            order to facilitate the deliveries.
                        </p>
                    </div>
                </div>
                <div className="circles">
                    <div className="couple">
                        <a href="/auth/sign-up">
                            <img src="/images/food4.jpg" alt="Food" height="250px" />
                        </a>

                        <h2 className="names"> Donate</h2>
                        <p className="third">
                            Are you a restaurant, cafetaria or hotel with some leftover food to donate?
                            Register your donation here and we will organise a pick up at a set date and
                            time.
                        </p>
                    </div>
                    <div className="couple">
                        <a href="/auth/sign-up">
                            <img src="/images/world.jpg" alt="Food" height="250px" />
                        </a>
                        <h2 className="names"> Charity</h2>
                        <p className="third">
                            {" "}
                            Do you represent a charity that brings food to the homeless or other people
                            in need? Sign up and access our map of donations and organise a pick up.
                        </p>
                    </div>
                    <div className="couple">
                        <a href="/auth/sign-up">
                            <img src="/images/vol1.jpg" alt="Food" height="250px" />
                        </a>
                        <h2 className="names"> Volunteer</h2>
                        <p className="third">
                            Would you like to take part and help charities pick up the donated food and
                            deliver it back to them? Sign up to add your details to our database.
                        </p>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

export default Presentation;
