import axios from 'axios';
import {
    LOGIN_USER
} from './types';

export function loginUser(dataTosubmit) {
 
    // /api/users/login 리턴 값 request 에 전달
    const request = axios.post('/api/users/login', dataTosubmit )
        .then(response =>  response.data )

    // reducer 으로 보내야 됨
    // reducer 에서는 previousState 와 action을 조합해서 nextState를 만듬
    return {
        type: "LOGIN_USER",
        payload: request
    }    

}