import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain = 'dev-l7a9nx5m.us.auth0.com'
      clientId="rcxwVLkKEmoCpZ39LflCq8aVPqD3Ct19"
      redirectUri={window.location.origin}>
      <App/>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
