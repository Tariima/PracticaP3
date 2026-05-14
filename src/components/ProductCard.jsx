const ProductCard = ({ product, onAdd }) => {
    return (
        <article className="product-card">
            <div className="product-card__body">
                <h3>{product.name}</h3>
                <p>Precio: ${product.price}</p>
                <p>{product.isAvailable ? "Disponible" : "No disponible"}</p>
            </div>
            <button
                className="primary-button"
                onClick={() => onAdd(product)}
                disabled={!product.isAvailable}
            >
                Agregar al carrito
            </button>
        </article>
    );
};

export default ProductCard;
