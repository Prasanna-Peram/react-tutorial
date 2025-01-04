import { useState } from "react"

export function FormDemo()
{
    const [product, setProduct] = useState({Name:'', Price:0, City:'', Stock:false});
    const [newProduct, setNewProduct] = useState({Name:'', Price:0, City:'', Stock:false});
    function handleNameChange(e){
        setProduct({
            Name: e.target.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })  
    }
    function handlePriceChange(e){
        setProduct({
            Name: product.Name,
            Price: e.target.value,
            City: product.City,
            Stock: product.Stock
        })  
    }
    function handleCityChange(e){
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: e.target.value,
            Stock: product.Stock
        })  
    }
    function handleStockChange(e){
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: product.City,
            Stock: e.target.checked
        })  
    }
    function handleSubmitClick(){
      setNewProduct(product)
    }
    return(
        <div className="container-fluid">
           <div className="row">
                <div className="col-3">
                <h3>Register Product</h3>
                    <form>
                    <dl>
                            <dt>Name</dt>
                            <dd><input type="text" onChange={handleNameChange} /></dd>
                            <dt>Price</dt>
                            <dd><input type="number" onChange={handlePriceChange} /></dd>
                            <dt>Shipped To</dt>
                            <dd>
                                <select onChange={handleCityChange}>
                                    <option>Select City</option>
                                    <option>Delhi</option>
                                    <option>Hyd</option>
                                </select>
                            </dd>
                            <dt>Stock</dt>
                            <dd className="form-switch">
                                <input type="checkbox" onChange={handleStockChange} /> <label>Available</label>
                            </dd>
                        </dl>
                        <button onClick={handleSubmitClick} type="button">Submit</button>
                    </form>
                </div>
                <div className="col-9">
                    <h3>Product Details</h3>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{newProduct.Price}</dd>
                        <dt>Stock</dt>
                        <dd>{(newProduct.Stock === true? 'Available': 'Out Of Stock')}</dd>
                        <dt>City</dt>
                        <dd>{newProduct.City}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}