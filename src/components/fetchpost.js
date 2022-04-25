import React, { useState, useEffect } from "react";
import { NavLink,useLocation,useHistory} from "react-router-dom";
import stylepost from "../stylingcomp/fetchpost.module.css"
import Popup from "./popup";
import Card from './card'
export default function Fetchpost() {
  const [post, setPost] = useState([]);
  let history = useHistory();
  // const location =useLocation()
  // useEffect(() => {
  //   console.log(location)
    
  //  }, [location])
  
  //let user=localStorage.getItem('token')

function logout(){
  localStorage.setItem('token',"")
}

  function getToken(){
    if(window.localStorage){
      return localStorage.getItem("token")
    }
    return ""
  }
 const token=window.localStorage.getItem('token')
// console.log(token)
 useEffect(() => {
    fetch("http://localhost:5000/posts", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `${getToken()}`

      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.posts);
        setPost(data.posts)
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    let user=localStorage.getItem('token')
    if(!user){
    history("/")}
  
  
  }, );
  
  return (
    <div className={stylepost.Postcard}>
      <div className={stylepost.instapostheader}>
        <h1 className={stylepost.postname}>Instaclone</h1>
        <NavLink  to={"/postspost"}>
          <h4 className={stylepost.postpost}>POST</h4>
          
        </NavLink>
        <NavLink  className={stylepost.li} to={"/"} onClick={logout}>Logout</NavLink>
      </div>
    <div className={stylepost.vcard}>
      {post.map((item) => {
        const { title, profession, image ,_id} = item;
        return (
         <>
         <Card key={_id} item={item}/>
         
         </>
        );
      })}
    </div>
    </div>
  );
}
