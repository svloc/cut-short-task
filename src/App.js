import React, { useState } from "react";
import "./style.css";

export default function App() {
 const [name,setName]=useState("");
 const [displayName,setDisplayName]=useState("");
 const [secondIcon,setSecondIcon]=useState(false);
 const [thirdIcon,setThirdIcon]=useState(false);
 const [fourthicon,setfourthicon]=useState(false)
 const [one,setOne]=useState(true);
 const [two,setTwo]=useState(false);
 const [three,setThree]=useState(false);
 const [four,setFour]=useState(false);

 const handleName=(e)=>{
  setName(e.target.value);
 }
 const handleDisplayName=(e)=>{
  setDisplayName(e.target.value);
 }

 const handleSubmit=(e)=>{
  e.preventDefault();
  setSecondIcon(true);
 }

 const form_hide_show=(str)=>{
  console.log(str);
  switch(str){
    case 'one':
      setOne(true);
      setTwo(false);
      setThree(false);
      setFour(false);
      break;
    case 'two':
      setOne(false);
      setTwo(true);
      setThree(false);
      setFour(false);
      setSecondIcon(true);
      break;
    case 'three':
      setOne(false);
      setTwo(false);
      setThree(true);
      setFour(false);
      setThirdIcon(true)
      break;
    case 'four':
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(true);
      setfourthicon(true);
      break;   
      default:break;   
  }
 }

  return (
    <div className="d-flex justify-content-center align-items-center w-100 height-100vh">
     <div className="container d-flex justify-content-center align-items-center bg-white"> 
     <div className="first flex-direction-col d-flex justify-content-center align-items-center">
      <div className="d-flex"><img src="../logo.svg" alt="logo-img" className="logo-img"/>
      <span className="logo-text">Eden</span> </div>
      <div className="number d-flex align-items-center w-100 justify-content-space-around">
       <div className="d-flex align-items-center w-100 ">

        <div className="step-icon d-flex align-items-center justify-content-center bg-blue-icon">1</div>
        <div className={"line "+(secondIcon ? " bg-blue-line-full" :" bg-blue-line-half")}></div>

        <div className={"step-icon d-flex align-items-center justify-content-center "+(secondIcon && " bg-blue-icon")}>2</div>
        <div className={"line"+ (two  ? " bg-blue-line-half ":" bg-blue-line-full")}></div>
        
        <div className={"step-icon d-flex align-items-center justify-content-center "+(thirdIcon && "bg-blue-icon")}>3</div>
        <div className={"line"+ (three ? " bg-blue-line-half ":" bg-blue-line-full")}></div>
        
        <div className={"step-icon d-flex align-items-center justify-content-center "+(fourthicon && " bg-blue-icon")}>4</div>
       </div>
      </div>
      {one && <>
      <h2><strong>Welcome! First things first..</strong></h2>
      <p>You can always change them later</p>
      <form className="input-container d-flex m-auto justify-content-center" onSubmit={handleSubmit}>
        <div className="input-label"><strong>Full Name</strong> </div>
        <input className='form-input w-100 ' onChange={handleName} value={name} placeholder="Sachin Lokare"/>
        
        <div className="input-label"><strong>Display Name</strong> </div> 
        <input className='form-input w-100 ' onChange={handleDisplayName} value={displayName} placeholder='Sachin'/>
        <button className="btn btn-blue" onClick={()=>form_hide_show('two')} type='submit'>Create Workspace</button>
      </form>
      </>}

      {two&& <>
      <h2><strong>Let's set a home for all your work</strong></h2>
      <p>You can always create another workspace later</p>
      <form className="input-container d-flex m-auto justify-content-center" onSubmit={handleSubmit}>
        <div className="input-label"><strong>Workspace Name</strong> </div>
        <input className='form-input w-100 ' onChange={handleName} value={name} placeholder="Sachin Lokare"/>
        
        <div className="input-label"><strong>Workspace Url</strong><small> (optional)</small>  </div> 
        <input className='form-input w-100 ' onChange={handleDisplayName} value={displayName} placeholder='Sachin'/>
        <button className="btn btn-blue" onClick={()=>form_hide_show('three')} type='submit'>Create Workspace</button>
      </form>
      </>
      }

      {three&& <>
      <h2><strong>How are you planning to use Eden?</strong></h2>
      <p>we'll streamline your setup experience accordingly</p>
      <form className="input-container d-flex m-auto justify-content-center w-90" onSubmit={handleSubmit}>
        <div className="img-container">
          <div className="img-box">
            <img src="../user.svg" alt="user-img"/>
            <p><strong>For Myself</strong></p>
            <p>Write better. Think more clearly. stay organized</p>
          </div>
          <div className="img-box">
            <img src="../groups.svg" alt="groups-img" />
            <p><strong>With My team</strong></p>
            <p>Wikis docs task and project, all in one place</p>
          </div>
        </div>
        <button className="btn btn-blue" onClick={()=>form_hide_show('four')} type='submit'>Create Workspace</button>
      </form>
      </>
      }
      
      {four&&<>
      <div className="check">
        <img src="../check.svg" alt="check-img" className="check-img" />
      </div>
      <h2><strong>Congratulations, Eren!</strong></h2>
      <p>You have completed onbording, you can start using the Eden!</p>
      <form className="input-container d-flex m-auto justify-content-center" >
        <button className="btn btn-blue" onClick={()=>form_hide_show('one')}>Launch Eden</button>
      </form>
      </>
      }
     </div>
     </div>
    </div>
  );
}
