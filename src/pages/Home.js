import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import "../css/Home.css"
const Home = () => {
  const [text, setText] = useState("")
const write=['ROHAN VERMA','A REACT JS DEVELOPER'];
const [fullText,setfulltext] = useState(write[0])
const [index, setIndex] = useState(0)
  window.onbeforeunload=()=>{
    window.scrollTo(0,0);
  }
  var about= useRef();
  var port= useRef();
  var box=useRef();
  var nth1=useRef();
  var nth2=useRef();
  var nth3=useRef();
  var nth4=useRef();
  var nth5=useRef();
  var nth6=useRef();
  var nth7=useRef();
  var nth8=useRef();
  var nth9=useRef();
  var temp=useRef();
  var btnclk =(e)=>{
    var page= e.target.dataset.id
    switch (page) {
      case '/about':
        window.scrollTo(0,0)
          document.getElementById('aboutpage').classList.add('animated')
          setTimeout(()=>{
            document.getElementById('aboutpage').classList.remove('animated')
            about.current.click();
        },500)
        break;
      case '/portfolio':
        window.scrollTo(0,0)
          document.getElementById('portpage').classList.add('animated')
          setTimeout(()=>{
            document.getElementById('portpage').classList.remove('animated')
            port.current.click();
        },500)
        break;
    
      default:
        break;
    }
  }
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 150)
    }
    if(fullText===write[0]&& index===11){
      setTimeout(()=>{
        setText('')
        setIndex(0)
        setfulltext(write[1])
      },500)
    }
    if(fullText===write[1]&& index===20){
      setTimeout(()=>{
        setText('')
        setIndex(0)
        setfulltext(write[0])
      },500)
    }
  }, [index,text,fullText])
  useEffect(()=>{
    document.querySelector('body').style.setProperty('--color', '#eb821b');
    window.addEventListener('scroll',()=>{
      if(window.location.pathname==='/home'||window.location.pathname==='/'){
      nth1.current.style.transform = `translate3d(0,-${window.scrollY/597.85}%,0)`;
      nth2.current.style.transform = `translate3d(0,-${window.scrollY/239.14}%,0)`;
      nth3.current.style.transform = `translate3d(0,-${window.scrollY/108.07}%,0)`;
      nth4.current.style.transform = `translate3d(0,-${window.scrollY/74.3}%,0)`;
      nth5.current.style.transform = `translate3d(0,-${window.scrollY/45.78}%,0)`;
      nth6.current.style.transform = `translate3d(0,-${window.scrollY/33.07}%,0)`;
      nth7.current.style.transform = `translate3d(0,-${window.scrollY/16.28}%,0)`;
      nth8.current.style.transform = `translate3d(0,-${window.scrollY/16.28}%,0)`;
    }
    })

  },[])
  return (
<>
      <div ref={box} className="photobox">
        <div className='thebox'>
          <div ref={nth1} className="photo nth1"></div>
          <div ref={nth2} className="photo nth2"></div>
          <div ref={nth3} className="photo nth3"></div>
          <div ref={nth4} className="photo nth4"></div>
          <div ref={nth5} className="photo nth5"></div>
          <div ref={nth6} className="photo nth6"></div>
          <div ref={nth7} className="photo nth7"></div>
          <div ref={nth8} className="photo nth8"></div>
          <div ref={nth9} className="photo nth9"></div>
        </div>
        <div className="tempo" ref={temp}></div>
        <div className="temp">
          <div className="data">
            <h3>HI THERE !</h3>
            <h1>I'M<span className='typer'>{text}</span></h1>
            <p>I'm a Developer and Designer based in Mohali, Punjab. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
            <div className="buttons">
              <div className="con" ><div onClick={btnclk} data-id='/portfolio' className="btn hbtn hbtn2">Products</div></div>
              <div className="con" ><div onClick={btnclk} data-id='/about' className="btn hbtn hbtn1">About Me</div></div>
              <Link className='hide' ref={about} to='/about'></Link>
              <Link className='hide' ref={port} to='/portfolio'></Link>
            </div>
          </div>
        </div>
      </div>
     
</>
  )
}

export default Home
