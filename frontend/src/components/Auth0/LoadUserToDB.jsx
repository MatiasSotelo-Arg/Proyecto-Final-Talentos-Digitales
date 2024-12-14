import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userCoursesSlice";

const AuthHandler = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

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
          return response.data;
        } catch (error) {
          console.error("Error syncing user:", error);
          return null;
        }
      }
    };
    const fetchUser = async () => {
      const user1 = await syncUserWithBackend();
      console.log("user1", user1);
      if (user1) {
        dispatch(addUser(user1)); // Despacha el usuario al store
      }
    };

    fetchUser();
  }, [isAuthenticated, user, dispatch]);

  return null;
};

export default AuthHandler;
