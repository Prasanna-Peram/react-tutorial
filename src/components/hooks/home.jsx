import { useState } from "react";
import { DataGrid } from "../Custom-Components/Data-Grid/data-grid.jsx";
import { useGetAPI } from "./getapidata.jsx";

export function Home(){
    const [layout, setLayout] = useState('grid');

    let products = useGetAPI(`https://fakestoreapi.com/products`);
    

    function handleChange(e){
        setLayout(e.target.value)
        
    }

    return(
        <div className="container-fluid">
            <div>
                <ol>
                    {
                        products.map(product=><li key={product.id}>{product.title}</li>)
                    }
                </ol>
            </div>
            <div>
                <h3>Layout</h3>
                <select onChange={handleChange}>
                    <option>Choose Layout</option>
                    <option value='grid'>Grid</option>
                    <option value='card'>Card</option>
                </select>
            </div>
           <DataGrid layout={layout} caption="Products Details" fields={['Id', 'Name', 'Price', 'Stock']} data={[{Id:1, Name:'Samsung TV', Price:24000, Stock:'Availabe'}, {Id:2, Name:'Mobile', Price:12000, Stock:'Out of Stock'}]} />
        </div>
    )
}
