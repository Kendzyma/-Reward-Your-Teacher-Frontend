import React, { useMemo, useState } from "react";
import { LoginStyle } from "./StudentLogin.style";
import RewardYourTeacherIcon from "../../common/RewardYourTeacherIcon";
import { Link, useNavigate } from "react-router-dom";
import Googlebutton from "../../common/Googlebutton";
import { TeacherLoginStyle } from "./TeacherLogin.style";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import LoadingRing from "../../common/LoadingRing";
import GoogleLogin from "react-google-login";
const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [gmail,setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
   const [lastName, setLastName] = useState("");
   const [firstName, setFirstName] = useState("");
   const [imageUrl, setImageUrl] = useState("");
   const [success,setSuccess] = useState(false);
  const navigate = useNavigate();
const Login = "Login"
const clientId =
  "228578921568-ff86pcfptnqb1ktp9vebftqqrhacldbf.apps.googleusercontent.com";

 const onSuccess = async (res) => {
   console.log("this is the response:",res);
   setGmail(res.profileObj.email);
   setLastName(res.profileObj.familyName);
   setFirstName(res.profileObj.givenName);
   setImageUrl(res.profileObj.imageUrl);  
   console.log("This success was excecuted")
 
       try {
         console.log("this axios is about to get executed");
         console.log("this is the email from google", email);
         const resp =await axios.post(
           "http://localhost:9001/api/v1/login/social/teacher",
           {
             firstName: firstName,
             email: gmail,
             lastName: lastName,
             displayPicture: imageUrl,
           }
         );

         if (resp.status === 200) {
           localStorage.setItem("token", JSON.stringify(resp.data.data.token));
            const fullName = resp.data.data.name;
            const [first, last] = fullName.split(" ");
            localStorage.setItem("first", JSON.stringify(first));
            localStorage.setItem(
              "picture",
              JSON.stringify(resp.data.data.displayPicture)
            );
           navigate("/teacher/dashboard");
        
         }

         setLoading(false);
       } catch (error) {
         setLoading(false);
       }

 };

 const onFailure = (err) => {
   console.log("This failure was excecuted")
   console.log("failed", err);
 };

  const handleSubmit = async (e) => {
    
    console.log("submitting");
    setLoading(true);
    e.preventDefault();

    try {
      const resp = await axios.post(
        "http://localhost:9001/api/v1/login/teacher",
        {
          email: email,
          password: password,
        }
      );
      console.log(resp.status);
      if (resp.status === 200) {
             
                 localStorage.setItem(
                   "token",
                   JSON.stringify(resp.data.data.token)
                 
               );
               const fullName = resp.data.data.name;
               const [first, last] = fullName.split(" ");
               localStorage.setItem("first", JSON.stringify(first));
                  localStorage.setItem(
                    "picture",
                    JSON.stringify(resp.data.data.displayPicture)
                  );
        navigate("/teacher/dashboard");

                 }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  return (
    <TeacherLoginStyle>
      <form onSubmit={handleSubmit}>
        <div className="topDiv">
          <div className="iconDiv">
            <RewardYourTeacherIcon />
          </div>
        </div>
        <div className="bottomDiv">
          <div className="textDiv">
            <div className="loginTextDiv">
              <p className="LoginText">Login As A Teacher</p>
            </div>
            <div className="LoginText2Div">
              <label htmlFor="email" className="LoginText2">
                Email
              </label>
            </div>
            <input
              type="email"
              className="firstInput"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <div className="LoginText2Div">
              <p className="LoginText2">Password</p>
            </div>
            <input
              type="password"
              className="firstInput"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            {/* <div className="LoginText2Div">
              <p className="LoginText2">Forgot Password?</p>
            </div> */}
            <button
              type="submit"
              className="button1"
              IsLoading={loading}
              onClick={() => {
                handleSubmit();
                console.log("this submit was pressed", email);
                console.log("this submit was pressed", password);
              }}
            >
              {!loading && Login}
              {loading && <LoadingRing />}
            </button>
            <div className="lineDiv">
              <p className="line"></p>
              <p className="lineText">or</p>
              <p className="line"></p>
            </div>
            <div className="googleDiv">
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                // onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                className="googleButton"
              />
            </div>
            <div className="Account">
              <p className="accountText">
                Don't have an account?
                <Link to="/teacher/signup" className="signUpLink">
                  <span className="createAccountSpan">Create Account</span>
                </Link>
              </p>
            </div>
            <ToastContainer />
          </div>
        </div>
      </form>
    </TeacherLoginStyle>
  );
};

export default TeacherLogin;
