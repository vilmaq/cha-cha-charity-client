import calendar from "../assets/images/illustrations/elements/pablo-68.png";
import location from "../assets/images/illustrations/elements/pablo-51.png";

import "./singleevent.css";

const SingleEvent = () => {
  return (
    <div className="event-container">
      <section className="header-container">
        <header className="header-img"></header>
        <h1 className="header-title">
          DEREK ZOOLANDER'S CENTER FOR KIDS WHO CAN'T READ GOOD
        </h1>
        <section className="header-info">
          <div className="top-column">
            <div className="info">
              <img src={calendar} alt="calendar" height="36px" />
              <h5>12 September 2021</h5>
            </div>
            <div className="info">
              <img src={location} alt="location" height="36px" />
              <h5>Birmingham</h5>
            </div>
          </div>
          {/* <div className="bottom-column">
            <a href="/addevent">
              <button type="button" className="buttons">
                Sign Up
              </button>
            </a>
          </div> */}
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
            <a href="/addevent">
              <button type="button" className="buttons">
                Sign Up For
              </button>
            </a>
            <br />
            <text>by (organizer) </text>
            <br />
            <text>specific location</text>
            <br />
            <text>specific time</text>
          </div>
        </article>
      </section>
    </div>
  );
};

export default SingleEvent;
