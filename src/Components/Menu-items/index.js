import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default function MenuItems(props){
    
    return(
        <li className={styles.item}>
            <Link to="#" className={styles.link}>{props.title}</Link>
        </li>

    )
}