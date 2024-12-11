import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";

const AuthHandler = () => {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    console.log("entro al effect");

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

  return null;
};

export default AuthHandler;
