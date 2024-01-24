import React from "react";
import Item from "../item/Item"
import {Link} from "react-router-dom"
import "./itemList.css";

function ItemList({items}){
    return (
        <div className="items-list">
            {items.map((item) => (
                <Link to={`/item/${item.id}`} key={item.id}>
                    <Item 
                    name = {item.name}
                    rating = {item.rating}
                    price = {item.price}
                    saleDiscount = {item.saleDiscount}
                    image = {item.image}
                    brand = {item.brand}
                    />
                </Link>
            ))}
        </div>
    )
}
export default ItemList;