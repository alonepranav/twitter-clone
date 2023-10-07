import React, { useState } from "react";
import p from "../data/posts.json";
import VideoPost from "./VideoPost";
import PhotoPost from "./PhotoPost";

export default function HomePostComponent() {
  const [post, setPost] = useState([...p]);

  return (
    <>
      {post.map((a, i) => {
        return a.type === "video" ? (
          <VideoPost key={i} {...{ ...a, i, post,setPost }} />
        ) : (
          <PhotoPost key={i} {...{ ...a, i }} />
        );
      })}

      {/* {[..."1234".split("")].map((a, i) => {
        return <VideoPost key={i} i={i} />;
      })} */}
    </>
  );
}
