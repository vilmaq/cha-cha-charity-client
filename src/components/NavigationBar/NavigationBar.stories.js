import React from "react";
import NavigationBar from ".";
// import UserProvider from "../../context/UserContext";
export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
};
export const LoggedInNavBar = () => (
  // <UserProvider
  //   currentUser={{
  //     id: "123",
  //     email: "bobsmith@email.com",
  //     token: "9876543210",
  //   }}
  //   onLogin={() => console.log("login")}
  //   onLogout={() => console.log("logout")}
  // >
  <NavigationBar />
  // </UserProvider>
);
// export const LoggedOutNavBar = () => (
//   // <UserProvider
//   //   onLogin={() => console.log("login")}
//   //   onLogout={() => console.log("logout")}
//   // >
//   <NavigationBar />
// </UserProvider>
// );
