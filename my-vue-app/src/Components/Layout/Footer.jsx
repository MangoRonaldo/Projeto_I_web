import {FaFacebook, FaInstagram} from "react-icons/fa"
import styles from "./Footer.module.css"
function Footer(){
    return(
        <div className={styles.footer}>
   <ul className={styles.social_list}>
    <li>
       <a href="https://www.facebook.com/abdel.francisco.5">
       <FaFacebook/>
       </a>
    </li>
    <li>
        <a href="">
        <FaInstagram/>
        </a>
        
    </li>
   </ul>
   <p className={styles.copy_rigth}>
    <span>Mango</span> &copy;2024</p>
        </div>
    )
}

export default Footer