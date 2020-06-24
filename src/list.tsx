import React from 'react';
import './list.scss';
import Masonry from 'react-masonry-css'

const items = [{
    name: "ma1",
    price: 100,
    img: 2
}, {
    name: 2,
    price: 100,
    img: 1
},
{
    name: 2,
    price: 100,
    img: 1
},
{
    name: 2,
    price: 100,
    img: 2
}, {
    name: 1,
    price: 100,
    img: 1
}, {
    name: 2,
    price: 100,
    img: 1
},
{
    name: 2,
    price: 100,
    img: 1
},
{
    name: 2,
    price: 100,
    img: 1
}]

const Items = items.map((item, index) => {
    const images = []
    for (var i = 1; i <= item.img; i++) {
        try {
            const url = require(`../images/${item.name}-${i}.JPG`)
            images.push(<img src={url} className="img"></img>)
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="item" key={index}>
            {images}
            <p className="name">{item.name}</p>
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
