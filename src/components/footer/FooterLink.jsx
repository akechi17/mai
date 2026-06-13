import React, { useState } from "react";

const FooterLink = ({ url, text, tabIndex }) => {
  const [isScrollButtonHovered, setIsScrollButtonHovered] = useState(false);

  const handleScrollButtonHover = () => {
    setIsScrollButtonHovered(true);
    setTimeout(() => {
      setIsScrollButtonHovered(false);
    }, 200);
  };

  return (
    <a
      href={url}
      aria-label={text}
      className={`${isScrollButtonHovered ? "on" : ""}`}
      data-v-2819df48=''
      data-v-39d6bdbe=''
      tabIndex={tabIndex}
      onMouseEnter={handleScrollButtonHover}
    >
      <span data-v-39d6bdbe=''>
        <span className='translate' data-v-39d6bdbe=''>
          <span data-v-39d6bdbe=''>{text}</span>
          <span data-v-39d6bdbe=''>{text}</span>
        </span>
      </span>
    </a>
  );
};

export default FooterLink;
