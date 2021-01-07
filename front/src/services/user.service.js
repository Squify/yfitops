import axios from 'axios';

export default class UserService{

    static async auth(body){
        return await axios.post(`${process.env.REACT_APP_HOST_API}/users/auth`, body)
    }

    static register(formData) {
        console.log('user created')
    }Z
}