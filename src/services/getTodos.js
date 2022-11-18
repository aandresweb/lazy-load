import { API_URL } from "constants";

const getTodos = () => {
  return fetch(API_URL + "/todos")
    .then((res) => res.json())
    .then((data) => data);
};

export default getTodos;
