import styles from './Login.module.scss';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/usersRedux';
import {useNavigate} from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('null');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
    };

    setStatus('loading');
    fetch(`${API_URL}auth/login`, options) 
      .then(res => {
        if (res.status === 200) {
          setStatus('success');
          dispatch(logIn({ login }));
          setTimeout(() => {
            navigate('/')
          }, 1000);
        } else if (res.status === 400) {
          setStatus('clientError');
        } else {
          setStatus('serverError');
        }
      })
      .catch(err => {
        setStatus('serverError')
      })
  }

  return (
    
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <p>Login to the page</p>

        <div className={styles.alert}>
          { status === "success" &&
            <p className={styles.alert_succes}>Login successful. You'll be redirected to main page.</p>
          }
          { status === "serverError" &&
            <p className={styles.alert_failure_general}>Something went wrong. Try again.</p>
          }
          { status === "clientError" &&
            <p className={styles.alert_failure_data}>Login or password are incorrect.</p>
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
        <div className={styles.button_div}>
          <button className={styles.button} type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
