import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div className="text-white" style={{ alignItems: "center" }}>
        <img
          src={user.picture}
          alt={user.name}
          style={{ height: "40px", width: "40px", borderRadius: "50%" }}
        />
      </div>
    )
  );
};

export default Profile;
