import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const clientId =
    "319213797176-e11bkehi6dge8qmhc6fg2i6a51cljm3k.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;
