import styles from "../styles/Home.module.css"
import homeSplash from "../assets/home_splash.jpg"

const Home = () => {
    return (
        <>
            <header className={styles.splash}>
                <img className={styles.splashImage} src={homeSplash} />
                <div className={styles.splashDesc}>
                    <p>Where style meets comfort</p>
                    <button className="standardButton">Shop now</button>
                </div>
            </header>
        </>
    )
};

export default Home;