import React,{useState} from "react";
import styles from "../stylingcomp/register.module.css"
import { NavLink } from "react-router-dom";
export default function Register() {
    const [newobject,setObject]=useState({
        name:"",
        phone:"",
        email:"",
        password:""
    })
async function handler(e){
    setObject({...newobject,[e.target.name]:e.target.value})
}
async function handlersubmit(e){
    e.preventDefault()
    console.log(newobject)
    let f=false
    for(let fields in newobject){
        if(!newobject[fields]){
            alert(" please fill all fields or User already exist try another email")
            f=true
            break
        }
    }
    if(f){
        return;
    }
    if(Number(newobject.phone)*1>0){
        const response= await fetch('http://localhost:5000/signup',{
            method:"POST",
            body:JSON.stringify(newobject),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        const data=response.json()
        console.log(data)
        alert("user successfully register")
        window.location.href = "/signin"
    }else{
        alert("phone number must be Number")
    }
}
  return (
    <div className={styles.reggg}>
       <div className={styles.regheader}>
        <h1 className={styles.reginstaname}>Instaclone</h1>
        <NavLink to={"/signin"}>
          <h4 className={styles.reginstaenter}>Signin</h4>
        </NavLink>
      </div>
    <div className={styles.mainregpage}>
      <div className={styles.regpage}>
        <form onSubmit={handlersubmit}>
          <div>
            <label>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input  className={styles.fields} type="text" name="name" placeholder="Enter Name"  onChange={handler} />
          </div>
          <div>
            <label>PhoneNO &nbsp;&nbsp;</label>
            <input  className={styles.fields}   type="text" name="phone" placeholder="Enter phone number" onChange={handler} />
          </div>
          <div>
            <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input  className={styles.fields}   type="text" name="email" placeholder="Enter Email" required onChange={handler}/>
          </div>
          <div>
            <label>Password &nbsp;&nbsp;&nbsp;</label>
            <input  className={styles.fields} type="password" name="password" placeholder="Enter Password"  onChange={handler}/>
          </div>
          <button className={styles.btn}>Register</button>
        </form>
      </div>
    </div>
    </div>
  );
}
