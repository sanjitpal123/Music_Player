// Login.js
const authEndpoint = "https://accounts.spotify.com/authorize?";
const ClientId = 'b5b88aff1d744892a98dabf4ca081766';
const redirectUrl = 'http://localhost:5173/';
const scope = ["user-library-read", "playlist-read-private"].join("%20"); // Join scopes

// Construct the login URL
const loginEndpoint = `${authEndpoint}client_id=${ClientId}&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=${scope}&response_type=token&show_dialog=true`;

function Login() {
    return (
        <div>
            <h1>Login to Spotify</h1>
            <a href={loginEndpoint}>
                <button>Login with Spotify</button>
            </a>
        </div>
    );
}

export default Login;
