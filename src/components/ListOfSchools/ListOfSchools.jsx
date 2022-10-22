import React, { useRef } from "react";
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
} from "./ListOfSchools.style.jsx";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import profilepicture from "../HomePage/images/ProfilePicture.png";
import overview from "../HomePage/images/Overview.png";
import schoolImage from "../HomePage/images/Group.png";
import notification from "../HomePage/images/Notification.png";
import { RiArrowRightSLine } from "react-icons/ri";
import RewardYourTeacherIcon from "../../common/RewardYourTeacherIcon.jsx";
import logout1 from "../HomePage/images/Logout.png";
import { Link, useNavigate } from "react-router-dom";
import { schoolLocations } from "./data.jsx";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import LogoutModal from "../Modal/LogoutModal/LogoutModal.jsx";
import DropDown from "../DropDown/dropdown.jsx";
import NavBarSideBar from "../../common/NavBarSideBar.jsx";

const Schools = () => {
     const [dropDown, setDropDown] = useState(false);
     const [confirmation, setConfirmation] = useState(false);

  const [schools, setSchools] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchKey, setSearchKey] = useState(" ");
   const searchRef = useRef(" ");

    const name = localStorage
      .getItem("first")
      .substring(1, localStorage.getItem("first").length - 1);


  const showpage = (e) => {
    e.preventDefault();
    setPageNumber(e.target.innerText - 1);
  };
  let pages = [];
  if (totalPages < 6) {
    for (let i = 0; i < totalPages - 1; ++i) {
      pages.push(
        <a onClick={showpage} key={i}>
          {i + 1}
        </a>
      );
    }
  } else {
    for (let i = 0; i < 6; ++i) {
      pages.push(
        <a onClick={showpage} key={i}>
          {i + 1}
        </a>
      );
    }
  }

  const lastPageNum = totalPages - 1;
const nextPage = () => {
  setPageNumber((prevState) => {
    if (pageNumber < lastPageNum) {
      return prevState + 1;
    }
  });
};
const previousPage = () => {
  setPageNumber((prevState) => {
    if (pageNumber > 1) {
      return prevState - 1;
    }
  });
};
useEffect(() => {
  FetchSchools();
}, [pageNumber, searchKey]);
const handleChange = (e) => {
  // const { name, value } = e.target;
  setSearchKey(searchRef.current.value);
};


    const Confirmation = () => {
      setConfirmation(!confirmation);
    };
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token-info");
    navigate("/student/login");
  };
  const [schoolList, setSchoolList] = useState([]);
  const [chooseSchool, setChooseSchool] = useState("");

  async function FetchSchools() {
    try{
    const res = await axios.get(
      `http://localhost:9001/api/v1/search/schools?offset=0&pageSize=10`
    );
    setSchoolList(res.data.data);
  }
  catch(e){
    navigate("/student/login");
  }
}
  useEffect(() => {
    FetchSchools();
  }, []);

  return (
    <SideBar>
      <NavBarSideBar show={true} option="student" />
      <SchoolDiv className="teacherListDiv">
        <SchoolDivHeader>
          <SchoolDivHeading>All Schools</SchoolDivHeading>
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
            <SchoolListHeader>List of schools</SchoolListHeader>
          </SchoolListHeaderDiv>
          <SchoolListItem>
            {schoolList.map((school) => {
              const { id, schoolName } = school;
              return (
                <SchoolLocation>
                  <SchoolLocationKey key={id}>
                    <SchoolLocationItem>{schoolName}</SchoolLocationItem>
                    <SchoolLocationIcon>
                      <Link
                        to="/student/allteachers"
                        state={{
                          school: { schoolName },
                        }}
                      >
                        <RiArrowRightSLine />
                      </Link>
                    </SchoolLocationIcon>
                  </SchoolLocationKey>
                </SchoolLocation>
              );
            })}
            <SchoolLocation className="pagination">
              <a href="#" onClick={previousPage}>
                &laquo;
              </a>
              {pages}
              <a>...</a>
              <a href="#" onClick={() => setPageNumber(lastPageNum)}>
                Last
              </a>
              <a href="#" onClick={nextPage}>
                &raquo;
              </a>
            </SchoolLocation>
          </SchoolListItem>
          <SchoolPage>
            <Pagination></Pagination>
          </SchoolPage>
        </SchoolList>
      </SchoolDiv>
    </SideBar>
  );
};
export default Schools;
