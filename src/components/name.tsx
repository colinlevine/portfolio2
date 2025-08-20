import { useState, useEffect } from "react";

export default function Name() {
  const fullName = "colin levine";
  const [name, setName] = useState(" ");

  // create a useEffect that updates the name every .25 seconds on page load by adding one letter at a time

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setName(fullName.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullName]);

  return (
    <h1 className='text-9xl font-sans font-semibold text-bright-blue'>
      {name}
      <span className='font-sans text-[118px] text-[#031d442b] pl-2 animate-pulse '>
        |
      </span>
    </h1>
  )
}
