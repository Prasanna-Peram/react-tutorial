import { useState } from 'react';
import './animation-demo.css';

export function AnimationDemo(){
    const [aniStyle, setAniStyle] = useState('')
    function SpinClick(){
       setAniStyle('image-spin')
    }
    function ZoomClick(){
        setAniStyle('image-zoom')
    }
    return (
        <div className="container-fluid">
             <div className="d-flex justify-content-center bg-dark align-items-center" style={{height:'100vh'}}>
               <div className='text-center'>
                 <img src="logo192.png" className={aniStyle} alt="logo"/>
                  <div className='mt-3'>
                     <button onClick={SpinClick} className='btn me-2 btn-primary'>Spin</button>
                     <button onClick={ZoomClick} className='btn btn-warning'>Zoom</button>
                  </div>
                </div>
             </div>
        </div>
    )
}