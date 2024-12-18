import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: import.meta.env.VITE_API_IDENTIFIER, // Tu API Identifier
          scope: "openid profile email",
        }}
        useRefreshTokens={true}
        cacheLocation="localstorage"
        onError={(err) => console.log(err)}
      >
        <App />
      </Auth0Provider>
    </PersistGate>
  </Provider>
);
