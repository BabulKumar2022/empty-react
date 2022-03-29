import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2.js/Card2';



const CardGroup2 = () => {

    const products = [
        {id: 1, name: 'ASUS pro', price: '23000'},
        {id: 2, name: 'HP Z200 i3', price: '33000'},
        {id: 3, name: 'HP R200 i5', price: '43000'}
    ]
    return (
        <div>
            <CardGroup>
            {
                   products.map(product=> <Card2 
                    key={product.id}
                    product= {product}
                   ></Card2>)
               }
            </CardGroup>
            
        </div>
    );
};

export default CardGroup2;
