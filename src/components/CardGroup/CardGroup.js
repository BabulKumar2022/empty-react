import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name: 'Laptop pro', price: '23000'},
        {id: 2, name: 'Laptop i3', price: '33000'},
        {id: 3, name: 'Laptop i5', price: '43000'}
    ]
    return (
        <div>
            <div className="card-group">
                
               {
                   products.map(product=> <Card 
                    key={product.id}
                    product= {product}
                   ></Card>)
               } 
               
            </div>
        </div>
    );
};

export default CardGroup;