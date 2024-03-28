import { useState, useEffect } from "react"

const getItems = itemCount => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const fetchedItems = [];

            for (let i = 1; i <= itemCount; i++) {
                const response = await fetch(`https://fakestoreapi.com/products/${i}`)
                const json = await response.json();

                fetchedItems.push(json);
            }

            setItems(fetchedItems);
        };

        fetchItems();
    }, []);

    return items;
};

export default getItems; 