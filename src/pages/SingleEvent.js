// import { useQuery } from "@apollo/client";
// import { useUserContext } from "../context/UserProvider";
// import { EVENT } from "../graphql/queries";
// import LoaderSpinner from "../components/Loader/LoaderSpinner";
// import { useState } from "react";

import LocationOnRoundedIcon from "@material-ui/icons/LocationOn";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";

import "./singleevent.css";

const SingleEvent = () => {
  return (
    <div className="event-container">
      <section
        className="header-container"
        // style={{
        //   backgroundImage: `url: (../assets/images/headerholder.png)`,
        // }}
      >
        <header className="header-img">
          <img src={"./headerholder.png"} alt="event"></img>
        </header>
        <div className="header-title">
          <h1>Event Name{}</h1>
          <a href="/signupfor" className="btn-tag">
            {/* this button will save the event for the user to my events */}
            <button type="button" className="buttons">
              Sign Up
            </button>
          </a>
        </div>

        <section className="header-info">
          <div className="column">
            <div className="info">
              <LocationOnRoundedIcon style={{ color: "#f36b7f" }} />
              <h5>12 September 2021</h5>
            </div>
            <div className="info">
              <EventRoundedIcon style={{ color: "#9fbfff" }} />
              <h5>BIRMINGHAM</h5>
            </div>
            <div className="info">
              <PeopleRoundedIcon style={{ color: "#82b5a5" }} />
              <h5>35 Participants</h5>
            </div>
          </div>
        </section>
      </section>
      <section className="event-info">
        <article className="event-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum nunc
          aliquet bibendum enim facilisis gravida neque convallis a. Lectus
          vestibulum mattis ullamcorper velit sed ullamcorper morbi. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum mattis. Turpis
          egestas sed tempus urna et pharetra pharetra massa. Sed cras ornare
          arcu dui vivamus arcu felis bibendum. Massa sapien faucibus et
          molestie ac feugiat sed. Mollis nunc sed id semper risus in. Vulputate
          sapien nec sagittis aliquam malesuada bibendum arcu. Accumsan in nisl
          nisi scelerisque eu. Est ultricies integer quis auctor elit sed
          vulputate mi. Lacinia quis vel eros donec ac odio. Ornare arcu dui
          vivamus arcu felis bibendum ut. Aliquam sem fringilla ut morbi
          tincidunt.
        </article>
        <article className="event-sidebar">
          <div className="sidebar-info">
            <h5>Hosted by (organizer) </h5>
            <h5>specific time</h5>
            <h5>specific location</h5>
          </div>
        </article>
      </section>
    </div>
  );
};

export default SingleEvent;
