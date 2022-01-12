import React from "react";
import { useState } from 'react'
import '../index.css';
import { storage } from "../firebase/config";
const Profile = () => {
  const [file,setFile] = useState(null);
  const changeHandler = (e) =>
  {
    const selected = e.target.files[0];
    if(selected)
    {
      setFile(selected);

      const storageRef = ref(storage,`/files/${file.name}`)

    }
    else{
      setFile(null);
    }
  }
  return (
    <div className="container profile">
      <div className="mt-3 piccontainer">
        <img src="logo512.png" className="image" alt="Profile-pic" width="400px" height="400px" />
        <div className="overlay">
          <div className="icon">
            <form>
              <label htmlFor="file"><i className="fa fa-camera" aria-hidden="true"></i></label>
              <input type="file" className="file" id="file" onChange={changeHandler}/>
            </form>
          </div>
        </div>
      </div><br />
      <div>
        {file && <div>{file.name}</div>}
      </div>
    </div>
  )
}

export default Profile;