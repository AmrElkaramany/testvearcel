import React, { useState } from 'react'
import Child from '../Child/Child'
Child
export default function Parent() {

// binding


  const [name , setName] = useState('amr')  // string 

  const [num, setNum] = useState(5) // num 

  const [products, setProducts] = useState([
     {id:45 , name:'apple' , category:'laptop' , price:90000},
     {id:45 , name:'wevg' , category:'laptop' , price:90000},
     {id:45 , name:'wef' , category:'laptop' , price:90000},
     {id:45 , name:'we' , category:'laptop' , price:90000},
     {id:45 , name:'fwe' , category:'laptop' , price:90000},
     {id:45 , name:'apple' , category:'laptop' , price:90000},
     {id:45 , name:'apple' , category:'laptop' , price:90000},
     {id:45 , name:'apple' , category:'laptop' , price:90000},
  ])


  const [count, setCount] = useState(9)

  function changeCount(){
    setCount(Math.floor(Math.random()*100))
  }


  return (
<>

 
    <h2 className={`${count>50 ? 'bg-danger' : 'bg-info'}`}>{count}</h2>
    <button onClick={()=>changeCount()} className='btn btn-outline-info'>changeCount</button>


    
    <div className="container">
<div className="row g-4">
      {products.map((product)=> <Child productDetails={product}/>)}

</div>
    </div>



    {/* <div>
      <h2>name: {name}</h2>
      <h3>num : {num}</h3>
    </div> */}



</>
  )
}
