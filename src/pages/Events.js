import { useQuery } from "@apollo/client";
import MainContainer from "../components/MainContainer";
import { useUserContext } from "../contexts/UserProvider";
import LoaderSpinner from "../components/Loader/LoaderSpinner.js";
import { EVENTS } from "../graphql/queries";
import EventCard from "../components/EventCard";
import { useState } from "react";

const Events = () => {
  const { data, loading, error } = useQuery(EVENTS);
  const { state } = useUserContext();
  const [search, setSearch] = useState("");

  if (loading) {
    return <LoaderSpinner />;
  }

  if (error) {
    return <div>Error</div>;
  }
  console.log(data);
  if (data) {
    const handleSearch = (e) => {
      setSearch(e.target.value);
    };
    const dynamicSearch = () => {
      return data.events.filter((event) =>
        event.type.toLowerCase().includes(search.toLowerCase())
      );
    };
    return (
      <MainContainer>
        {/* <div>
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e)}
            placeholder="Search by Event Type"
          ></input>
        </div> */}
        <br></br>
        {dynamicSearch().map((event) => {
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
              isMyEvent={state.user && event.user.id === state.user.id}
              // participants: []
            />
          );
        })}
      </MainContainer>
    );
  }
};

export default Events;
