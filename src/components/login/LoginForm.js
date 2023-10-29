import { useState } from "react";
const LoginForm = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const handleChange = (ev) => {
    const { name, value } = ev && ev.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };
 
  function handleSubmit(e) {
    e.preventDefault();
    console.log(login);
    setLogin({ email: "", password: "" });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={login.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={login.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
