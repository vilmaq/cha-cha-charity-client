import { useMediaQuery } from "react-responsive";
import Container from "@material-ui/core/Container";

import SignUpForm from "../components/SignUpForm";
import { MOBILE_BREAKPOINT } from "../mediaQueries";

const SignUp = () => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  return (
    <div>
      <Container
        maxWidth={isMobile ? "sm" : "md"}
        style={{ paddingTop: "16px" }}
      >
        <SignUpForm />
      </Container>
    </div>
  );
};

export default SignUp;
