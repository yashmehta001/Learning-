import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./App.css";
import axios from "axios";

function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    <>
      <GoogleOAuthProvider clientId={googleClientId}>
        <div>
          Hello
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              console.log(credentialResponse)
              const response = await axios.post("http://localhost:3000/auth/google/login", {
                token: credentialResponse.credential,
              });
              const data = response.data;
              console.log(data);
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
