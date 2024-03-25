import styles from "../styles/Home.module.css"
import homeSplash from "../assets/home_splash.jpg"

const Home = () => {
    return (
        <>
            <header className={styles.splash}>
                <img className={styles.splashImage} src={homeSplash} />
            </header>
        </>
    )
};

export default Home;