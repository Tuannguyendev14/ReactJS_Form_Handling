import React, { Component } from 'react';
import Product from './product';
import Footer from './footer';
import Header from './header';
class Homepage extends Component {

    render() {

            var products = [{
                    "id": 1,
                    "name": 'Iphone',
                    "price": 6000000,
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLt4IDSU-lT0XD0OjFzpSy29KhSNPBiIqXKtqY-wqpwdDIgKv3jClMho",
                    "status": 'km'

                },
                {
                    "id": 2,
                    "name": 'Iphone 4 Plus',
                    "price": 7000000,
                    "image": "https://didongmango.com/images/products/2018/11/29/large/iphone-7--hong-didongmango_1543501639.jpg.jpg",
                    "status": 'km'

                },
                {
                    "id": 3,
                    "name": 'Iphone 7 Plus',
                    "price": 8000000,
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcchoHNppqmwnaUQ_KqR7JWSx3DpKO-FiZJz8fSKz47nbESgTS",
                    "status": 'km'

                },
                {
                    "id": 4,
                    "name": 'Iphone X',
                    "price": 9000000,
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFytZlr_xA1KalcJNXKa6CrVAzfXNaKcPP7MyqJZtazVmo24Ad-A",
                    "status": 'km'

                },

                {
                    "id": 5,
                    "name": 'Iphone',
                    "price": 6000000,
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLt4IDSU-lT0XD0OjFzpSy29KhSNPBiIqXKtqY-wqpwdDIgKv3jClMho",
                    "status": 'hot'

                },
                {
                    "id": 6,
                    "name": 'Iphone 4 Plus',
                    "price": 7000000,
                    "image": "https://didongmango.com/images/products/2018/11/29/large/iphone-7--hong-didongmango_1543501639.jpg.jpg",
                    "status": 'hot'

                },
                {
                    "id": 7,
                    "name": 'Iphone 7 Plus',
                    "price": 8000000,
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcchoHNppqmwnaUQ_KqR7JWSx3DpKO-FiZJz8fSKz47nbESgTS",
                    "status": 'hot'

                },
                {
                    "id": 8,
                    "name": 'Iphone X',
                    "price": 9000000,
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFytZlr_xA1KalcJNXKa6CrVAzfXNaKcPP7MyqJZtazVmo24Ad-A",
                    "status": 'hot'

                }
        ];

        // props
        let elements_props_khuyenmai = products.map((product, index) => {
            let result = '';
            if (product.status === 'km') {
                result = <Product key = { product.id }
                            id = { product.id }
                            price = { product.price }
                            image = { product.image } >
                            {product.name } 
                        </Product>
            } else {
                result = ''
            }
            return result;
        });

        // props
        let elements_props_hot = products.map((product, index) => {
            let result = '';
            if (product.status === 'hot') {
                        result = <Product key = { product.id }
                        id = { product.id }
                        price = { product.price }
                        image = { product.image } >
                        {product.name } 
                </Product>

            } else {
                result = ''
            }
            return result;
        });

        return ( 
        <div >
             <Header / >
            <div className = "row" >
                <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                    <h3 > Hàng khuyến mãi </h3>
                    { elements_props_khuyenmai } 
                </div> 
                <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                    <h3> Hàng hot </h3>
                     { elements_props_hot } 
                </div> 
            </div> 
                
            <Footer/>
           
        </div>

        );
    }
}

export default Homepage;