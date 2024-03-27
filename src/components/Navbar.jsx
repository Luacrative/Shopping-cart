import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css"
import cartImage from "../assets/cart.png"
import searchImage from "../assets/search.png"

const Navbar = () => {
    const location = useLocation();
    const background = location.pathname === "/store" ? styles.opaqueBar : styles.transparentBar;

    return (
        <nav className={`${styles.bar} ${background}`}>
            <div className={styles.left}>
                <Link className={styles.redirect} to="/">
                    <h1 className={styles.logo}>Home store</h1>
                </Link>
            </div>
            <div className={styles.right}>
                <img className={styles.icon} src={searchImage} />
                <img className={styles.icon} src={cartImage} />
            </div>
        </nav>
    )
};

export default Navbar;