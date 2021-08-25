import { useMediaQuery } from "react-responsive";
import Container from "@material-ui/core/Container";

import LoginForm from "../components/LoginForm";
import { MOBILE_BREAKPOINT } from "../mediaQueries";

const Login = () => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  return (
    <Container maxWidth={isMobile ? "sm" : "md"}>
      <LoginForm />
    </Container>
  );
};

export default Login;
