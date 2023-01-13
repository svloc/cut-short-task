import React, { useState } from "react";

export default function Login() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    edenPlan: "",
  });
  const [formErr, setFormErr] = useState({});
  const [activeTab, setActiveTab] = useState("");
  const [formState, setFormState] = useState({});
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleNext() {
    if (step === 1) {
      setFormState({ ...formState, one: true });
      if (!formData.fullName) {
        setFormErr({ ...formErr, fullNameErr: "Full Name is required" });
        return;
      } else if (!formData.displayName && formData.fullName) {
        formErr.fullNameErr = "";
        setFormErr({ ...formErr, displayNameErr: "Display Name is required" });
        return;
      } else {
        formErr.displayNameErr = "";
        formErr.fullNameErr = "";
      }
    } else if (step === 2) {
      setFormState({ ...formState, two: true });
      if (!formData.workspaceName) {
        setFormErr({
          ...formErr,
          workspaceNameErr: "Work Space Name is required",
        });
        return;
      } else if (!formData.workspaceUrl && formData.workspaceName) {
        formErr.workspaceNameErr = "";
        setFormErr({
          ...formErr,
          workspaceUrlErr: "Work Space Url is required",
        });
        return;
      } else {
        formErr.workspaceUrlErr = "";
        formErr.workspaceNameErr = "";
      }
    } else if (step === 3) {
      setFormState({ ...formState, three: true });
      if (!formData.edenPlan) {
        setFormErr({ ...formErr, edenPlanErr: "Eden Plan is required" });
        return;
      } else {
        formErr.edenPlanErr = "";
        console.log(formData)
      }
    } else {
      setFormState({ ...formState, four: true });
      return;
    }

    setStep(step + 1);
  }

  function handlePrev() {
    setStep(step - 1);
  }
  function updateTab(i){
    setActiveTab(i);
    if (activeTab == 1) {
      formData.edenPlan = "single";
    } else {
      formData.edenPlan = "team";
    }
  };
  function renderStep() {
    switch (step) {
      case 1:
        return (
          <>
            <h2>
              <strong>Welcome! First things first..</strong>
            </h2>
            <p>You can always change them later</p>
            <div className="input-container d-flex m-auto justify-content-center">
              <div>
                <p className="input-label">
                  <strong>Full Name</strong>
                </p>
                <input
                  type="text"
                  name="fullName"
                  className="form-input w-100 "
                  onChange={handleChange}
                  value={formData.fullName}
                  placeholder="Sachin Lokare"
                />
                {formErr.fullNameErr && (
                  <p className="feedback-text">{formErr.fullNameErr}</p>
                )}
              </div>
              <div>
                <p className="input-label">
                  <strong>Display Name</strong>
                </p>
                <input
                  name="displayName"
                  className="form-input w-100 "
                  onChange={handleChange}
                  value={formData.displayName}
                  placeholder="Sachin"
                />
                {formErr.displayNameErr && (
                  <p className="feedback-text">{formErr.displayNameErr}</p>
                )}
              </div>
              <button className="btn btn-blue" onClick={handleNext}>
                Create Workspace
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2>
              <strong>Let's set a home for all your work</strong>
            </h2>
            <p>You can always create another workspace later</p>
            <div className="input-container d-flex m-auto justify-content-center">
              <div>
                <p className="input-label">
                  <strong>Workspace Name</strong>
                </p>
                <input
                  type="text"
                  name="workspaceName"
                  className="form-input w-100 "
                  onChange={handleChange}
                  value={formData.workspaceName}
                  placeholder="Sachin_mission"
                />
                {formErr.workspaceNameErr && (
                  <p className="feedback-text">{formErr.workspaceNameErr}</p>
                )}
              </div>
              <div>
                <p className="input-label">
                  <strong>Workspace Url</strong>
                </p>
                <input
                  name="workspaceUrl"
                  className="form-input w-100 "
                  onChange={handleChange}
                  value={formData.workspaceUrl}
                  placeholder="mission.com"
                />
                {formErr.workspaceUrlErr && (
                  <p className="feedback-text">{formErr.workspaceUrlErr}</p>
                )}
              </div>
              <button className="btn btn-blue" onClick={handleNext}>
                Create Workspace
              </button>
              <br />
              <button className="btn btn-blue" onClick={handlePrev}>
                Previous
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2>
              <strong>How are you planning to use Eden?</strong>
            </h2>
            <p>we'll streamline your setup experience accordingly</p>
            <div className="input-container d-flex m-auto justify-content-center w-90">
              <div className="img-container">
                <div
                  className={"img-box " + (activeTab == 1 ? " img-active" : "")}
                  onClick={() => updateTab(1)}
                >
                  <img src="../user.svg" alt="user-img" />
                  <p>
                    <strong>For Myself</strong>
                  </p>
                  <p>Write better. Think more clearly. stay organized</p>
                </div>
                <div
                  className={"img-box " + (activeTab == 2 ? " img-active" : "")}
                  onClick={() => updateTab(2)}
                >
                  <img src="../groups.svg" alt="groups-img" />
                  <p>
                    <strong>With My team</strong>
                  </p>
                  <p>Wikis docs task and project, all in one place</p>
                </div>
              </div>
              {formErr.edenPlanErr && (
                <p className="feedback-text">{formErr.edenPlanErr}</p>
              )}
              <button className="btn btn-blue" onClick={handleNext}>
                Create Workspace
              </button>
              <br />
              <button className="btn btn-blue" onClick={handlePrev}>
              Previous
              </button>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="check">
              <img src="../check.svg" alt="check-img" className="check-img" />
            </div>
            <h2>
              <strong>Congratulations, {formData.fullName}!</strong>
            </h2>
            <p>You have completed onbording, you can start using the Eden!</p>
            <div className="input-container d-flex m-auto justify-content-center">
              <button className="btn btn-blue" onClick={handleNext}>
              Start
              </button>
              <br />
              {/* <button className="btn btn-blue" onClick={handlePrev}>
               Previous
              </button> */}
            </div>
          </>
        );
      case 5:
        return (
          <>
            {" "}
            <p>
              Welcome to Home page <span>{formData.fullName}</span>{" "}
            </p>
          </>
        );
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center w-100 height-100vh">
      <div className="container d-flex justify-content-center align-items-center bg-white">
        <div className="first flex-direction-col d-flex justify-content-center align-items-center">
          <div className="d-flex">
            <img src="../logo.svg" alt="logo-img" className="logo-img" />
            <span className="logo-text">Eden</span>{" "}
          </div>
          <div className="number d-flex align-items-center w-100 justify-content-space-around">
            <div className="d-flex align-items-center w-100 ">
              <div className="step-icon d-flex align-items-center justify-content-center bg-blue-icon">
                1
              </div>
              {!step === 1 && <div className="line"></div>}
              <div
                className={`line ${
                  step === 1 ? "bg-blue-line-half" : "bg-blue-line-full"
                }`}
              ></div>

              <div
                className={
                  "step-icon d-flex align-items-center justify-content-center " +
                  (formState.one && " bg-blue-icon")
                }
              >
                2
              </div>
              {!formState.one ? (
                <div className="line"></div>
              ) : (
                <div
                  className={`line ${
                    step === 2 ? "bg-blue-line-half" : "bg-blue-line-full"
                  }`}
                ></div>
              )}

              <div
                className={
                  "step-icon d-flex align-items-center justify-content-center " +
                  (formState.two && " bg-blue-icon")
                }
              >
                3
              </div>
              {!formState.two ? (
                <div className="line"></div>
              ) : (
                <div
                  className={`line ${
                    step === 3 ? "bg-blue-line-half" : "bg-blue-line-full"
                  }`}
                ></div>
              )}

              <div
                className={
                  "step-icon d-flex align-items-center justify-content-center " +
                  (formState.three && " bg-blue-icon")
                }
              >
                4
              </div>
            </div>
          </div>
          {renderStep()}
        </div>
      </div>
    </div>
  );
}


