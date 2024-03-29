import { Link } from "react-router-dom"
import styles from "../styles/Cart.module.css"
import itemStyles from "../styles/Item.module.css"

const CartEmpty = () => {
    return (
        <>
            <h2 className={styles.lessBold}>Cart is currently empty.</h2>
            <Link to="/store">
                <button className="standardButton">Continue shopping</button>
            </Link>
        </>
    )
};

const CartItems = ({ items, setCart }) => {
    const totalCost = items.reduce((total, item) => total + item.price, 0).toFixed(2);

    const decrementQuantity = item => {
        if (item.quantity > 0) {
            item.quantity--;
            setCart(cart => ({ [item.title]: item, ...cart }));
        }
    };

    const incrementQuantity = item => {
        item.quantity++;
        setCart(cart => ({ [item.title]: item, ...cart }));
    };

    const updateQuantity = (event, item) => {
        if (event.target.value === "" || event.target.value == "0") {
            removeItem(item);
            return;
        }

        item.quantity = parseInt(event.target.value);
        setCart(cart => ({ [item.title]: item, ...cart }));
    };

    const removeItem = item => {
        setCart(cart => {
            delete cart[item.title];
            return { ...cart };
        })
    };

    return (
        <>
            <div className={styles.items}>
                {items.map(curItem => (
                    <div className={styles.item} key={curItem.title}>
                        <img className={styles.itemImage} src={curItem.image} alt="" />
                        <div className={itemStyles.itemInfo}>
                            <h2 className={styles.itemTitle}>{curItem.title}</h2>
                            <p className={itemStyles.itemPrice}>${(curItem.price * curItem.quantity).toFixed(2)}</p>

                            <div className={styles.itemControls}>
                                <div className={`${itemStyles.itemControlsQuantity} ${styles.itemControlsQuantity}`}>
                                    <button className={itemStyles.transparentButton} onClick={() => { decrementQuantity(curItem) }}>-</button>
                                    <input type="number" className={styles.itemQuantityInput} value={curItem.quantity} onChange={event => { updateQuantity(event, curItem) }} />
                                    <button className={itemStyles.transparentButton} onClick={() => { incrementQuantity(curItem) }}>+</button>
                                </div>

                                <button className="standardButton" onClick={() => { removeItem(curItem) }}>Remove</button>
                            </div>
                        </div>
                    </div >
                ))}
            </div>

            <div className={styles.checkout}>
                <h2>Total: ${totalCost}</h2>
                <button className="standardButton">Checkout</button>
            </div>
        </>
    )
};

const Cart = ({ cart, setCart }) => {
    const items = Object.values(cart);

    return (
        <main className={styles.cart}>
            <h1>Viewing Cart</h1>
            {items.length === 0 ? <CartEmpty /> : <CartItems items={items} setCart={setCart} />}
        </main >
    )
};

export default Cart