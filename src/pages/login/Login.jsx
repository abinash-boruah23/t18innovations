import React from 'react'
import './css/login.css'
import sal from '../../assets/Saly-1.svg'
import google from '../../assets/google.svg'
import fb from '../../assets/Facebook.svg'
import apple from '../../assets/apple.svg'
import {
    Link
  } from "react-router-dom";
import Profile from '../component/Profile'

function Login({users}) {
    return (
        <div>
            <div className="banner"></div>
            <div className="login">
                <div className="login__col1">
                    <div className="login__logo">
                        <p className="login__logo-text">Your Logo</p>
                    </div>
                    <div className="login__text-box">
                        <p className="login__text-line1">Sign in to</p>
                        <p className="login__text-line2">Lorem Ipsum is simply</p>
                        <p className="login__text-line3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className="login__login-as">
                        <p className="login__login-as-text">Login as</p>
                        
                            <Profile users={users}/>
                    </div>
                </div>
                <div className="login__col2">
                    <img src={sal} alt="" srcset="" />
                </div>
                <div className="login__col3">
                    <div className="login__col3-text">
                        <div className="login__text-left">
                            <p className="login__welcome">Welcome to <span className="login__welcome--lorem">LOREM</span></p>
                            <p className="login__sign-text">Sign in</p>
                        </div>
                        <div className="login__right">
                            <p className="login__right-text1">No Account ?</p>
                            <a href="#" className="login__right-text2">Sign up</a>
                        </div>
                    </div>
                    <div className="login__links">
                        <a href="https://www.google.com/" className="login__link"><img src={google} alt="" srcset="" /><span>Sign with Google</span></a>
                        <a href="https://www.facebook.com" className="login__link"><img src={fb} alt="" srcset="" /><span>Sign with Facebook</span></a>
                        <a href="https://www.apple.com" className="login__link"><img src={apple} alt="" srcset="" /><span>Sign with Apple</span></a>
                    </div>
                    <form className="form" action="" method="post">
                        <label htmlFor="uname">Enter your username or email address</label>
                        <input type="text" name="uname" placeholder="Username or email address"/>
                        <label htmlFor="psw">Enter your Password</label>
                        <input type="password" name="psw" placeholder="Password"/>
                        <a href="" className="login__forgot-psw">Forgot Password</a>
                        {/* <input type="submit" value="Sign in" /> */}
                    </form>
                    <Link to="/ticket" className="login__submit">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
