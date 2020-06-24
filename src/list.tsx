import React from 'react';
import './list.scss';
import Masonry from 'react-masonry-css'

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

const Items = items.map((item, index) => {
    return (
        <div className="item" key={index}>
            <img className="img" src=""></img>
            <p className="name">タイトル{item.name}</p>
            <p className="price">¥ {item.price}</p>
        </div>
    )
})

const List = () => {

    return (
        <Masonry
            breakpointCols={3}
            className="list my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {Items}
        </Masonry>
    );
}

export default List;
