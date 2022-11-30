import {useState} from 'react';
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const login = () => {
        Axios.get('http://localhost:42069/derp')
    }
    return (
        <div className="Login">
            User Name: <input type="text" onChange={e =>{setUserName(e.target.value)}}/> <br/>
            Password:  <input type="text" onChange={e =>{setPassword(e.target.value)}}/> <br/>
            <div onClick={login}>Login</div>
            <div onClick={()=>{history.pushState('/createaccount')}}>New User</div>
        </div>
    );
}