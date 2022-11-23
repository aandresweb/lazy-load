import PostCard from "components/PostCard";
import useInfiniteScroll from "hooks/useInfiniteScroll";
import useNearScreen from "hooks/useNearScreen";
import usePosts from "hooks/usePosts";
import React from "react";
import "./index.css";

function Root() {
  const { nearFired, disableNearFired } = useNearScreen();
  const { posts, fetchPosts, loading, handleInfinite, inifiniteLoading } =
    usePosts({
      inifiniteAdditionalPosts: 10,
    });

  const { handleInfiniteScroll } = useInfiniteScroll({
    fetching: fetchPosts,
  });

  if (nearFired) {
    handleInfiniteScroll();
    // handleInfinite();
    disableNearFired();
  }

  return (
    <div className="app">
      <div className="wrapper">
        <div className="mt-xlarge">
          <p className="title text-center mb-large">Lazy load</p>
          <p className="text text-center wrapper mb-xlarge">
            Welcome to my project where i'm practicing use Lazy loading
            components using <b>Suspense</b> and <b>Lazy</b> react
            functionalities, i'm so happy you are here becaure you are part of
            my learning now 🤍
          </p>
          <div className="posts">
            {loading ? (
              <p className="text text-center">Loading</p>
            ) : (
              <div className="posts-layout">
                {posts.map((post, index) => (
                  <PostCard key={index} post={post} />
                ))}
              </div>
            )}
            {inifiniteLoading && (
              <p className="text text-center mt-xlarge">
                Loading more posts...
              </p>
            )}
          </div>
        </div>
        <footer id="footer" className="mt-xlarge mb-large">
          <p className="text text-center">Made with love 🤍</p>
        </footer>
      </div>
    </div>
  );
}

export default Root;
