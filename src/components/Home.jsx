import { Link } from "react-router-dom";
import getItems from "../hooks/getItems.jsx"
import styles from "../styles/Home.module.css"
import homeSplash from "../assets/home_splash.jpg"

const Home = ({ setCurItem }) => {
    const items = getItems(4);

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

                {items.length === 0 && <h2>Loading items</h2>}

                <div className={styles.items}>
                    {items.map((item, index) => (
                        <div className="item" key={index}>
                            <Link to="/item" onClick={() => setCurItem(item)}>
                                <img className="itemImage" src={item.image} alt="" />
                                <p className="itemTitle">{item.title}</p>
                                <p className="itemPrice">${item.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
};

export default Home