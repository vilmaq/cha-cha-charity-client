/* eslint-disable no-restricted-globals */

import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { EVENT } from "../graphql/queries";
//import LoaderSpinner from "../components/Loader/LoaderSpinner";

import LocationOnRoundedIcon from "@material-ui/icons/LocationOn";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";

import "./singleevent.css";

const SingleEvent = () => {
  const { eventId } = useParams();
  const { data, loading, error } = useQuery(EVENT, {
    variables: { eventId },
  });

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>error!!</div>;
  }
  console.log(data.event.city);
  return (
    <div className="event-container">
      <section className="header-container">
        <header
          className="header-img"
          style={{
            backgroundImage: `url(${data.event.imageUrl})`,
          }}
        ></header>
        <div className="header-title">
          <h1>{data.event.name}</h1>
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
              <h5>{data.event.day}</h5>
            </div>
            <div className="info">
              <EventRoundedIcon style={{ color: "#9fbfff" }} />
              <h5>{data.event.city}</h5>
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
          {data.event.description}
        </article>
        <article className="event-sidebar">
          <div className="sidebar-info">
            <h5>Hosted by {data.event.organizer} </h5>
            <h5>{data.event.city}</h5>
            <h6>{data.event.street}</h6>
            <h6>{data.event.postcode}</h6>
          </div>
        </article>
      </section>
    </div>
  );
};

export default SingleEvent;
