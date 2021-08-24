import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { EVENT } from "../graphql/queries";
//import LoaderSpinner from "../components/Loader/LoaderSpinner";

import LocationOnRoundedIcon from "@material-ui/icons/LocationOn";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";

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

  console.log(data.event.participants);
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
      </section>
      <section className="header-info">
        <div className="column">
          <div className="info">
            <LocationOnRoundedIcon
              fontSize="large"
              style={{ color: "#f36b7f" }}
            />
            <h4 className="info-text">{data.event.day}</h4>
          </div>
          <div className="info">
            <AccessTimeRoundedIcon
              fontSize="large"
              style={{ color: "#9fbfff" }}
            />
            <h4 className="info-text">{data.event.day}</h4>
          </div>
          <div className="info">
            <EventRoundedIcon fontSize="large" style={{ color: "#f36b7f" }} />
            <h4 className="info-text">{data.event.city}</h4>
          </div>
          <div className="info">
            <PeopleRoundedIcon fontSize="large" style={{ color: "#82b5a5" }} />
            <h4 className="info-text">35 Participants</h4>
          </div>
        </div>
      </section>
      <section className="event-info">
        <article className="event-description">
          {data.event.description}
        </article>
        <article className="event-sidebar">
          <div className="sidebar-info">
            <h5>Hosted by</h5>
            <h5>{data.event.organizer} </h5>
            <h5>_________</h5>
            <h5>{data.event.city}</h5>
            <h6>{data.event.street}</h6>
            <h6>{data.event.postcode}</h6>
          </div>
        </article>
      </section>
      <section className="attend-container">
        <article className="attend-title">
          <h5>Check some of the people who are attending this event!</h5>
        </article>
        <article className="attendants">
          <div>
            <FaceRoundedIcon fontSize="large" style={{ color: "#82b5a5" }} />
          </div>
          <div>
            <FaceRoundedIcon fontSize="large" style={{ color: "#82b5a5" }} />
          </div>
          <div>
            <FaceRoundedIcon fontSize="large" style={{ color: "#82b5a5" }} />
          </div>
        </article>
      </section>
    </div>
  );
};

export default SingleEvent;
