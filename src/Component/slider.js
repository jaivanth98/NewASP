import React, { useState, useEffect, useRef } from "react";
import "./slider.css";
import sample from "./Assests/Arthritis.jpg";
import profile from './Assests/Login.png'

const colors = [ 
  {
    star:<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>,
    name:"Sudarkani .J",
    content: "This is one of the best clinic in Chennai Here there is advanced treatment like Shockwave and Laser which cured my neck pain within 10 sittings.Dr.Bharath sir taught the exercises very clearly" 
  },
  {
    star:<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>,
    name:"Arun Kumar",
    content:
      "Best place for Physio treatment, I undergone few treatments for my neck pain,  achilles tendon, knee swelling and also for my back pain, I Got gud result for all the above treatments. they also gave gud feedback to me..",
  },
  {
    star:<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>,
    name:"Sadhana B",
    content:
      "In this clinic they have special treatments like shock wave treatment, laser etc which is very useful. Doctor is much caring to the patients in consulting, diagnosing & treating the patients.",
  },
];
const delay = 2500;
function Slideshow() { 
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            // style={ backgroundColor.colorr }
          >
            <img src={profile} height="80px"></img>
            <div className="asp-slider">
              {backgroundColor.name}
              {backgroundColor.star}
              <p style={{whiteSpace:"normal"}}>{backgroundColor.content}</p>
            </div>
          </div>
        ))}
        
      </div>
      <div className="slideshowDots">
        {colors.map((item, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
