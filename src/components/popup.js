import Recat ,{useState}from "react";
import '../stylingcomp/popup.css'
export default function Popup() {
    const[update,setUpadte]=useState({
        profession:""
    })
    async function Updateclick(e){
        setUpadte({...update,[e.target.name]:e.target.value})

    }
    async function Updateonsubmit(e){
        e.preventDefault()
        let f =false
    // for(let fields in newobject){
    //   if(!newobject[fields]){
    //     alert("fill all filelds ")
    //     f=true
    //     break
    //   }
    // }
    // if(f){
    //   return;
    // }


    }
  return (
    <>
      <div className='modal'>
        <form onSubmit={Updateonsubmit}>
          <label>profession</label>
          <br />
          <input type="text" name="profession" placeholder="Enter profession" onChange={Updateclick}/><br/>
          <input type="submit"/>
        </form>
      </div>
    </>
  );
}
