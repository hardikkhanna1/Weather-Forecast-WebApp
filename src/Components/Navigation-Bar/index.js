import MenuItems from "../Menu-items" ;
import Button from "../Button";
import { useAuth } from "../../Auth";
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";


export default function Navigation({title,DarkMode,darkModeFunction}){

  const { isLoggedIn ,logout } = useAuth();
  console.log("Navigation Bar "+DarkMode);
  

  var button_label = isLoggedIn===false?"Login":"Logout" ;
  const navigate = useNavigate();

  function loginorlogout(){
    if(isLoggedIn===false){
      navigate('/login')
    }
    else{
      logout();
    }
  }



  return(
    <nav className={styles.bar}>
      <div className={styles.heading}>
        <h2 >{title}</h2>
      </div>
      <div className={styles.menu}>
        <ul>
          <MenuItems title="Home"></MenuItems>
          <MenuItems title="Help"></MenuItems>
          <MenuItems title="Contact"></MenuItems>
        </ul>
      </div>
      <div className={styles.login}>
        <Button label={button_label} onClick={loginorlogout}></Button>
        <Button label={DarkMode?"Light":"Dark"} onClick={darkModeFunction}/>
      </div>
    </nav>
  )
}