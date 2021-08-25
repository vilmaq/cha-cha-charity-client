import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Routes from "./Routes";
import Navigation from "./components/NavigationBar";
import Footer from "./components/Footer/Footer";
import UserProvider from "./contexts/UserProvider";
import { ApolloLink } from "apollo-link";
import { createUploadLink } from "apollo-upload-client";

import "./App.css";

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL || "http://localhost:4000/graphql",
});

const uploadLink = createUploadLink({
  uri: process.env.GRAPHQL_URL || "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    headers: {
      ...headers,
      authorization: user ? `Bearer ${user.token}` : "",
    },
  };
});
// link the apollo links together
const client = new ApolloClient({
  link: ApolloLink.from([httpLink, authLink, uploadLink]),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
          <Navigation />
          <Routes />
          <Footer />
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
};

export default App;
