import React, { useState } from 'react'
import img1 from '../../assets/portfolio/imgi_1_poert1.png'
import img2 from '../../assets/portfolio/imgi_2_port2.png'
import img3 from '../../assets/portfolio/imgi_3_port3.png'
export default function Portfolio() {


    const images = [img1 , img2 , img3 , img1 , img2 , img3]
const [selectedImg, setSelectedImg] = useState(null)


  return (
  <>
  
    <div>Portfolio</div>


<div className="row g-4 my-4">
  {images.map((img)=>  <div className="col-md-6 col-lg-4">
        <div className="inner">
            <img onClick={()=>setSelectedImg(img)}  src={img} alt="" className='w-100' />
        </div>
    </div>)}
</div>


{selectedImg ? <div className='x' onClick={()=>setSelectedImg(null)}>
    <img  src={selectedImg} alt=""  className='w-50'/>
</div>:null}


  



{/* 
<div className="row g-4 my-4">
    <div className="col-md-4">
        <div className="inner">
            <img src={img1} alt="" className='w-100' />
        </div>
    </div>
       <div className="col-md-4">
        <div className="inner">
            <img src={img2} alt="" className='w-100' />
        </div>
    </div>
       <div className="col-md-4">
        <div className="inner">
            <img src={img3} alt=""  className='w-100' />
        </div>
    </div>
       <div className="col-md-4">
        <div className="inner">
            <img src={img1} alt=""  className='w-100' />
        </div>
    </div>
       <div className="col-md-4">
        <div className="inner">
            <img src={img2} alt=""  className='w-100' />
        </div>
    </div>
       <div className="col-md-4">
        <div className="inner">
            <img src={img3} alt=""  className='w-100' />
        </div>
    </div>
</div> */}
  
  
  
  
  </>
  )
}


