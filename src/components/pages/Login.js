import React from 'react'

import './Register.css'

const Login =() =>{
  return (
    <div className='containerLogin'>
        <form >
            <h1 className='heading-sign'>Log in Form</h1>
            <div className='ui devider'></div>
            <div className='ui form'>
                
                <div className="field">
                    <label htmlFor="Email"></label>
                    <input type="email" name='email' placeholder='Email/Username' />
                </div>
                <div className="field">
                    <label htmlFor="Password"></label>
                    <input type="password" name='password' placeholder='Password' />
                </div>

                <div className="ui checkbox">
                    <input type="checkbox" name="example"/>
                    <label>Remember me</label>
              </div>
                 <a href="">Forgot Password?</a>
              <div className='loginButton-2'>
              <button className="fluid ui blue basic button">Log in</button>
              </div>
                   <div className='or-para'>
                     or
                   </div>  
              <div className='twowayLogin'>
              <button class="ui facebook button">
                  <i class="facebook icon"></i>
                  Facebook
              </button>
              <button class="ui google button">
                  <i class="google icon"></i>
                  Google
              </button>
            </div>
    
            <div className="terms">
            <p>Don't have an account? <a href="/sign-up"> Create an account </a>
           
            </p> 
            </div>

              </div>
              
        </form>
    </div>
  )
}

export default Login