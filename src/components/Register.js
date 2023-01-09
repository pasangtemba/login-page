
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [entry, setEntry] = useState(
    JSON.parse(localStorage.getItem("registerEntry")) || []
  );

  //   const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("registerEntry", JSON.stringify(entry));
  }, [entry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all the fields");
      return;
    }
    if (entry.some((e) => e.email === email)) {
      alert("Email already exists");
      return;
    }

    const data = {
      name: name,
      email: email,
      password: password,
    };
    setEntry([...entry, data]);

    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label> Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="firstName"
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id={email}
            value={email}
            type="email"
            name="email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="pass"
            required
          />
        </div>

        <div>
          <input type="submit" value="Register" />
        </div>
        <div>
          <a href="/">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;