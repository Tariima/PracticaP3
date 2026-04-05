

const ProductCard = ({product, onAdd}) => {
    return (
        <>
            <div>
                <h3>{product.name}</h3>
                <p>Precio: ${product.price}</p>
                <p>{product.isAvailable ? "Disponible" : "No disponible"}</p>
                <button
                    onClick={()=> onAdd(product)}
                    disabled={!product.isAvailable}
                >Agregar 🛒</button>
            </div>
        </>
    )
}

export default ProductCard;