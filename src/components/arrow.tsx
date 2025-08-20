import { useState, useEffect } from 'react';

export default function Arrow() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Trigger initial reveal animation
    setTimeout(() => setHasLoaded(true), 100);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if user is at the bottom (within 100px threshold)
      const atBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsAtBottom(atBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleArrowClick = () => {
    const sections = document.querySelectorAll('section[id]');
    
    // Find the currently visible section
    let currentSectionIndex = 0;
    const viewportTop = window.scrollY;
    const viewportCenter = viewportTop + window.innerHeight / 2;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      // Check if the center of the viewport is within this section
      if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
        currentSectionIndex = i;
        break;
      }
    }

    if (isAtBottom) {
      // If at bottom (arrow pointing up), scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to next section, or scroll to bottom if in last section
      const nextSectionIndex = currentSectionIndex + 1;
      
      if (nextSectionIndex >= sections.length) {
        // If no next section, scroll to bottom
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'smooth' 
        });
      } else {
        // Navigate to next section
        const nextSection = sections[nextSectionIndex] as HTMLElement;
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <div 
      className={`fixed bottom-0 right-0 p-[16px] scale-50 animate-bounce-slow transition-all duration-700 cursor-pointer hover:scale-[0.55] ${hasLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      } ${isAtBottom ? 'rotate-180' : 'rotate-0'}`}
      onClick={handleArrowClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="93" height="112" viewBox="0 0 93 112" fill="none">
        <path d="M33.2132 13.2544L33.2132 61.262L22.6775 50.7512C17.4893 45.5754 9.066 45.5754 3.89112 50.7512C-1.29704 55.9271 -1.29704 64.3172 3.89112 69.493L46.4992 112L89.1072 69.493C91.7046 66.9084 93 63.5153 93 60.1221C93 56.729 91.7046 53.3425 89.1072 50.7512C83.9191 45.5754 75.4958 45.5754 70.3209 50.7512L59.7851 61.262L59.7851 13.2544C59.7851 5.93798 53.833 0 46.4992 0C39.1587 0 33.2132 5.93798 33.2132 13.2544Z" fill="#0066FF" />
      </svg>
    </div>
  );
}
