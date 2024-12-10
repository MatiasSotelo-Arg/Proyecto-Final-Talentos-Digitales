// import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";

const AuthHandler = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const syncUserWithBackend = async () => {
      if (isAuthenticated && user) {
        try {
          // Envía los datos del usuario al backend
          const response = await axios.post(
            import.meta.env.VITE_API_URL + "api/users",
            {
              name: user.name,
              email: user.email,
            },
            {
              headers: {
                Authorization: `Bearer ${user.sub}`, // Envía el ID de usuario como verificación opcional
              },
            }
          );

          console.log("User synced:", response.data);
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      }
    };

    syncUserWithBackend();
  }, [isAuthenticated, user]);

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <button onClick={handleLogin} disabled={isLoading}>
      {isLoading ? "Loading..." : "Log In2"}
    </button>
  );
};

export default AuthHandler;
