import styles from './Register.module.scss';
import { useState } from 'react';
import { API_URL } from '../../../config';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import {useNavigate} from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()

  const [checked, setChecked] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); 
  const [status, setStatus] = useState(null); // null, loading, success, server Error, clientError, statusError

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus('loading')
    axios.post(`${API_URL}auth/register`, {
      login: login,
      password: password,
      email: email
    }).then(res => {
        setStatus('success')
    }).then(res => {
        setTimeout(() => {
          navigate('/login')
        }, 2000);
    }).catch(err =>{
      if (err.response.status === 400) {
        setStatus('clientError')
      } else if (err.response.status === 409) {
        setStatus('loginError')
      } else {
        setStatus('serverError')
      }
    });
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <p>Fill the form and register new user</p>

        <div className={styles.alert}>
          { status === "success" &&
            <p className={styles.alert_succes}>User registered. You'll be redirected to login page.</p>
          }
          { status === "serverError" &&
            <p className={styles.alert_failure_general}>Something went wrong...</p>
          }
          { status === "clientError" &&
            <p className={styles.alert_failure_data}>Not enough data.</p>
          }
          { status === "loginError" &&
            <p className={styles.alert_failure_login}>Please choose different username.</p>
          }
        </div>

        { status === "loading" &&
          <Spinner aniation="border" role="status" className="block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }

        <div className={styles.register}>
          <label for="login">Login</label>
          <input 
            type="text" 
            placeholder="Login..." 
            name="login" 
            value={login}
            onChange={e => setLogin(e.target.value)} 
          />
        </div>
        <div className={styles.register}>
          <label for="password">Password</label>
          <input 
            type={checked ? "text" : "password"} 
            placeholder="Password..." 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
        </div>
        <div className={styles.checkbox}>
          <input 
            type="checkbox" 
            checked={checked} 
            onChange={(e)=>setChecked(e.target.checked)} 
          />
          <p>Show password</p>
        </div>
        <div className={styles.register}>
          <label for="email">E-mail</label>
          <input 
            type="email" 
            placeholder="Email..." 
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />
        </div>
        <div className={styles.button_div}>
          <button className={styles.button} type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
