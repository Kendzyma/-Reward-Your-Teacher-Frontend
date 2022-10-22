import styled from "styled-components";
// import { Heading } from "app/component/molecules/schools-dashboard/schools.component";
export const SchoolDiv = styled.div`
  padding: 5rem 7rem;
  width: 80%;
`;
export const SchoolDivHeader = styled.div``;
export const SchoolDivHeading = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 38.73px;
  text-align: left;
  color: rgba(3, 67, 95, 1);
`;
export const SchoolInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  border: 1px solid #e5e5e5;
  padding: 0.5rem 1rem;
  height: 1.5rem;
`;
export const SchoolInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  width: 100%;
`;
export const SearchInput = styled.input`
  border: none;
  color: #e5e5e5;
`;
export const SearchInputIcon = styled.div`
  color: #e5e5e5;
`;
export const SchoolFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border: 1px solid #e5e5e5;
  height: 2.5rem;
  width: 6%;
  margin-left: 5rem;
`;
export const SchoolFilterText = styled.p`
  color: rgba(3, 67, 95, 1);
  font-size: 16px;
  line-height: 19.36px;
  weight: 400;
  margin-bottom: 1rem;
`;
export const SchoolFilterIcon = styled.div``;
export const SchoolList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const SchoolListHeader = styled.h1`
  color: #03435f;
  text-align: left;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;
export const SchoolListHeaderDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.04);
  width: 100%;
  //   height: 1rem;
  padding: 0 0.5rem 0 0.5rem;
`;
export const SchoolListItem = styled.div``;
export const SchoolLocation = styled.div``;
export const SchoolLocationKey = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  border-bottom: 2px solid #e5e5e5;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
`;
export const SchoolLocationItem = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  color: rgba(3, 67, 95, 1);
  padding-left: 1rem;
`;
export const SchoolLocationIcon = styled.svg`
  font-size: 21px;
  color: #21334f;
  font-weight: 900;
  width: 3%;
  &:hover {
    color: teal;
  }
`;
export const SchoolPage = styled.div``;
export const Pagination = styled.div``;
export const SideBar = styled.div`
.teacherListDiv{
  margin-left: 150px;
  margin-top: -800px;
}
`;