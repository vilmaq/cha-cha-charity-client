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
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e)}
            placeholder="Search by Event Type"
          ></input>
        </div>
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

// /* import React, { useState } from "react";
// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Toolbar,
//   AppBar,
//   TextField,
//   CardHeader,
//   Avatar,
// } from "@material-ui/core";
// import { fade, makeStyles } from "@material-ui/core/styles";

// import SearchIcon from "@material-ui/icons/Search";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },

//   // Container: {
//   //   paddingTop: "20px",
//   //   paddingLeft: "50px",
//   //   paddingRight: "50px",
//   // },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   searchContainer: {
//     display: "flex",
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     paddingLeft: "20px",
//     paddingRight: "20px",
//     marginTop: "5px",
//     marginBottom: "5px",
//   },
//   searchIcon: {
//     alignSelf: "flex-end",
//     marginBottom: "5px",
//   },
//   searchInput: {
//     width: "200px",
//     margin: "5px",
//   },

//   avatar: {
//     backgroundColor: [500],
//   },
// }));

// const Events = (props) => {
//   const classes = useStyles();
//   const { history } = props;
//   const [eventData, setEventData] = useState({});
//   const [filter, setFilter] = useState("");

//   const handleSearchChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const getEventCard = (eventId) => {
//     //const { id, name} = eventData[eventId];
//     return (
//       // <Grid item xs={4} key={eventId}>
//       //   <Card onClick={() => history.push(`/${id}`)}>
//   //         <CardHeader
//   //           avatar={
//   //             <Avatar aria-label="event" className={classes.avatar}>
//   //               CCC
//   //             </Avatar>
//   //           }
//   //           // action={
//   //           //   <IconButton aria-label="settings">
//   //           //     <MoreVertIcon />
//   //           //   </IconButton>
//   //           // }
//   //           title="EventName"
//   //           subheader="September 14, 2016"
//   //         />
//   //         <CardMedia
//   //           className={classes.media}
//   //           image="/assets/images/"
//   //           title="Event Name"
//   //         />
//   //         <CardContent>
//   //           <Typography variant="body2" color="textSecondary" component="p">
//   //             This impressive paella is a perfect party dish and a fun meal to
//   //             cook together with your guests. Add 1 cup of frozen peas along
//   //             with the mussels, if you like.
//   //           </Typography>
//   //         </CardContent>
//   //         </CardHeader>
//   //       //</Card>
//   //     //</Grid>
//   //   );
//   // };

// //   return (
// //     <>
// //       <AppBar position="static">
// //         <Toolbar>
// //           <div className={classes.searchContainer}>
// //             <SearchIcon className={classes.searchIcon} />
// //             <TextField
// //               className={classes.searchInput}
// //               onChange={handleSearchChange}
// //               label="Event"
// //               variant="standard"
// //             />
// //           </div>
// //         </Toolbar>
// //       </AppBar>
// //       {/* {eventData ? (
// //         <Grid container spacing={2} className={classes.Container}>
// //           {Object.keys(eventData).map(
// //             (eventId) =>
// //               eventData[eventId].name.includes(filter) && getEventCard(eventId)
// //           )}
// //         </Grid>
// //       ) : (
// //         <CircularProgress />
// //       )} */}
// //     </>
// //   );
// // } */
// rendering the query

// import {useQuery} from "@apollo/client"

// query {
//   getPost($id: ID!) {

//       id
//       type
//       name
//       description
//       day
//       street
//       postcode
//       city
//       country
//       organizer
//       creator {
//         id
//         type
//         name
//         fullName
//         password
//         email
//       }
//       imageUrl
//       participants {
//         id
//         type
//         name
//         fullName
//         password
//         email
//       }
//     }
//   }

// // export default Events;
