import React, { useState } from "react";
import styleposts from "../stylingcomp/postpost.module.css";
import { NavLink } from "react-router-dom";
export default function Postpost() {
  const [newobject, setnewobject] = useState({
    title: "",
    profession: "",
    image: "",
  });
  function getToken() {
    if (window.localStorage) {
      return localStorage.getItem("token");
    }
    return "";
  }
  function handlechange(e) {
    setnewobject({ ...newobject, [e.target.name]: e.target.value });
  }
  async function handlesubmit(e) {
    e.preventDefault();
    console.log(newobject);
    let f = false;
    for (let field in newobject) {
      if (!newobject[field]) {
        alert("plese fill all fields");
        f = true;
        break;
      }
    }
    if (f) {
      return;
    }
    const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        body: JSON.stringify(newobject),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `${getToken()}`
        },
      });
  
      const data = await response.json();
      alert("successfully posted")
      window.location.href='/posts'
      console.log(data);
  }

  return (
    <div className={styleposts.mainpage}>
       <div className={styleposts.headersposting}>
        <h1 className={styleposts.nameposting} >Instaclone</h1>
        <NavLink to={"/post"}>
          <h4 className={styleposts.titleposting}>POST</h4>
        </NavLink>
      </div>
    <div className={styleposts.postcard}>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Title&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Profession</label>
          <input
            type="text"
            name="profession"
            placeholder="Enter profession"
            onChange={handlechange}
          />
        </div>
        <div>
          <label>ImageURL</label>
          <input
            type="text"
            name="image"
            placeholder="Enter URL"
            onChange={handlechange}
          />
        </div>
        <input type="submit" value="Post" />
      </form>
    </div>
    </div>
  );
}
