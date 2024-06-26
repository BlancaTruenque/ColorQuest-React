import * as React from "react";
import s from "./Unauthenticated.module.css";
import { useAuth } from "../../contexts/authContext";

function Unauthenticated() {
  const { login, signup } = useAuth();

  const [status, setStatus] = React.useState("idle");
  const [activeTab, setActiveTab] = React.useState("login");
  const [signUpErrors, setSignUpErrors] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const addEmail = (e) => {
    setEmail(e.target.value);
  };

  const addPassword = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");

    if (activeTab === "login") {
      login(email, password)
        .then(() => setStatus("success"))
        .catch(() => setStatus("error"));
    } else {
      signup(email, password)
        .then(() => setStatus("success"))
        .catch((error) => {
          setStatus("error");
          setSignUpErrors(error.message);
        });
    }
  }

  function handleTabChange(tab) {
    setActiveTab(tab);
    setStatus("idle");
  }

  const isLoading = status === "loading";
  const buttonText = activeTab === "login" ? "Enter" : "Create";
  const hasError = status === "error";

  return (
    <div className={s.wrapper}>
      <div className={s.tabs}>
        <button
          onClick={() => handleTabChange("login")}
          className={activeTab === "login" ? s.active : ""}
        >
          Login
        </button>
        <button
          onClick={() => handleTabChange("signup")}
          className={activeTab === "signup" ? s.active : ""}
        >
          Signup
        </button>
      </div>
      <form onSubmit={handleSubmit} className={s.form}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={addEmail}
            id="email"
            type="email"
            name="email"
            placeholder="user@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={addPassword}
            type="password"
            id="password"
            name="password"
            required
            minLength={6}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : buttonText}
        </button>
      </form>
      {hasError && (
        <p className={s["error-message"]}>
          {signUpErrors || "Invalid Credentials"}
        </p>
      )}
    </div>
  );
}

export default Unauthenticated;
