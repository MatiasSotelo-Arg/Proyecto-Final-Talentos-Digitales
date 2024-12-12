import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="success"
      className="rounded"
      onClick={() => loginWithRedirect()}
    >
      Iniciar Sesión
    </Button>
  );
};

export default LoginButton;
