import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/auth/";

class UserService{
    save(user){
        return axios.post(API_BASE_URL+"register", user)
    }
}

export default new UserService();