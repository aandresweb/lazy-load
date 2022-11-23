import { useEffect, useRef, useState } from "react";

const DEFAULT_DISTANCE = "100px";

const useNearScreen = ({ distance = DEFAULT_DISTANCE } = {}) => {
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
      rootMargin: distance,
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
