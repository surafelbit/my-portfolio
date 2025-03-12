import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "React Enthusiast", "MERN Stack Learner"], // Change text here
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true, // Infinite loop
    });

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return <span ref={typedRef} style={{ color: "cyan", fontSize: "24px" }} />;
};

export default TypedText;
