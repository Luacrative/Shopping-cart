import getItems from "../hooks/getItems.jsx"
import styles from "../styles/Store.module.css"

const Store = () => {
    const { items, loading } = getItems(10);

    return (
        <>
            <h1>Store page</h1>
        </>
    )
};

export default Store; 