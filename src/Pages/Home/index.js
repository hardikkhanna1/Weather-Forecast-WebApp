import Navigation from "../../Components/Navigation-Bar";
import Dashboard from "../../Components/Dashboard";
import styles from './styles.module.css';
import { useState } from "react";

const Home = ()=>{
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
      setDarkMode(!isDarkMode);
    };

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