import { useQuery } from "@apollo/client";
import MainContainer from "../components/MainContainer";
import { useUserContext } from "../contexts/UserProvider";
import Loader from "../components/Loader";
import { MY_EVENTS } from "../graphql/queries";
import EventCard from "../components/EventCard";

const MyEvents = () => {
  const { state } = useUserContext();
  const { data, loading, error } = useQuery(MY_EVENTS, {
    variables: {???},
  });


if (loading) {
  return <LoaderSpinner />;
}

if (error) {
  return <div>Error</div>;
}

if (data) {
  return (
    <MainContainer  title={`Events by ${state.user.firstName} ${state.user.lastName}`}>
      {data.events.map((events) => {
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
            // isMyEvent={state.user && user..id === state.user.id}
            // participants: []
          />
        );
      })}
    </MainContainer>
  );
}
};

export default Events;