import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./App.css";

function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    <>
      <GoogleOAuthProvider clientId={googleClientId}>
        <div>
          Hello
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </div>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
