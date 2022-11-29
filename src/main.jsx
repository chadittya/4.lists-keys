import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import NumberList, { numbers } from "./renderingMultipleComponent.service";
import NumberList, { numbers } from "./extractingComponentWithKeys.service";
import Blog, { posts } from "./keysMustUnique.service";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <NumberList numbers={numbers} /> */}
    <NumberList numbers={numbers} />
    <Blog posts={posts} />
  </React.StrictMode>
);
