import { Link } from "react-router-dom"
import { useState } from "react"
import styles from "../styles/Item.module.css"
import "../styles/App.css"

const Item = ({ curItem, setCart }) => {
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

    const addToCart = () => {
        setCart(cart => {
            if (curItem.title in cart)
                if (quantity > 0) 
                    cart[curItem.title].quantity = quantity;
                else  
                    delete cart[curItem.title];
            else if (quantity > 0)
                cart[curItem.title] = { ...curItem, quantity }

            return { ...cart };
        });
    };

    return (
        <main className={styles.item}>
            <img className={styles.itemImage} src={curItem.image} alt="" />
            <div className={styles.itemInfo}>
                <h2 className="itemTitle">{curItem.title}</h2>
                <p className={styles.itemPrice}>${curItem.price}</p>
                <p className={styles.itemDesc}>{curItem.description[0].toUpperCase() + curItem.description.substr(1)}</p>
                <hr />

                <div className={styles.itemControls}>
                    <div className={styles.itemControlsQuantity}>
                        <button className={styles.transparentButton} onClick={decrementQuantity}>-</button>
                        <input type="number" className={styles.itemQuantityInput} value={quantity} onChange={updateQuantity} />
                        <button className={styles.transparentButton} onClick={incrementQuantity}>+</button>
                    </div>

                    <button className="standardButton" onClick={addToCart}>Add to cart</button>
                    <Link to="/">
                        <button className={styles.transparentButton}>Back</button>
                    </Link>
                </div>
            </div>
        </main >
    )
};

export default Item; 