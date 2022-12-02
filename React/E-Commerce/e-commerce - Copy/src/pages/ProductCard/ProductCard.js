import './ProductCard.css'


function ProductCard(props){
return(
<div>
<div className="card">
  <img src={props.item.image} className="card-img-top cardimg" alt="/"></img>
  <hr />
  <div className="card-body">
    <h5 className="card-title">{props.item.Name}</h5>
    <p className="card-text">{props.item.Detail}</p>
    <p className="card-text price">{props.item.Price}</p>


    <a href="/" className="btn btn-primary">Add Item to Cart</a>
  </div>
</div>

</div>

);
}

export default ProductCard;