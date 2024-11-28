import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      // domain={import.meta.env.VITE_AUTH0_DOMAIN}
      // clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      domain="dev-t6j2gokb277l3ean.us.auth0.com"
      clientId="vlzkEPoeZdMbuCydFueVRmakS00pllWQ"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
  /******  35fad8a1-03d5-4fb8-9306-ca2bc3f806be  *******/
);
