import {  useState,useEffect } from "react";
import moment from "moment";
export function DataBinding3(){
   const [mfd] = useState(Date())
   const [mfd1, setMfd] = useState(new Date('2024-12-27')) 
   const [regExp] = useState(/(?=.*[A-Z])\w{4,15}/); //Regular Expression
   const [categories] = useState(["All",'Electronics','Footwear','Fashion']) // Array
   const [product] =useState({Name:"Samsung TV", Price:45000.33, Cities:["Delhi","Hyd"], Rating:{Rate:4.3, Count:200}}); //Object
   
   
   useEffect(()=> {

   },[]);
   return (
    <div className="container-fluid">
        {mfd} <br/>
        Manufactured: {moment(mfd1).format('DD dddd, MM yyyy')} <br/>
        Regular Expression:  {('david123'.match(regExp)?"Verfied": "Invalid")}
        <br/>
        <h3>Array Example:</h3><hr/> <br/>
        <ol>
            {
                categories.map((category1,index) => <li value={index}>{category1}</li>)
            }
        </ol>
        <select>
            {
                categories.map((category1,index)=><option value={index}>{category1}</option>)
            }
        </select>
        <br/>
       {
        categories.map((category1,index)=> <h2 value={index}>{category1}</h2>)
       }
       <br/>
       <h3>Object Example:<hr/></h3>
       <br/>
       <h4>Product Detailss</h4>
       <dl>
         <dt>Name</dt>
         <dd>{product.Name}</dd>
         <dt>Price</dt>
         <dd>{product.Price}</dd>
         <dt>Cities</dt>
         <dd>
            <ol>
                {
                    product.Cities.map(city=><li key={city}>{city}</li>)
                }
            </ol>
         </dd>
         <dd>
            {product.Rating.Rate} <span className="bi bi-star-fill text-success"></span>
            [{product.Rating.Count}]
         </dd>
       </dl>
       <h3>Map Example: <hr/></h3>
      
    </div>
   )
}