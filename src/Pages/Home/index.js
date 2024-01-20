import { useAuth } from "../../Auth";
import { useNavigate } from "react-router-dom";
import Navigation from "../../Components/Navigation-Bar";
import Dashboard from "../../Components/Dashboard";
import styles from './styles.module.css';
import { useInfo } from "../../UserInfo";
import { useState } from "react";

const Home = ()=>{
    const navigate = useNavigate();
    const {isLoggedIn} = useAuth();
    const {userInfo} = useInfo();
    const [isDarkMode, setDarkMode] = useState(false);


    if(isLoggedIn){
      console.log(userInfo);
    }

    const toggleTheme = () => {
      setDarkMode(!isDarkMode);
    };
    console.log("Parent Dark Side "+isDarkMode);


    return(
      <div className={styles.main}>
        <div>
        <Navigation title="Weather Forecast" DarkMode={isDarkMode} darkModeFunction={toggleTheme}></Navigation>
        </div>
      <div className={styles.lower_container}>
      <Dashboard DarkMode={isDarkMode}></Dashboard>
      </div>
      </div>
      
      
    )

}

export default Home ;