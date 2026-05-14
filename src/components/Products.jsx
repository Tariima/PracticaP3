import { useState } from "react";
import { allProducts } from "../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState("");

    const addToCart = (product) => {
        const exists = cart.find((item) => item.code === product.code);

        if (exists) {
            setMessage("No se puede anadir un producto mas de una vez.");
            return;
        }

        setCart([...cart, product]);
        setMessage("Producto añadido.");
    };

    const deleteProduct = (code) => {
        const newCart = cart.filter((product) => product.code !== code);

        setCart(newCart);
        setMessage("Producto eliminado del carrito.");
    };

    const clearCart = () => {
        setCart([]);
        setMessage("Compra realizada.");
    };

    const total = cart.reduce((acc, product) => acc + product.price, 0);

    return (
        <main className="store">
            <section className="panel">
                <h2>Productos</h2>
                <div className="products-grid">
                    {allProducts.map((product) => (
                        <ProductCard
                            key={product.code}
                            product={product}
                            onAdd={addToCart}
                        />
                    ))}
                </div>
            </section>

            <section className="panel cart-panel">
                <h2>Carrito</h2>
                <ul className="cart-list">
                    {cart.map((product) => (
                        <li key={product.code} className="cart-item">
                            <span>
                                {product.name} - ${product.price}
                            </span>
                            <button
                                className="secondary-button"
                                onClick={() => deleteProduct(product.code)}
                            >
                                Eliminar producto
                            </button>
                        </li>
                    ))}
                </ul>
                {cart.length === 0 && (
                    <p className="empty-state">Todavia no agregaste productos.</p>
                )}
                <h3 className="cart-total">Total: ${total}</h3>
                <button
                    className="primary-button"
                    onClick={clearCart}
                    disabled={cart.length === 0}
                >
                    Comprar
                </button>
                {message && <p className="message">{message}</p>}
            </section>
        </main>
    );
};

export default Products;
