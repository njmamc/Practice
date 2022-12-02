import './Home.css';
import ProductCard from './ProductCard/ProductCard'
import Header from '../shared/Header/Header'
import Register from './Register/Register';
import { useEffect, useState } from 'react';

function Home() {
    //creating a state for products data.
    //Whenever there is a change in products, it will force components to refresh.
    const [products, setProducts] = useState([]);
    const [click, setClick] = useState(0);
    useEffect(() => {

        fetch("product.json")
            .then((res) => res.json())  // calling the json function
            .then((res) => {
                setProducts(res);            //listening the json function
                console.log(products.length);
                console.log("fetch called");
            })

    }, [click]);




    return (

        <div>
            <Header />
            {/* Home page */}

            <div className='row'>
                
            {products.map((product) => (
                <div className='col-3'>
                    <ProductCard item={product}/>
                    </div>
                ))
                }
                
           </div>


            {/* <h1>{products.length}</h1>
            <h1>{click}</h1>
            <button onClick={() => { setClick(click + 1) }}>Click</button> */}
            {/* <Register /> */}
        </div>

    );
}

export default Home;