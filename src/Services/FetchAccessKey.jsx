// fetchAccessToken.js
const fetchAccessToken = async () => {
    const clientId = 'b5b88aff1d744892a98dabf4ca081766'; // Your Client ID
    const clientSecret = 'a87686e60c724817aca76a13139d2ec6'; // Your Client Secret

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${btoa(`${clientId}:${clientSecret}`)}` // Base64 encode Client ID and Client Secret
        },
        body: new URLSearchParams({
            "grant_type": "client_credentials" // Use client credentials grant type
        })
    });

    if (!response.ok) {
        throw new Error(`Error fetching access token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token; // Return the access token
};

export default fetchAccessToken;
