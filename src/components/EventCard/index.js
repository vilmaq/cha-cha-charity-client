import "./eventCard.css";

const EventCard = props => {
  return (
    <article className="event-card-container">
      <div className="img-container">
        <figure>
          <img
            className="img"
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Event"
          />
        </figure>
      </div>
      <div className="info-container">
        <section className="name">
          <h3>Event Name</h3>
        </section>

        <section className="description">
          Event description - this is an event, bla bla bla! Join the event!
          Event description - this is an event, bla bla bla! Join the event!
          Event description - this is an event, bla bla bla! Join the event!
        </section>
        <section className="when-where">
          <text>03/09/2021</text>
          <text>Birmingham</text>
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
