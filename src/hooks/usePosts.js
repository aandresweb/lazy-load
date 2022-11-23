import { useEffect, useState } from "react";
import getPosts from "services/getPosts";

const DEFAULT_START = 0;
const DEFAULT_LIMIT = 10;

function usePosts({ inifiniteAdditionalPosts }) {
  const [posts, setPosts] = useState([]);
  const [inifiniteLoading, setInfiniteLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(DEFAULT_START);
  const [limit] = useState(DEFAULT_LIMIT);

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
    setStart(start + inifiniteAdditionalPosts);
  };

  return {
    posts,
    loading,
    handleInfinite,
    inifiniteLoading,
  };
}

export default usePosts;
