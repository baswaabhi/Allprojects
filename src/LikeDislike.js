import React from "react";

function LikeDislike(){
    const [numb, setnumb] = React.useState(0);
    const [nums, setnumbs] = React.useState(0);
    function inc() {
      setnumb(numb + 1);
    }
    function dlike() {
      setnumbs(nums + 1);
    }
  
    return (
      <div>
        <h2>like  dislike buttons</h2>
        <h1>
          {numb}&nbsp;&nbsp;&nbsp;&nbsp;{nums}
        </h1>
  
        <button onClick={inc}>
          <img
            src=" https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3021307-inline-fb-thumbsup-printpackaging.jpg"
            height="25px"
          />
        </button>&nbsp;&nbsp;&nbsp;
        <button onClick={dlike}>
          <img
            src="https://images.techhive.com/images/article/2015/11/dislike_facebook-100627022-large.jpg?auto=webp&quality=85,70"
            height="25px"
          />
        </button>
  
          </div>
    )
}
export default LikeDislike;