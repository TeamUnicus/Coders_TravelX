import axios from "axios";

const API_BASE_URL = "http://localhost:9081//api/v1/";

class UserService{
    save(user){
        return axios.post(API_BASE_URL+"auth/register", user)
    }
}

export default new UserService();