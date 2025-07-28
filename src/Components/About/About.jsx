import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
export default function About() {
  const [products, setProducts] = useState([])

async function getallPosts (){
 
//   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
//  .then((response)=>{
// console.log(response.data.data);
//  })
//  .catch((error)=>{
//   console.log(error);
//  })


try {
  
  const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  console.log(data.data);
  setProducts(data.data)
} catch (error) {
  console.log(error);
}





}




useEffect(() => {
 getallPosts()
}, [])



  return (
   <>
   
   

   <div className="row g-4">

{products.map((product)=>
<div className="col-md-3">
<div className="card" style={{width: '18rem'}}>
  <img src={product.imageCover} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <button href="#" className="btn btn-primary">add product</button>
  </div>
</div>
</div>
)}



   </div>
   
   
   
   </>
  )
}
