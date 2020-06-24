import React from 'react';
import './list.scss';

const items = [{
    name: 1,
    price: 100,
    img: ""
}, {
    name: 2,
    price: 100,
    img: ""
},
{
    name: 2,
    price: 100,
    img: ""
},
{
    name: 2,
    price: 100,
    img: ""
}, {
    name: 1,
    price: 100,
    img: ""
}, {
    name: 2,
    price: 100,
    img: ""
},
{
    name: 2,
    price: 100,
    img: ""
},
{
    name: 2,
    price: 100,
    img: ""
}]

const List = () => {
    return (
        <div className="list">
            {items.map((item, index) => {
                return (
                    <div className="item" key={index}>
                        <img className="img" src=""></img>
                        <p className="name">{item.name}</p>
                        <p className="price">{item.price}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default List;
