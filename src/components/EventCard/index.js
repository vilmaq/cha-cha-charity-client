import "./eventcard.css";

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
          <img
            className="img"
            src="https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80eUrl"
            alt="Event"
          />
        </figure>
      </div>
      <div className="info-container">
        <section className="name">
          <h3>{name}</h3>
        </section>

        <section className="description">{description}</section>
        <section className="when-where">
          <h5>Date:{day}</h5>
          <h5>Location:{city}</h5>
        </section>

        <section>
          <div className="buttonContainer">
            <a href="/interest">
              <button type="button" className="buttons">
                I'm interested
              </button>
            </a>
            <a href="/signup">
              <button type="button" className="buttons">
                Sign Up
              </button>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
};
export default EventCard;
