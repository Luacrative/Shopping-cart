import styles from "../styles/Item.module.css"

const Item = ({ curItem, setCurItem }) => {
    console.log(curItem);

    return (
        <main className={styles.container}>
            <h1>{curItem.title}</h1>
        </main>
    )
};

export default Item; 