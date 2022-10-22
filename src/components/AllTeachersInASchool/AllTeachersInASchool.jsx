import React from "react";
import {
  SchoolDiv,
  SchoolDivHeader,
  SchoolDivHeading,
  SchoolInput,
  SearchInputIcon,
  SchoolInputDiv,
  SearchInput,
  SchoolFilter,
  SchoolFilterIcon,
  SchoolFilterText,
  SchoolList,
  SchoolListHeader,
  SchoolListHeaderDiv,
  SchoolListItem,
  SchoolLocation,
  SchoolLocationItem,
  SchoolLocationKey,
  SchoolLocationIcon,
  SchoolPage,
  Pagination,
  SideBar,
} from "./AllTeachersInASchool.style.jsx";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import profilepicture from "../HomePage/images/ProfilePicture.png";
import overview from "../HomePage/images/Overview.png";
import schoolImage from "../HomePage/images/Group.png";
import notification from "../HomePage/images/Notification.png";
import { RiArrowRightSLine } from "react-icons/ri";
import RewardYourTeacherIcon from "../../common/RewardYourTeacherIcon.jsx";
import logout1 from "../HomePage/images/Logout.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ViewTeacherProfile from "../ViewTeacherProfile/ViewTeacherProfile.jsx";
import Items from "../../common/Pagnation.jsx";
import DropDown from "../DropDown/dropdown.jsx";
import LogoutModal from "../Modal/LogoutModal/LogoutModal.jsx";
import NavBarSideBar from "../../common/NavBarSideBar.jsx";

export const AllTeachersInASchool = () => {
   const [dropDown, setDropDown] = useState(false);
  const token1 = localStorage.getItem("token");
   const [confirmation, setConfirmation] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState("");
  const location = useLocation();
  const school1 = location.state.school.schoolName;
  console.log(school1);
  const name = localStorage
    .getItem("first")
    .substring(1, localStorage.getItem("first").length - 1);

  const CloseModal = () => {
    setShowDetails(false);
  };
  const Confirmation = () => {
    setConfirmation(!confirmation);
  };

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token-info");
    navigate("/student/login");
  };
  const [teacherList, setTeacherList] = useState([]);
  const [chooseSchool, setChooseSchool] = useState("");

  async function FetchSchools() {
    //  const location = new Location()
    // console.log(location.state.school.schoolName);
    const token = "Bearer " + token1.substring(8, token1.length - 1);
    const res = await axios
      .get(
        "http://localhost:9001/api/v1/search/teachers/" +
          school1 +
          "?offset=0&pageSize=10",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        console.log(res.data.data);
        setTeacherList(res.data.data);
      })
      .catch((error) => {
        navigate("/teacher/login");
        console.error(error);
      });
  }
  useEffect(() => {
    FetchSchools();
  }, []);

  return (
    <SideBar>
      <NavBarSideBar show={true} option = "student"/>
      {showDetails && (
        <ViewTeacherProfile teacher={details} closeModal={CloseModal} />
      )}   
        <div className="schoolDivTop">
          <SchoolDiv className="teacherListDiv">
            <SchoolDivHeader>
              <SchoolDivHeading>All Teacher</SchoolDivHeading>
            </SchoolDivHeader>
            <SchoolInput>
              <SchoolInputDiv>
                <SearchInput
                  placeholder="Search"
                  type="text"
                  // onChange={(e) => setSearchInput(e.target.value)}
                />
                <SearchInputIcon>
                  <AiOutlineSearch />
                </SearchInputIcon>
              </SchoolInputDiv>
              <SchoolFilter>
                <SchoolFilterText>Filter</SchoolFilterText>
                <SchoolFilterIcon>
                  <VscSettings />
                </SchoolFilterIcon>
              </SchoolFilter>
            </SchoolInput>
            <SchoolList>
              <SchoolListHeaderDiv>
                <SchoolListHeader>Name</SchoolListHeader>
                <SchoolListHeader>School</SchoolListHeader>
                <SchoolListHeader>Position</SchoolListHeader>
                <SchoolListHeader>Period Of Teaching</SchoolListHeader>
              </SchoolListHeaderDiv>
              <SchoolListItem>
                {teacherList.map((teacher) => {
                  const { id, name, school, yearsOfTeaching, position, about,displayPicture } =
                    teacher;
                  return (
                    <SchoolLocation>
                      <SchoolLocationKey
                        key={id}
                        onClick={() => {
                          setDetails(teacher);
                          setShowDetails(true);
                        }}
                      >
                        <SchoolLocationItem>{name}</SchoolLocationItem>
                        <SchoolLocationItem>{school}</SchoolLocationItem>
                        <SchoolLocationItem>{position}</SchoolLocationItem>
                        <SchoolLocationItem>
                          {yearsOfTeaching}
                        </SchoolLocationItem>
                      </SchoolLocationKey>
                    </SchoolLocation>
                  );
                })}
              </SchoolListItem>
              <SchoolPage></SchoolPage>
            </SchoolList>
          </SchoolDiv>
        </div>
      
    </SideBar>
  );
};
