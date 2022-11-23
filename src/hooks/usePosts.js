import { useEffect, useState } from "react";
import getPosts from "services/getPosts";
import useInfiniteScroll from "./useInfiniteScroll";

const DEFAULT_START = 0;
const DEFAULT_LIMIT = 10;

function usePosts({ inifiniteAdditionalPosts }) {
  const [posts, setPosts] = useState([]);
  const [inifiniteLoading, setInfiniteLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(DEFAULT_START);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  // const { handleInfiniteScroll, infiniteScrollLoading } = useInfiniteScroll();

  let FETCH_OPTIONS = {
    start,
    limit,
  };

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (start > DEFAULT_START) {
      fetchMerge();
    }
  }, [start]);

  const fetchPosts = (fetchinOptions = FETCH_OPTIONS) => {
    getPosts({ ...FETCH_OPTIONS, ...fetchinOptions }).then((data) => {
      setPosts(data);
    });
  };

  const loadPosts = () => {
    setLoading(true);
    getPosts(FETCH_OPTIONS).then((data) => {
      setLoading(false);
      setPosts(data);
    });
  };

  const fetchMerge = () => {
    setInfiniteLoading(true);
    getPosts({ ...FETCH_OPTIONS, limit: inifiniteAdditionalPosts }).then(
      (data) => {
        setInfiniteLoading(false);
        setPosts([...posts, ...data]);
      }
    );
  };

  const handleInfinite = () => {
    // handleInfiniteScroll();
    // setStart(start + inifiniteAdditionalPosts);
  };

  return {
    posts,
    fetchPosts,
    loading,
    handleInfinite,
    inifiniteLoading,
  };
}

export default usePosts;
