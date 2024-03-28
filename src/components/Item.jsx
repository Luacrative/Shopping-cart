import { useState } from "react"
import styles from "../styles/Item.module.css"
import "../styles/App.css"

const Item = ({ curItem }) => {
    const [quantity, setQuantity] = useState(0);

    const updateQuantity = event => {
        setQuantity(parseInt(event.target.value));
    };

    const decrementQuantity = () => {
        setQuantity(last => Math.max(last - 1, 0));
    };

    const incrementQuantity = () => {
        setQuantity(last => last + 1);
    };

    return (
        <main className={styles.item}>
            <img className={styles.itemImage} src={curItem.image} alt="" />
            <div className={styles.itemInfo}>
                <h2 className="itemTitle">{curItem.title}</h2>
                <p className={styles.itemPrice}>${curItem.price}</p>
                <p className={styles.itemDesc}>An amazing shopping item.</p>
                <hr />

                <div className={styles.itemControls}>
                    <div className={styles.itemControlsQuantity}>
                        <button className={styles.transparentButton} onClick={decrementQuantity}>-</button>
                        <input type="number" className={styles.itemQuantityInput} value={quantity} onChange={updateQuantity} />
                        <button className={styles.transparentButton} onClick={incrementQuantity}>+</button>
                    </div>

                    <button className="standardButton">Add to cart</button>
                    <button className={styles.transparentButton}>Back</button>
                </div>
            </div>
        </main >
    )
};

export default Item; 