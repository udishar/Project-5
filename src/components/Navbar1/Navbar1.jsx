import React,{useState} from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import CommentIcon from "@mui/icons-material/Comment";
import LockIcon from "@mui/icons-material/Lock";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import style from "./Navbar1.module.css";

function Navbar1({setValue,value}) {
  
  function getStyleValue(e){
    setValue(e.target.value)

  }
  return (
    <>
      <div className={style.main}>
        <div>
          <DescriptionIcon style={{ fontSize: "3.5rem", color: "blue" }} />
        </div>
        <div className={style.innercontainer}>
          <h3>
          <input contentEditable={true} onChange={(e)=>getStyleValue(e)} value={value}
          className={style.input}
         />
          <StarBorderIcon  style={{ fontSize: "1.8rem" }}/>
          <ForwardToInboxIcon style={{ fontSize: "1.8rem" }}/>
          < CloudOffIcon style={{ fontSize: "1.8rem" }}/>

          </h3>
        
          <span className={style.filename}>
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Insert</p>
            <p>Format</p>
            <p>Tools</p>
            <p>Extensions</p>
            <p>Help</p>
          </span>
        </div>

        {/* <div className={style.innercontainer2}>
          <CommentIcon style={{ fontSize: "26", color: "gray" }} />
          <div className={style.share}>
            <p>
              <LockIcon style={{ fontSize: "15px" }} /> Share
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Navbar1;