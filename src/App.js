import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import Routes from "./Routes";
import Navigation from "./components/NavigationBar";
import Footer from "./components/Footer/Footer";
import UserProvider from "./contexts/UserProvider";

import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
    h6: {
      fontWeight: 600,
    },
  },
});
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL || "http://localhost:4000/",
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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ApolloProvider client={client}>
          <UserProvider>
            <Router>
              <Navigation />
              <div className="page">
                <Routes />
              </div>
              <Footer />
            </Router>
          </UserProvider>
        </ApolloProvider>
      </div>
    </ThemeProvider>
  );
};

export default App;
