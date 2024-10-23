// fetchNewRelease.js
import fetchAccessToken from "./FetchAccessKey"; // Adjust the path as necessary
 
const fetchNewRelease = async () => {
    const accessToken = await fetchAccessToken(); // Get the access token
  
    const response = await fetch("https://api.spotify.com/v1/browse/new-releases", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`, // Use the access token
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Error fetching new releases: ${response.statusText}`);
    }

    const data = await response.json();
    return data.albums.items; // Return the album items
};

export default fetchNewRelease;
