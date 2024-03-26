import { useState, useEffect } from "react"
import styles from "../styles/Home.module.css"
import homeSplash from "../assets/home_splash.jpg"

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchItems = async () => {
            const fetchedItems = [];

            for (let i = 1; i <= 4; i++) {
                const response = await fetch(`https://fakestoreapi.com/products/${i}`)
                const json = await response.json();

                fetchedItems.push(json);
            }

            setItems(fetchedItems);
            setLoading(false);
        };

        fetchItems();
    }, []);

    return (
        <>
            <header className={styles.splash}>
                <img className={styles.splashImage} src={homeSplash} />
                <div className={styles.splashDesc}>
                    <p>Where style meets comfort</p>
                    <button className="standardButton">Shop now</button>
                </div>
            </header>

            <main className={styles.featured}>
                <h1>Featured items</h1>

                {loading && <h2>Loading items</h2>}
                
                <div className={styles.items}>
                    {items.map((item, index) => (
                        <div key={index}>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
};

export default Home;