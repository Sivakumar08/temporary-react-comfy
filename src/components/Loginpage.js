import React, { useState } from 'react';

import styled from 'styled-components'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the username and password, such as sending them to a server to be authenticated
  };

  return (
  //  <Wrapper>
  //    <div className='page-100 section section-center '>
  //     <h3>Login</h3>
  //     <form onSubmit={handleSubmit} >
  //       <label>
  //         Username:
  //         <input type="text" value={username} onChange={handleUsernameChange} />
  //       </label>
  //       <br />
  //       <label>
  //         Password:
  //         <input type="password" value={password} onChange={handlePasswordChange} />
  //       </label>
  //       <br />
  //       <button type="submit" className='btn '>Submit</button>
  //     </form>
  //   </div>
    
  //  </Wrapper>
  <Wrapper className='page-100'>
    <div className='main section-center '>
    <input type="checkbox" id="chk" aria-hidden="true"/>
      <div className='signup'> 
        <form>
          <label for="chk" aria-hidden="true">Signup</label>
          <input type="text" name="txt" value={username} placeholder="User name" ></input>
          <input type="password" name="pswd" value={password} placeholder="Password"></input>
          <input type="password" name="pswd" value={password} placeholder="Re Enter Password"></input>
          <button>Signup</button>
        </form>
      </div>

      <div className='login'>
        <form>
          <label for="chk" aria-hidden="true">Login</label>
          <input type="text" value={username} placeholder='Email'></input>
          <input type="password" value={password} placeholder="Password"></input>
          <button>Login</button>

        </form>
      </div>
    </div>

  </Wrapper>
  );
};


const Wrapper = styled.section`
body{
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	font-family: 'Jost', sans-serif;
	background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
}
.main{
	width: 350px;
	height: 500px;
	background: red;
	overflow: hidden;
	background: #2596be;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #000;
}
#chk{
	display: none;
}
.signup{
	position: relative;
	width:100%;
	height: 100%;
}
label{
	color: #fff;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 60px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}
input{
	width: 60%;
	height: 20px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
}
button{
	width: 60%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: #fff;
	background: #573b8a;
	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}
button:hover{
	background: #6d44b8;
}
.login{
	height: 460px;
	background: #eee;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
	transition: .8s ease-in-out;
}
.login label{
	color: #573b8a;
	transform: scale(.6);
}

#chk:checked ~ .login{
	transform: translateY(-500px);
}
#chk:checked ~ .login label{
	transform: scale(1);	
}
#chk:checked ~ .signup label{
	transform: scale(.6);
}

`

export default LoginPage;
