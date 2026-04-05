import { allProducts } from "../data/products";
import ProductCard from "./ProductCard";
import { useState } from "react";
const Products = () => {

    const [cart, setCart] = useState([]);

    const [message, setMessage] = useState("");

    const addToCart = (product) => {

        const exists = cart.find(el => el.code === product.code);

        if(exists){
            setMessage("No se puede añadir un producto más de una vez.");
            return;
        }

        setCart([...cart, product]);
        setMessage(`${product.name} añadido al carrito.`);
    }

    const deleteProduct = (code) => {

        const newCart = cart.filter(e => e.code !== code);

        setCart(newCart);
        setMessage("Producto eliminado del carrito.");
    }

    const total = cart.reduce((acc, el) => acc + el.price, 0);

    const buy = () => {
        setCart([]);
        setMessage("Compra realizada con éxito.");
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
                {message && <p>{message}</p>}
                {cart.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    <>
                        <ul>
                            {cart.map(e => (
                                <li key={e.code}>
                                    {e.name} - ${e.price}
                                    <button onClick={() => deleteProduct(e.code)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                        <h3>Total: ${total}</h3>
                        <button onClick={buy}>Comprar</button>
                    </>
                )}
            </section>
        </>
    )
}

export default Products;
