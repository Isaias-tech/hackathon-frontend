import loginImg from "../static/img/home-img.png"
import logoImg from "../static/img/VT-logo.png"
import FormInputText from "./FormInputText"
import FormInputButton from "./FormInputButton"


export default function LoginPage(){
  return (
    <section className="landing-container">
        <section className="home-image">
          <img src={loginImg} alt="login-ilustration-img" />
        </section>
        <section className="login-container">
          <div className="logo-container">
            <img src={logoImg} alt="voice-team-logo" />
          </div>
          <h1 className="login-title">Hello Again <span>!</span></h1>
          <FormInputText placeHolder='Username' />
          <FormInputText placeHolder='Password' />
          <FormInputButton>Log In</FormInputButton>
        </section>
    </section>
  )
}