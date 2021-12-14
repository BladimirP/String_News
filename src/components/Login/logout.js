import React from "react";
import "./logout.css"
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="boton" onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar Sesión
    </button>
  );
};