import { ImgDiv, LoginBloc, LoginCon, LoginInput } from "./Login-styled";

function Login() {
  return (
    <LoginCon>
      <LoginBloc>
        <ImgDiv>
          <img src="assets/blok.png" alt="" />
        </ImgDiv>
        <h3>Login</h3>
        <LoginInput>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="Email"></input>
          <label htmlFor="password">Password</label>
          <input id="password" type="text" placeholder="Password"></input>
          <button id="google">LOGIN</button>
          <button>
            {"WITH"}
            <img src="assets/google.png" alt="" />
            {""}
          </button>
        </LoginInput>
      </LoginBloc>
    </LoginCon>
  );
}
export default Login;
