import styles from "../styles/Item.module.css"
import "../styles/App.css"

const Item = ({ curItem }) => {
    return (
        <main className={styles.container}>
            <img className={styles.itemImage} src={curItem.image} alt="" />
            <div className={styles.itemInfo}>
                <h2 className="itemTitle">{curItem.title}</h2>
                <p className={styles.itemPrice}>${curItem.price}</p>
                <p className={styles.itemDesc}>An amazing shopping item.</p>
                <hr />
            </div>
        </main>
    )
};

export default Item; 