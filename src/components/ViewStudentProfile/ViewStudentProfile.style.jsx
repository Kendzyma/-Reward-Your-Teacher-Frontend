import styled from "styled-components";

export const ViewStudentProfileStyle = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%; */

  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  p {
    margin: 0;
    padding: 0;
  }
  .modal-container {
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 35.209%;
    /* height: 60%; */
    /* box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
     */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: center;
   width: 470px;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 9px;
    padding-right: 10px;
  
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    max-width: 480px;
    margin: 200px auto;
    background: #fff;
    border-radius: 10px;
    height: 300px; */
  }

  .header-text {
    color: #03435f;
    font-size: 14px;
    font-weight: 600;
    margin-left: 190px;
    /* margin-bottom: 11px; */
  }

  .profile-details {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
    margin-left: 40px;
    width: 100%;
  
  }

  .name-and-school .name {
    font-size: 14px;
    color: #03435f;
    font-weight: 600;
   
  }

  .name-and-school .school {
    font-size: 14px;
    color: #03435f;
    font-weight: 400;
  }
  .others {
    margin-top: 30px;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }

  .top-text {
    font-size: 14px;
    color: #c4c4c4;
    font-weight: 400;
  }

  .email {
    color: #03435f;
    font-size: 14px;
  }
  .phone {
    color: #03435f;
    font-size: 14px;
  }

  .btn-container {
    background-color: #55a630;
    width: 80%;
    margin: 40px auto 31px auto;
    display: flex;
    gap: 10.36px;
    justify-content: center;
    align-items: center;
    padding: 11.5px 0;
    cursor: pointer;
  }

  .btn {
    color: #fff;
    font-weight: 700;
  }
  .close {
    cursor: pointer;
    margin-left: auto;    
  }
  .modal {
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
    max-width: 480px;
    margin: 200px auto;
    background: #fff;
    border-radius: 10px;
    height: 350px;
  }
  .studentImage{
    width: 80px;
    border-radius: 50%;
  }
`;
