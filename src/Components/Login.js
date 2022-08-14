import React from 'react';
import {useState} from 'react';
import LogoWhite from './image/LogoWhite.png'
// import './App.css';
// import { useState } from 'react';


function Login(){
    const style ={
        width:"69px"
    }
    const errorColor ={
        color:"red"
    }
    // const [firstName,setFirstName]= useState('');
    // const [LastName,setLastName]= useState('');
    // const [error,setError]= useState(false);

    //     const handleLogin=(e)=> {
    //         e.preventDefault();
    //         if(firstName.length === 0 || LastName.length === 0){
    //             setError(true) 
    //         }
    //     }
const [FirstName,setFirstName] = useState('');
const [LastName,setLastName] = useState('');
const [error,setError] = useState(false);

const handleValidation =(e) =>{
        e.preventDefault();
        if(FirstName.length === 0 || LastName.length === 0){
            setError(true)
        }else{
            alert("login successful");
        }
        console.log(FirstName,LastName);
        
}
        return(
        <>
            {/* <form onSubmit={handleLogin}>
            <div>
                <input type="text" onChange={e => setFirstName(e.target.value)}/>
                </div>
                {error && firstName <= 0?
                <label> First Name can't be empty</label> :""}
            <div>
                
                <input type="text" onChange={e => setLastName(e.target.value)}/>
                </div>   
                {error&& LastName <= 0 ? <label> last Name can't be empty</label>:""}
                        <div>
                            <button>
                                submit
                            </button>
                        </div>
            </form>     */}

            <div className='header'>
                <div className='welcomePage'>
                        <div className='imageDiv'>
                            <a href="#!"><img src={LogoWhite} style={style}/></a>
                        </div>
                        <div className='detailsTitle'>
                            <h1>Welcome page</h1>
                            <p>Sign in to continue access</p>
                            <div>www.yoursite.com</div>
                        </div>
                </div>
                    <div className='formCompart'>
                        <form onSubmit={handleValidation}>
                            <h2>Sign In</h2>
                            <div>
                               <input type="text" placeholder='Email Address' onChange={e => setFirstName (e.target.value)} />
                            </div>
                            {error && FirstName <= 0?
                            <span style={errorColor}>Email can't be empty</span> :''}

                            <div>
                               <input type="password"  placeholder='Password' onChange={e => setLastName (e.target.value)}/>
                            </div>
                            {error && LastName <= 0?
                            <span style={errorColor}>password can't be empty</span> : ''}
                            <div>
                               <button> Continue </button>
                            </div>

                            <div className='connect'>
                                <a href="#!">Or continue with Social Media</a>
                            </div>
                                <div>
                                        <div className='tweetBtn'>
                                            <button> Sign in with Twitter</button>
                                        </div>
                                        <div>
                                            <button className='fbBtn'> Sign in with Facebook </button>
                                        </div>
                                </div>
                        </form>
                    </div>
            </div>
        </>
        )
}
export default Login;