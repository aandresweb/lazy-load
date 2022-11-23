import { API_URL } from "constants";

const getPosts = ({ start = 0, limit = 10 }) => {
  return fetch(API_URL + "/posts?_start=" + start + "&_limit=" + limit)
    .then((res) => res.json())
    .then((data) => data);
};

export default getPosts;
