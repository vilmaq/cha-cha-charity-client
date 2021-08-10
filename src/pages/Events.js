import { useQuery } from "@apollo/client";
import MainContainer from "../components/MainContainer";
import { useUserContext } from "../contexts/UserProvider";
import LoaderSpinner from "../components/Loader/LoaderSpinner.js";
import { EVENTS } from "../graphql/queries";
import EventCard from "../components/EventCard";

const Events = () => {
  const { data, loading, error } = useQuery(EVENTS);
  const { state } = useUserContext();

  if (loading) {
    return <LoaderSpinner />;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    return (
      <MainContainer>
        {data.events.map((event) => {
          return (
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
              isMyEvent={state.user && user..id === state.user.id}
              // participants: []
            />
          );
        })}
      </MainContainer>
    );
  }
};

export default Events;
