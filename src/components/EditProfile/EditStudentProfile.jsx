import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingRing from "../../common/LoadingRing";
import { EditStudentProfileStyle } from "./EditStudentProfile.style";
import NavBarSideBar from "../../common/NavBarSideBar";
const EditStudentProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(false);
  const [schoolList, setSchoolList] = useState([]);
  const navigate = useNavigate();
  const SignUp = "Edit";

  //Fetching school
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
    function navigate1() {
      navigate("/teacher/login");
    }
    //  Submitting the form with axios
    const token1 = localStorage.getItem("token");
    const token = "Bearer " + token1.substring(8, token1.length - 1);
    try {
      const resp = await axios.post(
        "http://localhost:9001/api/v1/profile/edit/student",
        {
          name: name,
          email: email,
          nameOfSchool: school,
          phone: phoneNumber,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      if (resp.status === 200) {
        console.log(resp.status);
        toast("profile edited successfully");
        setLoading(false);
      }
    } catch (error) {
      toast(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <EditStudentProfileStyle>
      <NavBarSideBar option="student" show={true} />
      <div className="outerDiv">
        <form onSubmit={handleSubmit}>
          <div className="formDiv">
            <div className="secondTopDiv">
              <div>
                <p className="firstFormText">Update your profile information</p>
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
              <label htmlFor="phonenumber" className="formText">
                Phone number
              </label>
              <input
                required
                type="text"
                className="nameInput placeHolder"
                placeholder="Enter Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
              <label htmlFor="schooltaught" className="formText">
                Name of School
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
              <button
                type="submit"
                className="submitButton"
                IsLoading={loading}
              >
                {!loading && SignUp}
                {loading && <LoadingRing />}
              </button>
              <div></div>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </EditStudentProfileStyle>
  );
};
export default EditStudentProfile;
