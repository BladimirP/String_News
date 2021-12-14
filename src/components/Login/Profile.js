import React from "react";
import {LoginButton} from "./LoginButton"
import { LogoutButton } from "./logout";
import "./Profile.css";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated){
    return (
        <div className="duo">
          <div className="contenedor">
            <img src={user.picture} alt={user.name} />
            <div>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
            </div>
          </div>
          <LogoutButton/>
        </div>
      )
    }else{
      return (
        <div className="duo">
          <h2 > Para registrar su etiquetado por favor inicie sesión</h2>
          <LoginButton/>
        </div>
      )
    }
};