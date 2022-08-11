/* 以post 為例 */
import axios from "axios";

//headers
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'auth token'
}

//data
const data = {
    password: "13456",
    username: "user"
}
try {
    const res = await axios.post('https://route-api', data, { headers: headers });
    // Work with the response...
} catch (err) {
    // Handle error
    console.log(err);
}
