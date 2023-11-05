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
    <button className="text-3xl font-bold text-orange bg-white p-4 rounded-lg border-4 m-4 border-orange-500" onClick={handleLogin}>
      Log In
    </button>
  );
};
