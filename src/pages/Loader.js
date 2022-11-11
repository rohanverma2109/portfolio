import React, { useEffect, useState } from 'react'
import "../css/loader.css"
const Loader = () => {
    window.scrollTo(0,0)
    document.body.style.overflow = "hidden";
    var [data,setdata]=useState(()=>{
        return(
            <div className='loader'>
                <div id='rohan'>
                    <h1>Rohan</h1>
                </div>
                <div id="hr">
                    <div id="blob"></div>
                </div>
                <div id='verma'>
                    <h1>Verma</h1>
                </div>
            </div>
        )
    });
    useEffect(()=>{
        setTimeout(()=>{
            setdata(()=>{
                document.body.style.overflow = "visible";
                return <></>
            })
        },3900)
    },[])
  return (
    <>
        {data}
    </>
  )
}

export default Loader