import { useEffect, useState } from "react";

export const useInView = (ref, options = {}) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; 
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); 
      }
    };
  }, [ref, options]);

  return inView;
};
