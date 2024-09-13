"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const base_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/auth";

const Login: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${base_url}/login`, { username, password });
      if (response.status === 200) {
        // Store user session (e.g., token or user info)
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirect to home or profile page
        router.push("/");
      } else {
        setError(response.data.message || "Failed to login");
      }
    } catch (err: any) {
      console.error(err);
      setError("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
