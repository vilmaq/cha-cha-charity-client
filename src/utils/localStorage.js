export const getEventDetails = () => {
  const eventName = JSON.stringify.localStorage.getItem("name");
  const eventType = JSON.stringify.localStorage.getItem("type");
  const eventDate = JSON.stringify.localStorage.getItem("date-picker");
  const eventTime = JSON.stringify.localStorage.getItem("date-time");
  const eventDescription = JSON.stringify.localStorage.getItem("description");
  const eventStreet = JSON.stringify.localStorage.getItem("street");
  const eventCity = JSON.stringify.localStorage.getItem("city");
  const eventState = JSON.stringify.localStorage.getItem("state");
  const eventPostcode = JSON.stringify.localStorage.getItem("postcode");
  const eventCountry = JSON.stringify.localStorage.getItem("country");
  const eventOrganizer = JSON.stringify.localStorage.getItem("organizer");

  console.log(
    eventName,
    eventType,
    eventDate,
    eventTime,
    eventDescription,
    eventStreet,
    eventCity,
    eventState,
    eventPostcode,
    eventCountry,
    eventOrganizer
  );

  // return eventName
};
