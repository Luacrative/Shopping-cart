import getItems from "../hooks/getItems.jsx"
import styles from "../styles/Store.module.css"

const Store = () => {
    const { items, loading } = getItems(10);

    return (
        <main className={styles.storeMain}>
            {loading && <h2>Loading items</h2>}

            <div className={styles.items}>
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <img className="itemImage" src={item.image} alt="" />
                        <p className="itemTitle">{item.title}</p>
                        <p className="itemPrice">${item.price}</p>
                    </div>
                ))}
            </div>
        </main>
    )
};

export default Store; 