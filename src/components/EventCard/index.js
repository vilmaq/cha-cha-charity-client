import "./event.css";

const EventCard = ({
  props,
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
          <img className="img" src={imageUrl} alt="Event" />
        </figure>
      </div>
      <div className="info-container">
        <section className="name">
          <h3>{name}</h3>
        </section>

        <section className="description">{description}</section>
        <section className="when-where">
          <p>{day}</p>
          <p>{city}</p>
        </section>
        <section className="buttons">
          <a href="/interest">
            <button type="button">I'm interested</button>
          </a>
          <a href="/signup">
            <button type="button">Sign Up</button>
          </a>
        </section>
      </div>
    </article>
  );
};
export default EventCard;
