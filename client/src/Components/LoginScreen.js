import { React } from "react";
import { Link } from "react-router-dom";

function LoginScreen() {
  return (
    <div>
      <h1>Welcome to Match U</h1>
      <h2>Login</h2>
      <form>
        <label>Username: </label>
        <input type = "text" name = "username" />
        <br />

        <label>Password: </label>
        <input type = "password" name = "password" />
        <br />
        
        <button>Submit</button>
      </form>
      <br />
      
      Click <Link to="/CreateLogin">here</Link> to create an account.
    </div>
   )
  }

export default LoginScreen
