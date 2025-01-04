import { useState, useEffect } from "react";

export function DataBinding() {

   const [valPrice, setPrice] = useState(5600000.55678);

   const [productName, setProductName] = useState('');

   const [code, setCode] = useState();

   const [stock, setStock] = useState();

   const [val , setVal] = useState('bg-dark');
   
   useEffect(()=>{
     setProductName("Samsung TV")
     setCode(Math.random());
     setStock(true)
   }, []);

 
   
    return (
        <div className="container-fluid">
            <h2>Data Binding</h2>
            Price : {valPrice.toLocaleString('en-us', {style: 'currency', currency: 'USD'})};
            <br/>
            Price : {valPrice.toPrecision(4)};
            <br/>
            Price : {valPrice.toFixed(3)};
            <br/>
            Product Name : {productName}
            <br/>
           Random Code : {code}
           <br/>
           Stock : {(stock) ? "true" : "false"}
           <br/>
           <h2 className={`text-center text-warning ${val}`}> Hello</h2>
        </div>
    )
}