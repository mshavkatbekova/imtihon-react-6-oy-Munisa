import { useLogin } from "../hooks/useLogin";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const { error, login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault;
    login(email, password);
   
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-xl py-10 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl">Login</h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email:</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password:</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary my-10">Login</button>
        <Link className="btn btn-secondary" to="/signup">Signup</Link>
        {error && <p>{error}</p>}
        {/* google */}
      </div>
    </form>
  );
}

export default Login;
