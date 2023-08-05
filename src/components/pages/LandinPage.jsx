import loginImg from "../../static/img/home-img.png"
import logoImg from "../../static/img/VT-logo.png"
import { loginUser } from "../../services/loginUser"
import FormInputButton from "../FormInputButton"
import { useForm } from 'react-hook-form'


export default function LoginPage(){
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) =>{
    loginUser(data)
  }

  return (
    <section className="landing-container">
        <section className="home-image">
          <img src={loginImg} alt="login-ilustration-img" />
        </section>
        <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="logo-container">
            <img src={logoImg} alt="voice-team-logo" />
          </div>
          <h1 className="login-title">Hello Again <span>!</span></h1>
          <input type="text" className="text-input"  {...register("username")} placeholder='Username' required />
          <input type="password" className="text-input" {...register("password")} placeholder= 'Password' required />
          <FormInputButton>Log In</FormInputButton>

        </form>
    </section>
  )
}