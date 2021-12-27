import axios from "axios"
// import Register from "./pages/Register"



const BASE_URL ="https://xmashop.herokuapp.com/api/"

// const BASE_URL ="http://localhost:7000/api/"


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

const currentUser = user && JSON.parse(user).currentUser;

const TOKEN = currentUser?.accessToken;


// const currentUser =  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;

// let TOKEN;

// if (!currentUser) {
//           <Register />
// }else{
//           TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// }

export const publicRequest = axios.create(
          {
                    baseURL: BASE_URL,
          }
)


export const userRequest = axios.create(
          {
                    baseUrs: BASE_URL,

                    header: {
                              token: `Bearer ${TOKEN}`
                    }
          }
)