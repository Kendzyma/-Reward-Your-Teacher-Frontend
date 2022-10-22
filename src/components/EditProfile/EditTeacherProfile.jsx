import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingRing from "../../common/LoadingRing";
import LogoutModal from "../Modal/LogoutModal/LogoutModal";
import { EditTeacherProfileStyle } from "./EditTeacherProfile.style";
import NavBarSideBar from "../../common/NavBarSideBar";

const EditTeacherProfile = () => {

  const [confirmation, setConfirmation] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
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
  const edit = "Edit";
  const logout = () => {
    localStorage.removeItem("token-info");
    navigate("/teacher/login");
  };
  const Confirmation = () => {
    setConfirmation(!confirmation);
  };

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
    let formData = new FormData();
    const editProfile = JSON.stringify({
      name: name,
      email: email,
      password: password,
      school: school,
      yearsOfTeaching: yearsOfTeaching,
      subjectTaught: subjectTaught,
      phoneNumber: phoneNumber,
      status: status,
      about: about,
      position: position,
    });

    formData.append("editProfile", editProfile);

    formData.append("file", nin);
    function navigate1() {
      navigate("/teacher/login");
    }

    //  Submitting the form with axios
    const token1 = localStorage.getItem("token");
    const token = "Bearer " + token1.substring(8, token1.length - 1);
    try {
      const resp = await axios({
        method: "post",
        url: "http://localhost:9001/api/v1/profile/edit/teacher",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      });

      if (resp.status === 200) {
        toast("Edited Successfully");
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
    <EditTeacherProfileStyle>
      <NavBarSideBar option="teacher" height="1080"/>
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
                School where you taught
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
                Years of Teaching
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
                Subjects taught
              </label>
              <input
                required
                type="text"
                className="nameInput placeHolder"
                placeholder="Subjects taught"
                onChange={(e) => setSubjectTaught(e.target.value)}
                value={subjectTaught}
              />

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
                Upload NIN
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
                {!loading && edit}
                {loading && <LoadingRing />}
              </button>
              <div></div>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
      {confirmation && (
        <LogoutModal logout={logout} confirmation={Confirmation} />
      )}
    </EditTeacherProfileStyle>
  );
};

export default EditTeacherProfile;
