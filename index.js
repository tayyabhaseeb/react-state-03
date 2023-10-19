import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarList from "./StarList";
// import "./index.css";
// import App from "./App";

function RatingCont() {
  const [localRating, setLocalRating] = useState(0);
  return (
    <div>
      <StarList
        maxRating={5}
        color="red"
        size="20"
        setUserRating={setLocalRating}
      />
      <p>The rating is {localRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarList maxRating={5} />
    <StarList maxRating={10} color="red" size="20" />
    <StarList
      maxRating={5}
      color="blue"
      size="80"
      message={["poor", "bad", "average", "Good", "Excellent"]}
    /> */}
    <RatingCont />
  </React.StrictMode>
);
