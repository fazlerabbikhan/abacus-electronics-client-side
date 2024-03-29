import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://abacus-electronics-server-side.fly.dev/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts];
}

export default useProducts;