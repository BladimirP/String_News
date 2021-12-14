import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="boton" onClick={() => loginWithRedirect()}>INICIAR SESIÓN</button>;
};