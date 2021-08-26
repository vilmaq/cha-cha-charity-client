import { useQuery } from "@apollo/client";
import MainContainer from "../components/MainContainer";
import { useUserContext } from "../contexts/UserProvider";
import LoaderSpinner from "../components/Loader/LoaderSpinner.js";
import { EVENTS } from "../graphql/queries";
import EventCard from "../components/EventCard";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { MOBILE_BREAKPOINT } from "../mediaQueries";
import "./home.css";

const Events = () => {
  const { state } = useUserContext();
  const { category } = useParams();
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  const { data, loading, error } = useQuery(EVENTS, {
    variables: {
      eventsCategory: category || "all",
    },
  });

  if (loading) {
    return <LoaderSpinner />;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    console.log(data.events);

    return (
      <div className="background">
        <MainContainer maxWidth={isMobile ? "sm" : "md"}>
          {data.events &&
            data.events.map((event) => (
              <EventCard
                id={event.id}
                key={event.id}
                name={event.name}
                description={event.description}
                day={event.day}
                street={event.street}
                postcode={event.postcode}
                city={event.city}
                country={event.country}
                organizer={event.organizer}
                creator={event.creator}
                imageUrl={event.imageUrl}
                // isMyEvent={state.user && event.user.id === state.user.id}
                // participants: []
              />
            ))}
        </MainContainer>
      </div>
    );
  }
};

export default Events;
