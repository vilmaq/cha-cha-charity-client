import "./charitycard.css";

const CharityCard = props => {
  return (
    <div className="charity-card-container">
      <div className="card">
        <div>
          <h3 className="heading">Red cross Charity</h3>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="charity"
              width="600"
              height="400"
            />
          </figure>
        </div>
        <div className="charity-info-container">
          <button type="button">More info</button>
        </div>
      </div>

      <div>
        <h3 className="heading">Red cross Charity</h3>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="charity"
            width="600"
            height="400"
          />
        </figure>
      </div>
      <div className="charity-info-container">
        <button type="button">More info</button>
      </div>

      <div>
        <h3 className="heading">Red cross Charity</h3>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="charity"
            width="600"
            height="400"
          />
        </figure>
      </div>
      <div className="charity-info-container">
        <button type="button">More info</button>
      </div>
    </div>
  );
};
export default CharityCard;
