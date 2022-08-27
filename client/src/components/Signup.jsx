import StyledSignup, { SignupButton } from "./styled/Signup.styled";

const Signup = () => {
  const Signin = e => {
    e.preventDefault();
    const str = `${process.env.REACT_APP_SERVER_URL}/auth/google`;
    window.open(str, "_self");
  };
  return (
    <StyledSignup>
      <form onSubmit={Signin}>
        <div>
          <h1>MyBlog</h1>
          
        </div>
        <SignupButton>
          <p>Sign in with Google </p> <i className="fa-brands fa-google" />
        </SignupButton>
      </form>
    </StyledSignup>
  );
};

export default Signup;
