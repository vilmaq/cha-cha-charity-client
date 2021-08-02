import "./eventcard.css";

const EventCard = (props) => {
  return (
    <div className="event-card-container">
      <div>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Event"
            width="600"
            height="400"
          />
        </figure>
      </div>
      <div className="info-container">
        <h3>Event Name</h3>

        <text>
          Event description - this is an event, bla bla bla! Join the event!
          Event description - this is an event, bla bla bla! Join the event!
          Event description - this is an event, bla bla bla! Join the event!
        </text>
        <a href="/signup">
          <button type="button">Sign Up</button>
        </a>
      </div>
    </div>
  );
};
export default EventCard;
