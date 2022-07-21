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
 const [workspaceName,setWorkspace]=useState('');
 const [workspaceUrl,setWorkspaceUrl]=useState('');
 const [feedbackText, setFeedbackText] =useState('');
 const [activeIndex,setActiveIndex]=useState('');
 const [eden,setEden]=useState(false);

 const handleName=(e)=>{
  setName(e.target.value);
 }
 const handleDisplayName=(e)=>{
  setDisplayName(e.target.value);
 }
 const handleworkspaceName=(e)=>{
  setWorkspace(e.target.value);
 }
 const handleworkspaceUrl=(e)=>{
  setWorkspaceUrl(e.target.value);
 }

 let form_data={name:'',display_name:'',workspace_name:'',workspace_url:'',planning:''}
 
const handleSubmitOne=(e)=>{
  e.preventDefault();
  if(name===''){
    setFeedbackText('Please fill Name');
    return;
   }
  else if(displayName===''){
    setFeedbackText('Please fill Display Name');
    return;
   }
  else{
    setFeedbackText('');
    setOne(false);
    setTwo(true);
    setSecondIcon(true);
  }
 }

 const handleSubmitTwo=(e)=>{
  e.preventDefault();
  if(workspaceName===''){
    setFeedbackText('Please fill Workspace Name');
    return;
   }

  else if(workspaceUrl===''){
    setFeedbackText('Please fill Workspace Url');
    return;
   }
  else{
    setFeedbackText('');
    setTwo(false);
    setThree(true);
    setThirdIcon(true)
  }
 }

 const handleSubmitThree=(e)=>{
  e.preventDefault();
  if(activeIndex==0){
    setFeedbackText('Please Select Planning');
    return;
   }
  else{
  setFeedbackText("");
  form_data.name=name;
  form_data.display_name=displayName;
  form_data.workspace_name=workspaceName;
  form_data.workspace_url=workspaceUrl;
  if(activeIndex===1){
    form_data.planning="myself";
  }
  else{
    form_data.planning="team";
  }
  console.log(form_data);
    setThree(false);
    setFour(true);
    setfourthicon(true);
  }
 }
const handleSubmitFour=(e)=>{
  e.preventDefault();
  setEden(true);
}
 const updateRadio=(i)=>{
  setActiveIndex(i);
 }
  return (
    <div className="d-flex justify-content-center align-items-center w-100 height-100vh">
     { !eden &&<div className="container d-flex justify-content-center align-items-center bg-white"> 
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
      <form className="input-container d-flex m-auto justify-content-center" onSubmit={handleSubmitOne}>
        <div className="input-label"><strong>Full Name</strong> </div>
        <input className='form-input w-100 ' onChange={handleName} value={name} placeholder="Sachin Lokare"/>
        
        <div className="input-label"><strong>Display Name</strong> </div> 
        <input className='form-input w-100 ' onChange={handleDisplayName} value={displayName} placeholder='Sachin'/>
        <button className="btn btn-blue" type='submit'>Create Workspace</button>
        {!displayName &&<p className="feedback-text">{feedbackText}</p>}
      </form>
      </>}

      {two&& <>
      <h2><strong>Let's set a home for all your work</strong></h2>
      <p>You can always create another workspace later</p>
      <form className="input-container d-flex m-auto justify-content-center" onSubmit={handleSubmitTwo}>
        <div className="input-label"><strong>Workspace Name</strong> </div>
        <input className='form-input w-100 ' onChange={handleworkspaceName} value={workspaceName} placeholder="Sachin_mission"/>
        
        <div className="input-label"><strong>Workspace Url</strong><small> (optional)</small>  </div> 
        <input className='form-input w-100 ' onChange={handleworkspaceUrl} value={workspaceUrl} placeholder='mission.com'/>
        <button className="btn btn-blue" type='submit'>Create Workspace</button>
        {!workspaceUrl &&<p className="feedback-text">{feedbackText}</p>}
      </form>
      </>
      }

      {three&& <>
      <h2><strong>How are you planning to use Eden?</strong></h2>
      <p>we'll streamline your setup experience accordingly</p>
      <form className="input-container d-flex m-auto justify-content-center w-90" onSubmit={handleSubmitThree}>
        <div className="img-container">
          <div className={"img-box "+(activeIndex==1 ? ' img-active':'')} onClick={()=>updateRadio(1)}>
            <img src="../user.svg" alt="user-img"/>
            <p><strong>For Myself</strong></p>
            <p>Write better. Think more clearly. stay organized</p>
          </div>
          <div className={"img-box "+(activeIndex==2 ? ' img-active':'')} onClick={()=>updateRadio(2)}>
            <img src="../groups.svg" alt="groups-img" />
            <p><strong>With My team</strong></p>
            <p>Wikis docs task and project, all in one place</p>
          </div>
        </div>
        <button className="btn btn-blue" type='submit'>Create Workspace</button>
        {activeIndex==0 &&<p className="feedback-text">{feedbackText}</p>}
      </form>
      </>
      }
      
      {four&&<>
      <div className="check">
        <img src="../check.svg" alt="check-img" className="check-img" />
      </div>
      <h2><strong>Congratulations, {name}!</strong></h2>
      <p>You have completed onbording, you can start using the Eden!</p>
      <form className="input-container d-flex m-auto justify-content-center" onSubmit={handleSubmitFour}>
        <button className="btn btn-blue">Launch Eden</button>
      </form>
      </>
      }
     </div>
     </div>}
     {eden && <div className="first flex-direction-col d-flex justify-content-center align-items-center">
      <p>Welcome to Home page <span> {name}</span> </p>
     </div>}
    </div>
  );
}
