import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBreastfeeding } from "@fortawesome/free-solid-svg-icons";

const WelcomeScreen = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const handleRegistry = (): void => {
    setIsRegistered((prev) => !prev);
  };
  return (
    <section className="welcome-screen section">
      <h1 className="title">
        Welcome to Biba's Ecom{" "}
        <span>
          <FontAwesomeIcon icon={faPersonBreastfeeding} className="logo-icon" />
        </span>
      </h1>
      {!isRegistered ? (
        <article>
          <Login />
          <p>Not Registered? click below to Sign Up</p>
        </article>
      ) : (
        <article>
          <Register />
          <p>Registered? click below to Login</p>
        </article>
      )}
      <button onClick={handleRegistry} className="l-r-btn">
        {isRegistered ? "Login" : "Register"}
      </button>
    </section>
  );
};

export default WelcomeScreen;
