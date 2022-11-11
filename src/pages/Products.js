import React from 'react'

const Products = ({data,proclick}) => {
  return (
    <>
    {data.products.map((p)=>{
        return(
            <div className="projects" onClick={proclick} key={p.id} id={p.id} data-id={p.id}>
                <div className="hover">
                    <img src={p.thumbnail} alt="product" />
                    <h3>{p.title}</h3>
                </div>
            </div>
        )
    })}
    </>
  )
}

export default Products