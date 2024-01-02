export const host = "http://localhost:9010";
// export const host = "http://10.1.177.121:9010";
export const token = ""
export const redirectUri = "http://localhost:3000/oauth2/redirect";
export const GOOGLE_AUTH_URL =
  host + "/oauth2/authorize/google?redirect_uri=" + redirectUri;

export const configHeader = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    'Content-type': 'application/json; charset=UTF-8',

  },
};
