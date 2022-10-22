import axios from "axios";
import React, { useEffect, useState } from "react";
import RewardYourTeacherIcon from "../../common/RewardYourTeacherIcon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StudentSignUpStyle } from "./StudentSignUp.style";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import LoadingRing from "../../common/LoadingRing";


const StudentSignUp = () => {
  const SignUp =  "Sign Up";



  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = async (res) => {
    console.log("it got here")
    setEmail(res.profileObj.email);
   setName(res.profileObj.name);
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  const logOut = () => {
    setProfile(null);
  };

  const clientId =
    "966153512513-finqplcdnb16vp3kn4la8uik29vdje8k.apps.googleusercontent.com";
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [schoolList, setSchoolList] = useState([]);
  async function FetchSchools() {
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

    function navigate1() {
      navigate("/student/login");
    }
    try {
      const resp = await axios.post(
        "http://localhost:9001/api/v1/register/student",
        {
          name:name,
          email: email,
          password: password,
          schoolName: school,
          phoneNumber: phoneNumber,
        }
      );
      console.log(resp.status);
      if (resp.status === 201) {
        toast("Registered Successfully, Kindly check your email for verification link");
        setTimeout(() => navigate1(), 5000);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <StudentSignUpStyle>
      <div className="outerDiv">
        <RewardYourTeacherIcon />

        <form onSubmit={handleSubmit}>
          <div className="formDiv">
            <div className="topDiv">
              <p className="topText">Sign up as a Student</p>
            </div>
            <div className="secondTopDiv">
              <div></div>
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
                Phone number
              </label>
              <input
                required
                type="text"
                className="nameInput placeHolder"
                placeholder="Enter phoneNumber"
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
              <label htmlFor="schoolattended" className="formText">
                Name of school
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
                  return (
                    <option value={schools.schoolName}>
                      {schools.schoolName}
                    </option>
                  );
                })}
              </select>
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
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </StudentSignUpStyle>
  );
};

export default StudentSignUp;
