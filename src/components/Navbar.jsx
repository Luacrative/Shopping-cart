import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css"
import cartImage from "../assets/cart.png"
import searchImage from "../assets/search.png"

const Navbar = ({ cart }) => {
    const location = useLocation();
    const background = location.pathname === "/" ? styles.transparentBar : styles.opaqueBar;

    return (
        <nav className={`${styles.bar} ${background}`}>
            <div className={styles.left}>
                <Link className={styles.redirect} to="/">
                    <h1 className={styles.logo}>Home store</h1>
                </Link>
            </div>
            <div className={styles.right}>
                <img className={styles.icon} src={searchImage} />
                <div className={styles.cart}>
                    <img className={styles.icon} src={cartImage} />
                    {cart.length > 0 &&
                        <p className={styles.cartQuantity}>{cart.length}</p>
                    }
                </div>
            </div>
        </nav>
    )
};

export default Navbar;