import React from "react";
import ProductCard from "./ItemCard"

const ItemList = ({items, loading}) => {
    return (
        <div style={containerStyles}>
            {
                Boolean(loading) ?
                <p> cargando productos.. </p>
                :
                items.map ((nameProduct) => <ProductCard Data={nameProduct} />)
            }
        </div>
    )
}

export default ItemList

const containerStyles ={
    display: "flex", 
    flexDirection: "row", 
    justifiContent: "center", 
    flexWrap: "wrap", 
    gap: "12px"
}