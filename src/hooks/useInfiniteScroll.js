import { useEffect, useState } from "react";

const DEFAULT_START = 0;
const DEFAULT_LIMIT = 10;
const DEFAULT_INFINITE_ADDITIONAL_FETCH = 10;

function useInfiniteScroll({
  fetching = () => {},
  defaultStart = DEFAULT_START,
  defaultLimit = DEFAULT_LIMIT,
  infiniteAdditionalFetch = DEFAULT_INFINITE_ADDITIONAL_FETCH,
} = {}) {
  const [start, setStart] = useState(defaultStart);
  const [infiniteScrollLoading, setInfiniteLoading] = useState(false);

  useEffect(() => {
    if (start > defaultStart) {
      fetching({
        start,
      });
    }
  }, [start]);

  const handleInfiniteScroll = () => {
    setStart(start + infiniteAdditionalFetch);
  };

  return {
    infiniteScrollLoading,
    handleInfiniteScroll,
  };
}

export default useInfiniteScroll;
