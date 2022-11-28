import './Home.css';
import ProductCard from './ProductCard/ProductCard'
import Header from '../shared/Header/Header'
import Register from './Register/Register';

function Home() {

    fetch("product.json")
        .then((res) => res.json())  // calling the json function
        .then((res) => {              //listening the json function
            console.log(res);
        });



    return (

        <div>
            <Header />
            Home page
            <ProductCard />
            {/* <Register /> */}
        </div>

    );

}
export default Home;