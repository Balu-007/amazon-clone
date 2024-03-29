import React, { useState } from 'react';
import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history("/")
            })
            .catch(err => alert(err.message));
    }
    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    history("/");
                }
            })
            .catch(err => alert(err.message));
    }
  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to the Amazon Clone conditins of use & sale. Please see our privacy Notice, our Cookies Notice and our Interested-Based ads
            </p>
            <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
        </div>
        
    </div>
  )
}

export default Login;