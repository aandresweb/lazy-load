import { useEffect, useRef, useState } from "react";

const DEFAULT_VALUES = {
  distance: "100px",
};

const useNearScreen = () => {
  const [nearFired, setNearFired] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const onChangeIntersectionObserver = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setNearFired(true);
      }
    };

    observer = new IntersectionObserver(onChangeIntersectionObserver, {
      rootMargin: "50px",
    });

    observer.observe(document.getElementById("footer"));

    return () => {
      observer && observer.disconnect();
    };
  }, []);

  const disableNearFired = () => {
    setNearFired(false);
  };

  return {
    nearFired,
    disableNearFired,
    fromRef,
  };
};

export default useNearScreen;
