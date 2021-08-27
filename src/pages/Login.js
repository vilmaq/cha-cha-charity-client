import { useMediaQuery } from "react-responsive";
import Container from "@material-ui/core/Container";

import LoginForm from "../components/LoginForm";
import { MOBILE_BREAKPOINT } from "../mediaQueries";

const Login = () => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  return (
    <div>
      <Container
        maxWidth={isMobile ? "sm" : "md"}
        style={{ paddingTop: "16px", paddingBottom: "16px" }}
      >
        <LoginForm />
      </Container>
    </div>
  );
};

export default Login;
