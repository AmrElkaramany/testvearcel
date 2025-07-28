import React from 'react'

export default function Child({productDetails}) {
console.log(productDetails);

    let {id , name , category , price} = productDetails
    console.log(id);
    console.log(name);



  return (
    <>



    <div className="col-md-4">
        <div className="inner bg-info rounded-4 p-4">
            <h2>name : {name}</h2>
            <p>id:{id}</p>
            <h3>price : {price}</h3>
            <h4>category : {category}</h4>
        </div>
    </div>

    
    </>
  )
}
