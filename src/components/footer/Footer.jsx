import React, { useState } from "react";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";

const Footer = ({ tabIndex }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleToggleColor = () => {
    // Increment the click count
    setClickCount((prevCount) => prevCount + 1);

    switch (clickCount % 4) {
      case 0:
        document.documentElement.classList.add("colorBis");
        document.body.classList.add("neg");
        break;
      case 1:
        document.documentElement.classList.remove("colorBis");
        break;
      case 2:
        document.documentElement.classList.remove("colorBis");
        document.body.classList.remove("neg");
        break;
      case 3:
        document.documentElement.classList.add("colorBis");
        document.body.classList.remove("neg");
        break;
      default:
        break;
    }
  };

  return (
    <footer className='app-footer' data-v-2819df48=''>
      <div className='grid-padding' data-v-2819df48=''>
        <div className='drawLine say' data-v-2819df48=''>
          <FooterTitle />
        </div>
        <div className='drawLine data' data-v-2819df48=''>
          <p data-v-2819df48=''>
            <br data-v-2819df48='' />
          </p>
          <p className='last' data-v-2819df48=''>
            Made by <br data-v-2819df48='' />
            <FooterLink
              tabIndex={tabIndex}
              url='#'
              text=''
            />
          </p>
        </div>
        <button
          aria-label='Toggle color'
          data-v-2819df48=''
          tabIndex={tabIndex}
          onClick={handleToggleColor}
        >
          <svg
            className='footer-logo'
            width='1400'
            height='412'
            viewBox='0 0 1400 412'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            data-v-2819df48=''
          >
            <path
              d='M0.542 0.119995H163.87L206.366 43.128V171.64L173.598 204.408L206.366 237.688V379H139.806V245.368L122.398 228.472H67.102V379H0.542V0.119995ZM121.886 179.832L139.806 162.424V60.536L127.518 48.76H67.102V179.832H121.886ZM420.986 271.992H340.09L324.218 379H261.242L324.218 0.119995H439.418L502.394 379H436.858L420.986 271.992ZM413.818 222.328L388.73 48.76H373.37L347.77 222.328H413.818ZM557.042 0.119995H729.074V49.272H623.602V167.032H720.37V217.72H623.602V379H557.042V0.119995ZM777.542 0.119995H844.102V379H777.542V0.119995ZM911.042 0.119995H1081.03V48.248H977.602V157.816H1071.81V205.944H977.602V330.872H1085.63V379H911.042V0.119995Z'
              fill='currentColor'
              data-v-2819df48=''
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
