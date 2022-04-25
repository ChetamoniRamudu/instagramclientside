import React ,{useState,useEffect}from "react";
import { NavLink,useHistory } from "react-router-dom";
import style from "../stylingcomp/login.module.css"
export default function Login() {
  let history = useHistory();
  const [newobject,setObject]=useState({
    email:"",
    password:""
  })
  async function handler(e){
   setObject({...newobject,[e.target.name]:e.target.value})
  }
  async function handlersubmit(e){
    e.preventDefault()
    let f =false
    for(let fields in newobject){
      if(!newobject[fields]){
        alert("fill all filelds ")
        f=true
        break
      }
    }
    if(f){
      return;
    }
    const response=await fetch('http://localhost:5000/signin',{
      method:"POST",
      body:JSON.stringify(newobject),
      headers:{
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    const data= await response.json()
    //console.log(data)
    if(data.success){
      const token=data.token
      const userdata=data.user
      console.log(token)
      console.log(userdata)
      localStorage.setItem('token',token)
      localStorage.setItem('user',userdata)
      alert("user login successfully")
      window.location.href='/posts'
    }else{
      //console.log(data)
      alert("error")
  }

  }
   
  return (
    <div className={style.back}>
      <div className={style.loginheader}>
        <h1 className={style.instaname}>Instaclone</h1>
        <NavLink to={"/signup"}>
          <h4 className={style.instaenter}>Signup</h4>
        </NavLink>
      </div>
    <div className={style.loginpage}>
      <div>
    
         <h1 className={style.instatitle}>Instaclone</h1>
          <p className={style.instaaccount}>Don't Have An Account?</p>
          <NavLink to={"/signup"}>
            <button className={style.instabtn}>Register</button>
          </NavLink>
    
      </div>
      <div>
        <form onSubmit={handlersubmit}>
          <div>
            <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name="email" placeholder="Enter Email" onChange={handler} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter password" onChange={handler} />
          </div>
          <button className={style.loginbtn}>Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}
