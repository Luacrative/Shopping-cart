import styles from "../styles/Navbar.module.css"
import cartImage from "../assets/cart.png"
import searchImage from "../assets/search.png"

const Navbar = () => {
    return (
        <nav className={styles.bar}>
            <div className={styles.left}>
                <h1 className={styles.logo}>Home Store</h1>
            </div>
            <div className={styles.right}>
                <img className={styles.icon} src={searchImage} />
                <img className={styles.icon} src={cartImage} />
            </div>
        </nav>
    )
};

export default Navbar; 