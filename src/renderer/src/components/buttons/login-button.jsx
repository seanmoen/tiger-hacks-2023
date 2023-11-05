import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <button className="text-3xl font-bold text-orange bg-white p-4 rounded-lg m-4 " onClick={handleLogin}>
      Log In
    </button>
  );
};
