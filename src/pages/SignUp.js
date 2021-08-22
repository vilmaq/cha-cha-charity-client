import { useMediaQuery } from "react-responsive";
import Container from "@material-ui/core/Container";

import SignUpForm from "../components/SignUpForm";
import { MOBILE_BREAKPOINT } from "../mediaQueries";

const SignUp = () => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  return (
    <Container maxWidth={isMobile ? "sm" : "md"}>
      <SignUpForm />
    </Container>
  );
};

export default SignUp;
