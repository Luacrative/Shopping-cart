import styles from "./Navbar.module.css"
import cartImage from "../assets/cart.png"
import searchImage from "../assets/search.png"

const Navbar = () => {
    return (
        <div className={styles.bar}>
            <div className={styles.left}>
                <h1 className={styles.logo}>Shopping Cart</h1>
            </div>
            <div className={styles.right}>
                <img className={styles.icon} src={searchImage} />
                <img className={styles.icon} src={cartImage} />
            </div>
        </div>
    )
};

export default Navbar; 