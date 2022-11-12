import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import "../css/Nav.css"
import ham from '../Media/ham.png'
import cros from '../Media/cross.png'
import Portfolio from './Portfolio';
import About from './About';
import Home from './Home';
import Swapper from './swapper';
import { FaHome,FaUser,FaBriefcase } from 'react-icons/fa';
const Nav = () => {
    var [checked,setcheck]=useState(true);
    var [loc,]=useState(window.location.pathname);
    var nav= useRef();
    var home= useRef();
    var homepage= useRef();
    var about= useRef();
    var aboutpage= useRef();
    var portfolio= useRef();
    var portfoliopage= useRef();
    var navlinks= useRef();
    var check=()=>{
        setcheck(!checked);
    }
    var theclick=(e)=>{
        var page= e.target.closest(".link").dataset.page
        if(!checked && page!==window.location.pathname){
            switch (page) {
                case page="/home":
                    window.scrollTo(0,0);
                    document.querySelector('body').style.setProperty('--color', '#eb821b');
                    homepage.current.classList.add('animated')
                    setTimeout(()=>{
                        homepage.current.classList.remove('animated')
                        home.current.click();
                    },500)
                break;
                    case page='/about':
                        window.scrollTo(0,0);
                    document.querySelector('body').style.setProperty('--color', 'lightseagreen');
                    aboutpage.current.classList.add('animated')
                    setTimeout(()=>{
                        aboutpage.current.classList.remove('animated')
                        about.current.click();
                    },500)
                break;
                case page='/portfolio':
                    window.scrollTo(0,0);
                    document.querySelector('body').style.setProperty('--color', 'purple');
                    portfoliopage.current.classList.add('animated')
                    setTimeout(()=>{
                        portfoliopage.current.classList.remove('animated')
                        portfolio.current.click();
                    },500)
                break;
                default:
                    break;
            }
            check();
        }
    }
    
    useLayoutEffect(()=>{
        if(loc==='/home'||loc==='/'){
            document.getElementById('nav').classList.add('navpro');
            document.getElementById('swap').classList.add('navpro');
            document.getElementById('swapper').classList.add('navpro');
        }else{
            document.getElementById('nav').classList.remove('navpro');
            document.getElementById('swap').classList.remove('navpro');
            document.getElementById('swapper').classList.remove('navpro');
        }
    })
    useEffect(()=>{
        if(!checked){
            nav.current.classList.add("checked")
            navlinks.current.classList.add("checkedlink")
            navlinks.current.children[1].classList.add('linkanim')
            navlinks.current.children[2].classList.add('link3anim')
        }else{
            nav.current.classList.remove("checked")
            navlinks.current.classList.remove("checkedlink")
        }
        switch (window.location.pathname) {
            case "/home":
                document.getElementById('home').classList.add("sel")
                document.getElementById('about').classList.remove("sel")
                document.getElementById('portfolio').classList.remove("sel")
                document.getElementById('hbar').classList.add("activate")
                document.getElementById('abar').classList.remove("activate")
                document.getElementById('pbar').classList.remove("activate")
                document.getElementById('nav').classList.add('navpro');
                document.getElementById('swap').classList.add('navpro');
                document.getElementById('swapper').classList.add('navpro');
                
            break;
            case '/about':
                document.getElementById('home').classList.remove("sel")
                document.getElementById('about').classList.add("sel")
                document.getElementById('portfolio').classList.remove("sel")
                document.getElementById('hbar').classList.remove("activate")
                document.getElementById('abar').classList.add("activate")
                document.getElementById('pbar').classList.remove("activate")
                document.getElementById('nav').classList.remove('navpro');
                document.getElementById('swap').classList.remove('navpro');
                document.getElementById('swapper').classList.remove('navpro');
            break;
            case '/portfolio':
                document.getElementById('home').classList.remove("sel")
                document.getElementById('about').classList.remove("sel")
                document.getElementById('portfolio').classList.add("sel")
                document.getElementById('hbar').classList.remove("activate")
                document.getElementById('abar').classList.remove("activate")
                document.getElementById('pbar').classList.add("activate")
                document.getElementById('nav').classList.remove('navpro');
                document.getElementById('swap').classList.remove('navpro');
                document.getElementById('swapper').classList.remove('navpro');
            break;
            default:
                document.getElementById('home').classList.add("sel")
                document.getElementById('hbar').classList.add("activate")
                document.getElementById('nav').classList.add('navpro');
                document.getElementById('swap').classList.add('navpro');
                document.getElementById('swapper').classList.add('navpro');
            break;
        }
    })
  return (
    <>  
        <div className="page home" ref={homepage}>
            <Home/>
        </div>
        <div id='aboutpage' className="page about" ref={aboutpage}>
            <About/>
        </div>
        <div id='portpage' className="page portfolio" ref={portfoliopage}>
            <Portfolio/>
        </div>
        <Link to="/home" ref={home} className="hide"></Link>
        <Link to="/about" ref={about} className="hide"></Link>
        <Link to="/portfolio" ref={portfolio} className="hide"></Link>
        <label htmlFor='menu' id='clicklbl' onClick={check}></label>
        <div className='nav' id='nav' ref={nav}>
            <div className="menu" id='menu' onClick={check}>
                <div className='ham'>
                    {(()=>{
                        if(checked){
                            return <img src={ham} alt="hambutger" />
                        }else{
                            return <img src={cros} alt="hambutger" />
                        }
                    })()}
                </div>
            </div>
            <div className='navlinks' ref={navlinks}>
                <div onClick={theclick} id='home' className='link' data-page="/home"><div className='ham'><FaHome/></div><div className="active" id='hbar'></div>&nbsp;<h1>Home</h1></div>
                <div onClick={theclick} id='about' className='link' data-page="/about"><div className='ham'><FaUser/></div><div className="active" id='abar'></div>&nbsp;<h1>About</h1></div>
                <div onClick={theclick} id='portfolio' className='link' data-page="/portfolio"><div className='ham'><FaBriefcase /></div><div className="active" id='pbar'></div><h1>Products</h1></div>
            </div>
        </div>
        <Swapper/>
    </>
  )
}

export default Nav
