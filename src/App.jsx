import React, { useCallback, useRef } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const postRef = useRef(null);

  const handleClick = useCallback(() => {
    postRef.current.scrollAndFocusAddComment();
  }, []);
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <button onClick={handleClick}>Write a comment</button>
        <Post ref={postRef} />
      </React.Suspense>
    </>
  );
}

export default App;
