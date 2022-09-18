import React, { useState,useRef } from "react";
import "./Asp.css";
import logo from "./Assests/logo.png";
import sideImage from "./Assests/sideImage.jpg";
import img1 from './Assests/htb1.png'
import img2 from './Assests/htb2.png'
import img3 from './Assests/htb3.png'
import img4 from './Assests/ww1.png'
import img5 from './Assests/ww2.png'
import img6 from './Assests/ww3.png'
import neckPain from './Assests/download (1).png'
import emailjs from '@emailjs/browser';
import elbow from './Assests/elbowPAin.jpg'
import backPain from './Assests/BackPain.jpg'
import Knee from './Assests/kneePain.jpg'
import joint from './Assests/jointPain.jpg'
import Arthritis from './Assests/Arthritis.jpg'
import Spondylitis from './Assests/Spondylitis.jpg'
import shoulder from './Assests/shoulder.jpg'
import post_surgical from './Assests/post surgical.jpg'
import knee_replace from './Assests/knee-replace.png'
import reguler from './Assests/regular.jpg'
import neuro from './Assests/neuuro.jpg'
import sportInjury from './Assests/sportsInjury.jpg'

function NewAspPage() {
  const form = useRef();
  const handleSubmit = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_3j0t1kg', 'template_tm2icb6', form.current, 'jdMaf6QPsGWpiFB4K')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <>
      <div className="asp-container">
        <div className="asp-header d-flex justify-content-between">
          <div className="asp-logo">
            <img src={logo} width="150px"></img>
          </div>
          <div className="mt-5">
            <div className="btn asp-btn-location me-3">
              <i class="fa-solid fa-location-dot"></i> Location
            </div>
            <div className="btn asp-btn-cell me-3">
              <i class="fa-solid fa-phone"></i> 8825741271
            </div>
            <div className="btn asp-btn-whatsapp me-3">
            <i class="fa-solid fa-globe"></i> Health Care
            </div>
          </div>
        </div>
        <div className="asp-sub-header">
          <div className="asp-ImageForMobile">
          </div>
          <div className="asp-sub-header-content ">
            Expert Physiotherapists at your Doorstep in Chennai
          </div>
          <div className="asp-sub-header-form  mt-3">
            <form ref={form} className="asp-form" onSubmit={handleSubmit}>
              <input
                type={"text"}
                className="asp-input mb-3"
                placeholder="Name"
                name="fname"
                required
              ></input>
              <input
                type={"number"}
                className="asp-input mb-3"
                placeholder="Phone Number"
                name="phoneNumber"
                required
              ></input>
              <input
                type={"email"}
                className="asp-input mb-3"
                placeholder="Email"
                name="email"
                required
              ></input>
              <select className="asp-input mb-3" name="option">
                <option>Select Gender</option>
                <option>male</option>
                <option>Female</option>
              </select>
              <br></br>
              <input type="checkbox" className="pt-2 me-2"></input>
              <span>
                I agree that Asp Homecare representative can contact me over
                call ,SMS, and Email.
              </span>
              <br></br>
              <button className="btn asp-btn-book mt-4">
                BOOK A PHYSIOTHERAPY
              </button>
            </form>
          </div>
        </div>
        <div className="asp-benefit-content ">
          <div className="asp-side1">
            <img src={sideImage}></img>
          </div>
          <div className="asp-side2">
            <h4>Who Can Benefit?</h4>
            <h5>
              Any person from any age group can be treated with the help of
              physiotherapy and one can see unbelievable speed of recovery too.
              But the question arises, “what kind of patients can Physiotherapy
              treat?”{" "}
            </h5>
            <ul>
              <li>Patients recovering from injuries</li>
              <li>Post joint replacement surgeries</li>
              <li>Post heart surgeries</li>
              <li>Post abdominal surgery</li>
              <li>Elderly with mobility issues</li>
              <li>Neurological disorders like stroke, Parkinsonism</li>
              <li>Cerebral Palsy</li>
            </ul>
          </div>
        </div>
        <div className="asp-choose">
          <div className="asp-choose-side1">
            <h5>How To Book Physiotherapy At Home</h5>
            <div className="asp-card">
              <div className="ms-3">
                <img src={img1} width="80px"></img>
                <p>Free Video Assessment</p>
              </div>
              <div className="ms-3">
                <img src={img2} width="80px"></img>
                <p>Book A Physiotherapist At Home</p>
              </div>
              <div className="ms-3">
                <img src={img3} width="80px"></img>
                <p>Get Physiotherapy Care Plan</p>
              </div>
            </div>
          </div>
          
          <div className="asp-choose-side2">
            <h5>Why Choose Us</h5>
            <div className="asp-card">
              <div className="ms-3">
              <img src={img4} width="80px"></img>
                <p>Free Video Assessment</p>
              </div>
              <div className="ms-3">
                <img src={img5} width="80px"></img>
                <p>Book A Physiotherapist At Home</p>
              </div>
              <div className="ms-3">
                <img src={img6} width="80px"></img>
                <p>Get Physiotherapy Care Plan</p>
              </div>
            </div>
          </div>
        </div>
        <div className="asp-need">
        <h4 className="pb-3">when you need us the most?</h4>
        <div className="asp-need-container">
            <div className="asp-need-card">
                <img src={neckPain} className="mt-3" height="80px"></img>
                <h5 className="mt-4">shoulder</h5>
            </div>
            <div className="asp-need-card">
                <img src={elbow} className="mt-3" height="80px"></img>
                <h5 className="mt-4">Elbow Pain</h5>
            </div>
            <div className="asp-need-card">
                <img src={backPain} className="mt-3" height="80px"></img>
                <h5 className="mt-4">BackPain</h5>
            </div>
            <div className="asp-need-card">
                <img src={Knee} className="mt-3" height="80px"></img>
                <h5 className="mt-4">KneePain</h5>
            </div>
            <div className="asp-need-card">
                <img src={joint} className="mt-3" height="80px"></img>
                <h5 className="mt-4">JointPain</h5>
            </div>
            <div className="asp-need-card">
                <img src={Arthritis} className="mt-3" height="80px"></img>
                <h5 className="mt-4">Arthritis</h5>
            </div>
            <div className="asp-need-card">
                <img src={Spondylitis} className="mt-3" height="80px"></img>
                <h5 className="mt-4">Spondylitis</h5>
            </div>
            <div className="asp-need-card">
                <img src={shoulder} className="mt-3" height="80px"></img>
                <h5 className="mt-4">Frozen Shoulder</h5>
            </div>
        </div>
        </div>
        <div className="asp-physio">
          <h4 className="pt-3 pb-3">Advanced physio care at home</h4>
          <div className="asp-physio-care">
          <div className="asp-need-card">
                <img src={post_surgical} className="mt-3" height="80px"></img>
                <h5 className="mt-4">post surgical</h5>
            </div>
            <div className="asp-need-card">
                <img src={knee_replace} className="mt-3" height="80px"></img>
                <h5 className="mt-4">knee_replace</h5>
            </div>
            <div className="asp-need-card">
                <img src={reguler} className="mt-3" height="80px"></img>
                <h5 className="mt-4">reguler</h5>
            </div>
            {/* </div>
            <div className="asp-physio-care"> */}
            <div className="asp-need-card">
                <img src={neuro} className="mt-3" height="80px"></img>
                <h5 className="mt-4">neuuro</h5>
            </div>
            <div className="asp-need-card">
                <img src={sportInjury} className="mt-3" height="80px"></img>
                <h5 className="mt-4">sportInjury</h5>
            </div>
            <div className="asp-need-card">
                <img src={sportInjury} className="mt-3" height="80px"></img>
                <h5 className="mt-4">sportInjury</h5>
            </div>
          </div>
        </div>
        <div className="asp-footer">
          <div className="asp-footer-end"><div>For Book Doctor Visits</div>&nbsp;&nbsp;
         <div>  <i class="fa-solid fa-phone"></i> :&nbsp; 8874959456</div>
         </div>
         <div className="asp-footer-end">
          <div> <p>For Customer Support & Feedback : </p></div>
         <div>&nbsp;
          {" "}
         <i class="fa-brands fa-instagram"></i>{"  "}&nbsp;
          <i class="fa-brands fa-youtube"></i>{" "}&nbsp;
          <i class="fa-brands fa-facebook"></i>
         </div>
        </div>
     <div className="asp-footer-btn mb-3">
     <a className="asp-a" href="tel:8825741271"><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp; 8825741271</a>
     </div>
        </div>
      </div>
    </>
  );
}

export default NewAspPage;
