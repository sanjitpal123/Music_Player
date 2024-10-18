const authEndpoint = "https://accounts.spotify.com/authorize";
const ClientId='b5b88aff1d744892a98dabf4ca081766'
const ClientSecret='a87686e60c724817aca76a13139d2ec6';
const scope=["user-library-read", "playlist-read-private"];
const redirectUrl='http://localhost:5173/';
export const loginEnpoint=`${authEndpoint}client_id=${ClientId}$redirect_url=${redirect_url}$scope=${scope.json("%20")}$response_type=token$show_dialog=true`;
