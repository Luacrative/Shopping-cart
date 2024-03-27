import { Link } from "react-router-dom";
import getItems from "../hooks/getItems.jsx"
import styles from "../styles/Home.module.css"
import homeSplash from "../assets/home_splash.jpg"

const Home = () => {
    const { items, loading } = getItems(4);

    return (
        <>
            <header className={styles.splash}>
                <img className={styles.splashImage} src={homeSplash} />
                <div className={styles.splashDesc}>
                    <p>Where style meets comfort</p>
                    <Link to="/store">
                        <button className="standardButton">Shop now</button>
                    </Link>
                </div>
            </header>

            <main className={styles.featured}>
                <h1>Featured items</h1>

                {loading && <h2>Loading items</h2>}

                <div className={styles.items}>
                    {items.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <img className={styles.itemImage} src={item.image} alt="" />
                            <p className={styles.itemTitle}>{item.title}</p>
                            <p className={styles.itemPrice}>${item.price}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
};

export default Home;