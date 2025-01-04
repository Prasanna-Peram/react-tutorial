import { useState } from "react";
import { DataGrid1 } from "./data-grid1";

export function Home1(){
    const [layout, setLayout] = useState('grid')
    function handleChange(e){
        setLayout(e.target.value)
    }
    return (
        <div className="container-fluid">
            <div>
                <h1>Layout</h1>
                <select onChange={handleChange}>
                    <option>Choose Layout</option>
                    <option  value="grid">Grid</option>
                    <option value="Card">Card</option>
                </select>
            </div>
            <DataGrid1 layout={layout} caption="Products Details" fields={['Id','Name', 'Price', 'Stock']} data={[{Id:1, Name: 'Samsung TV', Price: 24000, Stock:'Available'},{Id:2, Name:'Mobile', Price:12000, Stock:'Out of Stock'}]}></DataGrid1>
        </div>
    )
}