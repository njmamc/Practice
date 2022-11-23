import './ProductCard.css'


function ProductCard(){
return(
<div>
<div className="card">
  <img src="https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70" className="card-img-top cardimg" alt="/"></img>
  <hr />
  <div className="card-body">
    <h5 className="card-title">APPLE iPhone 13 (Starlight, 128 GB)</h5>
    <p className="card-text">iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity.</p>
    <p className="card-text price">₹5,999</p>


    <a href="/" className="btn btn-primary">Add Item to Cart</a>
  </div>
</div>





</div>

);
}

export default ProductCard;