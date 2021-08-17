import MainContainer from "../components/MainContainer";
import SignUpForm from "../components/SignUpForm";
const SignUp = () => {
  return (
    <MainContainer>
      <div>
        <h2 className="my-4 text-center">SignUp</h2>
        <hr />
      </div>
      <SignUpForm />
    </MainContainer>
  );
};

export default SignUp;
