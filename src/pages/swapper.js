import React, { useEffect, useRef, useState } from 'react'
import set from '../Media/swap.png'
import cros from '../Media/cross.png'
const Swapper = () => {
    var [swapbtn,setswpbtn]=useState(true);
    var box=useRef()
    var swapper=useRef()
    var swap=(e)=>{
        if(swapbtn){
            e.target.closest('.ham').classList.remove('round')
        }else{
            e.target.closest('.ham').classList.add('round')
        }
        setswpbtn(!swapbtn);
    }
    var clrchange=(e)=>{
        var clr= e.target.dataset.clr;
        document.querySelector('body').style.setProperty('--color', clr)
    }
    useEffect(()=>{
        if(!swapbtn){
            if(window.location.pathname==='/home'||window.location.pathname==='/'){
                box.current.classList.add('navpro')
                swapper.current.classList.add('navpro')
            }
        }else{
            box.current.classList.remove('navpro')
            if(window.location.pathname!=='/home'&&window.location.pathname!=='/'){
                swapper.current.classList.remove('navpro')
            }
        }
    })

  return (
        <>
            <label htmlFor='swap' ref={swapper} className="swapper" id='swap'></label>
            <div className="ham round" id='swap' onClick={swap}><img src={(()=>{if(swapbtn){return set}else{return cros}})()} alt="color-switch" /></div>
            {(
                ()=>{
                    if(swapbtn){
                        return <div ref={box} id='swapper'></div>
                    }else{
                        return (
                            <div ref={box} id='swapper' className="clrbox" >
                                <div className="piece" onClick={clrchange} id='white' data-clr='#eb821b'></div>
                                <div className="piece" onClick={clrchange} id='red' data-clr='red'></div>
                                <div className="piece" onClick={clrchange} id='pink' data-clr='brown'></div>
                                <div className="piece" onClick={clrchange} id='purple' data-clr='purple'></div>
                                <div className="piece" onClick={clrchange} id='yellow' data-clr='yellowgreen'></div>
                                <div className="piece" onClick={clrchange} id='green' data-clr='green'></div>
                                <div className="piece" onClick={clrchange} id='blue' data-clr='blue'></div>
                                <div className="piece" onClick={clrchange} id='neon' data-clr='lightseagreen'></div>
                            </div>
                        )
                    }
                }
            )()}
            
        </>
    )
}

export default Swapper