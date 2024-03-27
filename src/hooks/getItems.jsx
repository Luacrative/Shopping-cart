import { useState, useEffect } from "react"

const getItems = itemCount => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);

            const fetchedItems = [];

            for (let i = 1; i <= itemCount; i++) {
                const response = await fetch(`https://fakestoreapi.com/products/${i}`)
                const json = await response.json();

                fetchedItems.push(json);
            }

            setItems(fetchedItems);
            setLoading(false);
        };

        fetchItems();
    }, []);

    return { items, loading };
};

export default getItems; 