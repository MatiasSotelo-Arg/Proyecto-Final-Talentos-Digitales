import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userCoursesSlice";
import { persistor } from "../../redux/store";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(addUser(null));
    persistor.purge();
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <Button
      variant="success"
      className="rounded"
      // onClick={() =>
      //   logout({ logoutParams: { returnTo: window.location.origin } })
      // }
      onClick={handleLogout}
    >
      Cerra Sesión
    </Button>
  );
};

export default LogoutButton;
