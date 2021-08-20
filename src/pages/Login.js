import MainContainer from "../components/MainContainer";
import LoginForm from "../../src/components/LoginForm";

const LoginPage = () => {
  return (
    <MainContainer>
      <div>
        <h2 className="my-4 text-center">Login</h2>
        <hr />
      </div>

      <LoginForm />
    </MainContainer>
  );
};

export default LoginPage;
