import React from 'react'
import {IoMdClose,IoMdCart} from 'react-icons/io'
const Preview = ({product,setproduct,page}) => {
  if(product===''){
    return <></>
  }else{
    return (
      <>
      <div className="product" data-id={product.id}>
        <div className="view">
          <img src={product.thumbnail} alt="product" />
        </div>
          <div className="title">
            <h2>{product.title}</h2>
            <div className="con">
              <div className='btn hbtn hbtn2' onClick={()=>{page.classList.add('in');setproduct('')}}><IoMdClose/>close</div>
            </div>
          </div>
          <br />
          <div className="pdetails">
            <h4><span>Price </span>{product.price}$</h4>
            <h4><span>Rating </span>{product.rating} / 5</h4>
            <h4><span>Brand </span>{product.brand}</h4>
            <h4><span>Description </span>{product.description}</h4>
            <div className="title">
              <div className="con">
                <div className='btn hbtn' onClick={()=>{page.classList.add('in');setproduct('')}}><IoMdCart/>Buy Now</div>
              </div>
            </div>
          </div>
      </div>
      </>
    )
  }
}

export default Preview