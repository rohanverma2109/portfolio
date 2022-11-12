import React from 'react'
import { useState } from 'react'
import pdf from '../Media/MyResume.pdf'
import rohan from '../Media/rohan.jpg'
import web1 from '../Media/iframe1.jpg'
import web2 from '../Media/iframe2.jpg'
import '../css/about.css'
import { useEffect } from 'react'
import {FaInstagram,FaDownload,FaCalendarAlt } from 'react-icons/fa'
import { BsCircle } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
const About = () => {
  var [link,setlink]=useState(null);
  var [map,setmap]=useState('college');
  var lomap=(e)=>{
    setmap(e.target.closest('li').dataset.id);
  }
  window.onbeforeunload=()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    fetch(pdf).then(response => {
            response.blob().then(blob => {
             const fileURL = window.URL.createObjectURL(blob);
             setlink(fileURL);
            })
        })
  })
  return (
  <>
  <div className="about">
    <div className="apage">
    <br />
        <h1>About Me.</h1>
        <p>I CODE AND DESIGN AMAZING THINGS, AND I LOVE WHAT I DO.</p>
        <div className='mydata'>
          <div className="myimage">
            <img className='rohanimg' src={rohan} title="Rohan Verma" alt="Rohan Verma" />
          </div>
          <div className="info">
            <div className="biodata mydata">

              <br />
              <h3>PERSONAL DETAILS</h3>
              <div id='list'>
                <div>
                  <h6><span>First Name </span>Rohan</h6>
                  <h6><span>Last Name </span>Kumar</h6>
                  <h6><span>Age </span>21</h6>
                  <h6 id='mail'><span>Email </span>verma.rohan1231@gmail.com</h6>
                </div>
                <div>
                  <h6><span>Phone </span>+91 9056742109</h6>
                  <h6><span>D.O.B. </span>06 Sep 2001</h6>
                  <h6><span>Address </span>SAS Nagar Mohali</h6>
                  <h6><span>Github </span>@rohanverma2109</h6>
                </div>
              </div>
              
              <div className="frame">
                <div className="con">
                  <a href="https://www.instagram.com/_verma_rohan_/" rel='noopener noreferrer' target='_blank' className='btn hbtn1'><FaInstagram/>&nbsp;&nbsp;follow</a>
                </div>
                <div className="con">
                  <a download='MyResume.pdf' href={link} className='btn hbtn2'><FaDownload/>&nbsp;Download CV</a>
                </div>
              </div>

            </div>
          </div>
        </div>
          <br />
          <br />
          <br />
          <h2>CONCEPTS COVERED</h2>
          <br />
          <br />
      <div className='mydata'>
        <div className="mydata concepts">
          <ul>
            <li>
              <BsCircle className='crl'/>
             <h3>REACT ROUTER<br /><span>Basic Knowledge of using React router</span></h3><br />
            </li>
            <li>
              <BsCircle className='crl'/>
              <h3>AXIOS<br /><span>Using Axios get, post, put, delete requests to fetch data from api</span></h3><br />
            </li>
            <li>
              <BsCircle className='crl'/>
              <h3>BASIC HOOKS CONCEPTS<br /><span>Basic understanding of using React useState, useEffect, useRef hooks</span></h3><br />
            </li>
            <li>
              <BsCircle className='crl'/>
              <h3>SCROLL CONTROLLED ANIMATIONS<br /><span>Animations progress based on scrollbar position</span></h3><br />
            </li>
            <li>
              <BsCircle className='crl'/>
              <h3>EMBED MAP<br /><span>Using Google Maps Api to embed map and add custom marker on it in javascript</span></h3><br />
            </li>
            <li>
              <BsCircle className='crl'/>
              <h3>FETCH NEAREST LOCATIONS<br /><span>Fetch nearest locations from current location using google Api in javascript</span></h3><br />
            </li>
          </ul>

          <ul>
            <li>
              <BsCircle className='crl'/>
              <h3>DESIGN FROM PSD/FIGMA<br /><span>Create and animate designs inspired from Photoshop and Figma</span></h3><br />
            </li>
            <li>
              <BsCircle className='crl'/>
              <h3>CRUD IN PHP<br /><span>Basic CRUD application using MySql database in PHP</span></h3><br />
            </li>
            <li>
              <BsCircle className='crl'/>
              <h3>LOGIN/ SIGNUP IN PHP<br /><span>Basic Login/ Signup Form using PHP and MySql database</span></h3><br />
            </li>
            <li>
              <BsCircle className='crl'/>
              <h3>LOGIN/ SIGNUP IN REACT<br /><span>Login/ Signup form in React js with PHP api and Mysql database</span></h3><br />
            </li>
            <li>
              <BsCircle className='crl'/>
              <h3>CREATING A PHP API<br /><span>Creating a basic Api using PHP and MySql for get, post, put and delete requests</span></h3><br />
            </li>
            <li>
              <BsCircle className='crl'/>
              <h3>SHOPPING CART IN PHP<br /><span>Creating a basic model of shopping cart in PHP</span></h3><br />
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <h2>Skills</h2>
      <br />
      <div className="skills">
        <div className="skill">
            <h2>React Js</h2>
          <div className='tipcont react'>
            <div className="tip" >60%</div>
          </div>
          <div className="bar"><div className="percent react"></div></div>
        </div>
        <div className="skill">
            <h2>Javascript</h2>
          <div className='tipcont javascript'>
            <div className="tip" data-id='70%'>80%</div>
          </div>
          <div className="bar"><div className="percent javascript"></div></div>
        </div>
        <div className="skill">
            <h2>PHP</h2>
          <div className='tipcont php'>
            <div className="tip">65%</div>
          </div>
          <div className="bar"><div className="percent php"></div></div>
        </div>
        <div className="skill">
            <h2>MySql</h2>
          <div className='tipcont mysql'>
            <div className="tip">75%</div>
          </div>
          <div className="bar"><div className="percent mysql"></div></div>
        </div>
        <div className="skill">
            <h2>Jquery</h2>
          <div className='tipcont jquery'>
            <div className="tip">80%</div>
          </div>
          <div className="bar"><div className="percent jquery"></div></div>
        </div>
        <div className="skill">
            <h2>AJAX</h2>
          <div className='tipcont ajax'>
            <div className="tip">90%</div>
          </div>
          <div className="bar"><div className="percent ajax"></div></div>
        </div>
        <div className="skill">
            <h2>HTML</h2>
          <div className='tipcont html'>
            <div className="tip">90%</div>
          </div>
          <div className="bar"><div className="percent html"></div></div>
        </div>
        <div className="skill">
            <h2>CSS</h2>
          <div className='tipcont css'>
            <div className="tip">80%</div>
          </div>
          <div className="bar"><div className="percent css"></div></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>EDUCATION</h2>
      <div className='mydata final'>

      <div className='map'>
        {(()=>{
          if(map==='college'){
            return <iframe title='college' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.2743989459386!2d76.71128479054815!3d30.738792893234347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee1574407563%3A0x2f930474d4af78d2!2sGovernment%20College%20Mohali!5e0!3m2!1sen!2sin!4v1667919808455!5m2!1sen!2sin"></iframe>
          }else if(map==='twelve'){
            return <iframe title='sr school' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.8497556185976!2d76.76407601446047!3d30.6945030945265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec6839b5f8f7%3A0x4a63654a5c82f6e2!2sGovernment%20Model%20Senior%20Secondary%20School!5e0!3m2!1sen!2sin!4v1667919987003!5m2!1sen!2sin"></iframe>
          }else if(map==='ten'){
            return <iframe title='high school' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.9621259875594!2d76.72380931446041!3d30.691341694678673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee9890bc6ced%3A0x970ffe0cf334ac67!2sStar%20Public%20School!5e0!3m2!1sen!2sin!4v1667916630216!5m2!1sen!2sin"></iframe>
          }
        })()}
        </div>

        <div className="edu">
          <br />
          <li data-id='college' onClick={lomap} className={(()=>{if(map==='college'){return 'seloc'}else{return ''}})()}>
            <h4><span><FaCalendarAlt/> 2018-2021</span> - Bachelor of Arts</h4>
            <h3><span><SlLocationPin/>Govt. College Mohali <br /></span></h3>
          </li>
          <br />
          <li data-id='twelve' onClick={lomap} className={(()=>{if(map==='twelve'){return 'seloc'}else{return ''}})()}>
            <h4><span><FaCalendarAlt/> 2017-2018</span> - C.B.S.E. +2</h4>
            <h3><span><SlLocationPin/>GMSSS Sector-47 D Chandigarh <br /></span></h3>
          </li>
          <br />
          <li data-id='ten' onClick={lomap} className={(()=>{if(map==='ten'){return 'seloc'}else{return ''}})()}>
            <h4><span><FaCalendarAlt/> 2016-2017</span> - P.S.E.B. 10th</h4>
            <h3><span><SlLocationPin/>Star Public School Sector-69 Mohali<br /></span></h3>
          </li>
          <br />
        </div>
    </div>
    <div>
        </div>
    <br />
    <br />
          <h2>MY OTHER WORKS</h2>
          <br/>
          <div className="work">
            <a href="https://rohantestapp.netlify.app/" rel='noopener noreferrer' target='_blank' className='other' id='frame1'>
              <img src={web2} alt="testapp1" />
            </a>
            <a href="https://rohantestapp2.netlify.app/" rel='noopener noreferrer' target='_blank' className='other' id='frame2'>
              <img src={web1} alt="testapp1" />
            </a>
          </div>
          <br />
          <br />
          .
      </div>
  </div>
  </>
  )
}

export default About