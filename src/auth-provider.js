// pretend this is firebase, netlify, or auth0's code.
// you shouldn't have to implement something like this in your own app
// import client from "./utils/client";
import { API } from "./hooks/useBaseURL/useBaseURL";
const localStorageKey = "__auth_provider_token__";

async function getToken() {
    // if we were a real auth provider, this is where we would make a request
    // to retrieve the user's token. (It's a bit more complicated than that...
    // but you're probably not an auth provider so you don't need to worry about it).
    return window.localStorage.getItem(localStorageKey);
}

function handleUserResponse(props) {
    window.localStorage.setItem(localStorageKey, props?.data?.access_token);
    return props?.data?.access_token;
}

function login({ email, password }) {
    return client("login", { email, password }).then(handleUserResponse);
}

function register({
    first_name,
    last_name,
    email,
    password,
    country_code,
    zip_code,
    subscribed,
}) {
    return client("register", {
        first_name,
        last_name,
        email,
        password,
        country_code,
        zip_code,
        subscribed,
    }).then(handleUserResponse);
}

async function logout() {
    window.localStorage.removeItem(localStorageKey);
}

// an auth provider wouldn't use your client, they'd have their own
// so that's why we're not just re-using the client
const authURL = API;

async function client(endpoint, data) {
    const config = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Credentials": true,
        },
    };

    return window
        .fetch(`${authURL}${endpoint}`, config)
        .then(async (response) => {
            const data = await response.json();
            if (response.ok) {
                return data;
            } else {
                return Promise.reject(data);
            }
        });
}

export { getToken, login, register, logout, localStorageKey };
