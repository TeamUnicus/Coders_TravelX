import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

const login = (user) => {
    console.log(user);
  return axios
    .post(API_URL + "/authenticate", 
     user
)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};



const LoginService = {
  login,
  logout
  
};

export default LoginService;