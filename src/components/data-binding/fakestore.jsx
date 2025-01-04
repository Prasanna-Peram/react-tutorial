import { useEffect, useState } from "react";
import axios from "axios";

export function Fakestore(){
    const [categories,setCategories] = useState([]);
    const [products, setProducts] = useState([{id:0, title:'', category:'', description:'', image:'', price:0, rating:{rate:0, count:0}}]);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems]  = useState([]);
    function LoadCategories() {
        axios.get("https://fakestoreapi.com/products/categories")
        .then(response =>{
            setCategories(response.data)
        })
    }
    function LoadProducts(){
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            setProducts(response.data)
        })
    }
    function NavbarButtonClick(categoryName){
        if(categoryName==="all"){
            LoadProducts('https://fakestoreapi.com/products');
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`);
        }
    }
    function handleCategoryChange(e){
        if(e.target.value==="all"){
            LoadProducts('https://fakestoreapi.com/products');
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }
    
    function handleAddClick(product){
        cartItems.push(product);
        alert(`${product.title}\nAdded to Cart`);
        setCartCount(cartItems.length);
    }
    useEffect(()=>{
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products');
    },[])
    return(
        <div className="container-fluid">
            <header className="d-flex text-white justify-content-between p-2 bg-dark">
                <div>
                    <span className="h4">Fakestore</span>
                </div>
                <div className="fs-5">
                    <span className="px-2"><button className="btn btn-light" onClick={()=>NavbarButtonClick('all')}>Home</button></span>
                    <span className="px-2">Electronics</span>
                    <span className="px-2">Jewelery</span>
                    <span className="px-2">Men's Fashion</span>
                    <span className="px-2">Women's Fashion</span>
                </div>
                <div>
                    <button data-bs-target="#cart" data-bs-toggle="modal" className="bi bi-cart4 btn btn-warning position-relative me-4 "> <span className="badge rounded position-absolute rounded-circle bg-danger"> {cartCount} </span> </button>
                    <div className="modal fade" id="cart">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="text-primary">Your Cart Items</h2>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Preview</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map(item=>
                                                    <tr key={item.id}>
                                                        <td>{item.title}</td>
                                                        <td>
                                                            <img  width="50" height="50" src={item.image} alt=""/>
                                                        </td>
                                                        <td>
                                                            {item.price}
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" data-bs-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-4 row">
               <nav className="col-2">
                    <label className="form-label fw-bold">Select Category</label>
                    <div>
                         <select className="form-select" onChange={handleCategoryChange}>
                            {
                                categories.map(category =><option key={category} value={category}>{category.toUpperCase()}</option>)
                            }
                              
                         </select>
                    </div>
                </nav>
                <main className="col-10 d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                    {
                        products.map(product=>
                           <div key={product.id} className="card p-2 m-2" style={{width:'200px'}}>
                                <img src={product.image} className="card-img-to" height="120px" alt="" />
                                <div className="card-header" style={{height:'130px'}}>
                                    <div>
                                        {product.title}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="badge bg-success p-1 rounded"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span> <span className="text-secondary fw-bold">{product.rating.count} ratings</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button onClick={()=> handleAddClick(product)} className="btn btn-warning bi bi-cart4 w-100"> Add to Cart </button>
                                </div>
                           </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}