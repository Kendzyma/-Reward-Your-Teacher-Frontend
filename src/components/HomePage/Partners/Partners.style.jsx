import styled from 'styled-components'

export const PartnerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  justify-content: center;
  gap: 40px;
  width: 1440px;
  height: 300px;
  left: 224px;
  top: 2733px;

  .firstDiv {
    width: 251px;
    height: 48px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 30px;
    color: #012a4a;
  }
  .secondDiv {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .img1 {
    width: 117px;
    height: 46px;
  }
  .img2 {
    width: 179px;
    height: 45px;
  }
  .img3 {
    width: 107px;
    height: 62px;
  }
  .img4 {
    width: 103px;
    height: 102px;
  }
  .img5 {
    width: 85px;
    height: 85px;
  }
  @media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    justify-content: center;
    gap: 40px;
    width: 400px;
    height: 300px;
    left: 224px;
    top: 2733px;
  }
  .img3{
      display: none;
  }
  .img2{
      display: none;
  }
`;