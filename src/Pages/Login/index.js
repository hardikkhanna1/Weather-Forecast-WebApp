import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useAuth } from '../../Auth';
import styles from './styles.module.css';
import weather from './../../Images/weather.jpg';
import { useInfo } from '../../UserInfo';


const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  var {login} = useAuth();
  var {setuserInfo} = useInfo()

  const verifyUser = (curr_username,curr_password)=>{

    const auth_obj = [
      {
        "name": "John Doe",
        "username": "john_doe",
        "password": "password123",
        "city": "New York"
      },
      {
        "name": "Jane Smith",
        "username": "jane_smith",
        "password": "pass456",
        "city": "Los Angeles"
      },
      {
        "name": "Alice Johnson",
        "username": "alice_j",
        "password": "secure789",
        "city": "Chicago"
      },
      {
        "name": "Bob Thompson",
        "username": "bob_t",
        "password": "bobpass",
        "city": "San Francisco"
      }
    ]
    var answer =false ;
    auth_obj.forEach(function(item){
      if(curr_username===item.username && curr_password===item.password){
        var infoObj = {};
        infoObj.name = item.name ;
        infoObj.username = item.username ;
        infoObj.city = item.city ;
        setuserInfo(infoObj);
        answer = true;
      }
    })
    return answer;
  }

  const handleLogin = () => {

    if(username!=="" && password!==""){
      
      if(verifyUser(username,password)===true){
        login();
        navigate('/home');
      }
    }

  };

  return (
    <div className={styles.parent_container}>
    <div className={styles.left_container}>
      <img src={weather} alt='Weather forecast' className={styles.weather}></img> 

    </div>
    <div className={styles.login_container}>
      <h2 className={styles.form_heading}>Login Page</h2>
      <form className={styles.login_form}> 
        
        <Input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button label="Login" onClick={handleLogin} />
      </form>
    </div>
    </div>
  );
};

export default LoginPage;