import { useEffect, useState } from "react";
import axios from "axios";

export function NasaAPI()
{
     const [marsObj, setMarsObj] = useState({});

     useEffect(()=>{

        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        .then(response=>{
            setMarsObj(response.data);
        })

     },[])

     return(
        <div className="container-fluid">
            <h2>Mars Rover Photos</h2>
            <section className="d-flex flex-wrap">
                {
                    marsObj.photos?.map(item=> 

                        <div key={item.id} className="card p-2 m-2" style={{width:'200px'}}>
                            <a href={item.img_src} target="_blank" rel="noreferrer"><img className="card-img-top" height="150" src={item.img_src} alt=""/></a>
                            <div className="card-header">
                                <div className="fs-4">{item.id}</div>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Camera</dt>
                                    <dd className="bi bi-camera"> {item.camera.full_name} </dd>
                                    <dt>Rover</dt>
                                    <dd> {item.rover.name} </dd>
                                </dl>
                            </div>
                        </div>

                    )
                }
            </section>
        </div>
     )
}