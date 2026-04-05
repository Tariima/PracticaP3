import { allProducts } from "../data/products";
import ProductCard from "./ProductCard";
import { useState } from "react";
const Products = () => {
    
    const [cart, setCart] = useState([]);
    
    const [message, setMessage] = useState("");

    const addToCart = (product) => {

        const exists = cart.find(el => el.code === product.code);

        if(exists){
            setMessage([...message, "No se puede añadir un producto más de una vez."]);
            return;
        }

        setCart([...cart, product]);
        setMessage([...message, "Producto añadido."]);
    }

    const deleteProduct = (code) => {

        const newCart = cart.filter(e => e.code !== code);

        setCart(newCart);
        setMessage([...message, "Producto eliminado del carrito."]);
    }


    return (
        <>
            <section>
                <h2>Productos</h2>
                {allProducts.map(product => (
                    <ProductCard key={product.code} product={product} onAdd={addToCart}/>))
                }
            </section>
            <section>
                <h2>Carrito</h2>
                {
                    <ul>
                        {cart.map()}
                        <button onClick={() => deleteProduct(e.code)}>Eliminar producto</button>
                    </ul>
                }
                <h3>Total:</h3>
                <button>Comprar</button>
            </section>
        </>
    )
}

export default Products;