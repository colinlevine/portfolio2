import { useEffect } from 'react';

// Adds `.active` to matching elements (default `.reveal`) as they scroll into view.
export default function useReveal(selector = '.reveal') {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(selector).forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector]);
}
