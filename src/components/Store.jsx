import { Link } from "react-router-dom";
import getItems from "../hooks/getItems.jsx"
import styles from "../styles/Store.module.css"

const Store = ({ setCurItem }) => {
    const items = getItems(10);

    return (
        <main className={styles.storeMain}>
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
    )
};

export default Store