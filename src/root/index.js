import React, { useEffect } from "react";
import getTodos from "services/getTodos";

function Root() {
  useEffect(() => {
    getTodos().then((data) => console.log(data));
  }, []);

  return (
    <div className="app">
      <div className="wrapper">
        <div className="mt-xlarge">
          <p className="title text-center">Lazy load</p>
        </div>
      </div>
    </div>
  );
}

export default Root;
