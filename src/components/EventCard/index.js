import calendar from "./pablo-68.png";
import location from "./pablo-51.png";

import "./eventcard.css";

const EventCard = ({
  name,
  description,
  day,
  street,
  postcode,
  city,
  country,
  organizer,
  imageUrl,
}) => {
  return (
    <article className="event-card-container">
      <div className="img-container">
        <figure>
          <img
            className="img"
            src="https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80eUrl"
            alt="Event"
          />
        </figure>
      </div>
      <div className="info-container">
        <section className="name">
          <h4>{name}</h4>
        </section>

        <section className="description">{description}</section>
        <section className="when-where">
          <div className="details">
            <img src={calendar} alt="calendar" height="24px" />
            <text>{day}</text>
          </div>

          <div className="details">
            <img src={location} alt="location" height="24px" />
            <text>{city}</text>
          </div>
        </section>

        <section>
          <div className="buttonContainer">
            <a href="/signup">
              <button type="button" className="buttons">
                Sign Up
              </button>
            </a>
<<<<<<< HEAD
            <a href="/event">
=======
            <a href="/singleevent">
>>>>>>> 66d298ad69a0b0c59a8d819ced3e9384726d4de6
              <button type="button" className="buttons">
                See more
              </button>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
};
export default EventCard;
