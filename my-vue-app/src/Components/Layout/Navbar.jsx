import {Link} from 'react-router-dom'
import Container from './Container'
import styles from "./Navbar.module.css"
function Navbar(){
    return(
        <div className={styles.navbar}>
    <Container>
        <Link to="" >
        <img src="" alt="" />
        </Link>
   <ul  className={styles.list}>
    <li className={styles.item}>
    <Link to="/">Home</Link>
    </li>
    <li className ={styles.item}>
    <Link to="/company">Company</Link>
    </li>
    <li className={styles.item}>
    <Link to="/contact">Contacto</Link>
    </li>
   </ul>
    </Container>
  </div>
  
 
    )
}

export default Navbar