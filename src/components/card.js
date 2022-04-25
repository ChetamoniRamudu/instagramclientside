import React,{useState} from "react";
import stylecard from "../stylingcomp/card.module.css";
export default function Card({ item }) {
    const[open,setOpen]=useState(false)
    const[newobject,setnewobject]=useState(item)
    const[Likes,setLikes]=useState(0)
    const [Dislikes,setDislikes]=useState(0)
  const { title, image, profession, _id } = newobject;
  console.log(_id);

  function getToken() {
    if (window.localStorage) {
      return localStorage.getItem("token");
    }
    return "";
  }
  const token = window.localStorage.getItem("token");
  //console.log(token);
  const handleclick = async (_id) => {
    //console.log(_id);

    try {
      const response = await fetch(`http://localhost:5000/posts/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `${getToken()}`,
        },
      });
      const data = await response.json();
      console.log(data);
      alert("successfully delete the post");
    } catch (err) {
      alert("error in deleting post");
    }
  };
  function handlechange(e) {
    setnewobject({ ...newobject, [e.target.name]: e.target.value });
  }
  async function handlesubmit(_id) {
      try{
    //e.preventDefault();
    console.log(newobject);
    // let f = false;
    // for (let field in newobject) {
    //   if (!newobject[field]) {

    //     alert("plese fill all fields");
    //     f = true;
    //     break;
    //   }
    // }
    // if (f) {
    //   return;
    // }
    const{profession}=newobject
    const response = await fetch(`http://localhost:5000/posts/${_id}`, {
        method: "PUT",
        body: JSON.stringify({profession}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `${getToken()}`
        },
      });
      const data = await response.json();
      if(data.modifiedCount>0){
      //const data = await response.json();
      alert("successfully updated")
      }
  
      console.log(data);
    }catch(err){
        console.log(err)
    }
  }

  return (
    <div className={stylecard.card}>
      <img src={image} alt={title} width="300" height="300" />
      <div className={stylecard.title}>
        <h3>{title}</h3>
        <h3>{profession}</h3>
      </div>
      <div className={stylecard.btns}>
      <button onClick={()=>setLikes(Likes+1)} className={stylecard.btn}>{Likes}Likes</button>
      <button onClick={()=>setDislikes(Dislikes+1)} className={stylecard.btn}>{Dislikes}Dislikes</button>
  
        <button className={stylecard.update}  onClick={()=>setOpen(!open)} >Update</button>
        <button onClick={() => handleclick(_id)} className={stylecard.btn}>Delete</button>
      </div>
      {open&&(<div className={stylecard.ppost}>
          <form onSubmit={handlesubmit(_id)}>
              <label>profession</label><br/>
              <input type="text" name="profession" placeholder="Update profession" onChange={handlechange}/><br/>
              <input type="submit" value="POST"/>
          </form>
      </div>)}
    </div>
  );
}
