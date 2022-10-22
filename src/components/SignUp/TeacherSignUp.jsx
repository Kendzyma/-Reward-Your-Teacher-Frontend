import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RewardYourTeacherIcon from "../../common/RewardYourTeacherIcon";
import { TeacherSignUpStyle } from "./TeacherSignUp.style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
import LoadingRing from "../../common/LoadingRing";

const TeacherSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [yearsOfTeaching, setYearsOfTeaching] = useState("");
  const [subjectTaught, setSubjectTaught] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [about, setAbout] = useState("");
  const [nin, setNin] = useState(null);
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [schoolList, setSchoolList] = useState([]);
  const navigate = useNavigate();
  const [setProfile] = useState([]);
  
    const SignUp = "Sign Up"
    useEffect(() => {
      const initClient = () => {
        gapi.client.init({
          clientId: clientId,
          scope: "",
        });
      };
      gapi.load("client:auth2", initClient);
    });

    const onSuccess = (res) => {
      setEmail(res.profileObj.email);
      setName(res.profileObj.name);
    };

    const onFailure = (err) => {
      console.log("failed", err);
    };



    const clientId =
      "966153512513-finqplcdnb16vp3kn4la8uik29vdje8k.apps.googleusercontent.com";
    
  // Fetching school

  async function FetchSchools() {
    console.log("i am here");
      const res = await axios.get(
        `http://localhost:9001/api/v1/search/schools?offset=0&pageSize=10`
      );
    
      setSchoolList(res.data.data);
  }
  useEffect(() => {
    FetchSchools();
  }, []);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let formData = new FormData();
    const registration = JSON.stringify({
      name: name,
      email: email,
      password: password,
      school: school,
      yearsOfTeaching: yearsOfTeaching,
      subjectTaught: subjectTaught,
      schoolType: schoolType,
      phoneNumber: phoneNumber,
      status: status,
      about: about,
      position: position,
    });

    formData.append("registration", registration);

    formData.append("file", nin);
    function navigate1() {
      navigate("/teacher/login");
    }

    // Submitting the form with axios

    try {
      const resp = await axios({
        method: "post",
        url: "http://localhost:9001/api/v1/register/teacher",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(resp.status);
      if (resp.status === 201) {
        toast(
          "Registered Successfully, Kindly check your email for verification link"
        );
        setTimeout(() => navigate1(), 5000);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  const handleFileSelect = (event) => {
    setNin(event.target.files[0]);
  };

  return (
    <TeacherSignUpStyle>
      <div className="outerDiv">
        <RewardYourTeacherIcon />
        <div className="topDiv">
          <p className="topText">Sign Up as a Teacher</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formDiv">
            <div className="secondTopDiv">
              <div>
                <p className="firstFormText">Input Your Information</p>
                <p className="secondFormText">
                  Only you can view and edit your information
                </p>
              </div>
              <label htmlFor="name" className="formText">
                Name
              </label>
              <input
                required
                type="text"
                className="nameInput placeHolder"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="email" className="formText">
                Email
              </label>
              <input
                required
                type="email"
                className="nameInput placeHolder"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="phonenumber" className="formText">
                Phone Number
              </label>
              <input
                required
                type="text"
                className="nameInput placeHolder"
                placeholder="Enter Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />

              <label htmlFor="password" className="formText">
                Password
              </label>
              <input
                required
                type="password"
                className="nameInput placeHolder"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <label htmlFor="schooltaught" className="formText">
                School Where You Taught
              </label>
              <select
                required
                name="drop-down"
                id="drop-down"
                className="nameInput"
                onChange={(e) => setSchool(e.target.value)}
                value={school}
              >
                <option value=""></option>
                {schoolList.map((schools) => {
                  const { id, schoolName } = schools;
                  return (
                    <option value={schools.schoolName}>
                      {schools.schoolName}
                    </option>
                  );
                })}
              </select>

              <label htmlFor="Status" className="formText">
                Status
              </label>
              <select
                required
                name="drop-down"
                id="drop-down"
                className="nameInput"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              >
                <option value=""></option>
                <option value="Retired">Retired</option>
                <option value="Active">Active</option>
              </select>

              <label htmlFor="position" className="formText">
                Position
              </label>
              <select
                required
                name="drop-down"
                id="drop-down"
                className="nameInput"
                onChange={(e) => setPosition(e.target.value)}
                value={position}
              >
                <option value=""></option>
                <option value="Teacher">Teacher</option>
                <option value="HeadTeacher">HeadTeacher</option>
              </select>

              <label htmlFor="yearsofteaching" className="formText">
                Years Of Teaching
              </label>
              <input
                required
                type="text"
                className="nameInput placeHolder"
                placeholder="e.g 1993-2000"
                onChange={(e) => setYearsOfTeaching(e.target.value)}
                value={yearsOfTeaching}
              />
              <label htmlFor="subjectstaught" className="formText">
                Subjects Taught
              </label>
              <input
                required
                type="text"
                className="nameInput placeHolder"
                placeholder="Subjects taught"
                onChange={(e) => setSubjectTaught(e.target.value)}
                value={subjectTaught}
              />

              <label htmlFor="schooltype" className="formText">
                School Type
              </label>
              <select
                required
                name="drop-down"
                id="drop-down"
                className="nameInput"
                onChange={(e) => setSchoolType(e.target.value)}
                value={schoolType}
              >
                <option value="Primary School">Primary School</option>
                <option value="Secondary School<">Secondary School</option>
              </select>

              <label htmlFor="About" className="formText">
                About
              </label>
              <input
                required
                type="text"
                className="nameInput placeHolder"
                placeholder="Tell us about yourself"
                onChange={(e) => setAbout(e.target.value)}
                value={about}
              />

              <label htmlFor="nin" className="formText">
                Upload Profile picture
              </label>
              <input
                required
                accept="image/*"
                type="file"
                className="uploadInput placeHolder"
                placeholder="upload"
                onChange={handleFileSelect}
              />
              <button
                type="submit"
                className="submitButton"
                IsLoading={loading}
              >
                {!loading && SignUp}
                {loading && <LoadingRing />}
              </button>
              <GoogleLogin
                className="googlebutton"
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />

              <div></div>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </TeacherSignUpStyle>
  );
};

export default TeacherSignUp;
