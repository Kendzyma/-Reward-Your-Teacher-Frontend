import { Link, useNavigate } from "react-router-dom";
import "./FundWallet.css";
import moneyImage from "./MoneyRecieved.png"
import cancel from "./cancel.png"
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import LoadingRing from "../../../common/LoadingRing";
export default function FundWalletModal(props) {
  
  const Fund = "Fund";
    const { walletAmount, CloseModal } = props;
//   const { teacherName, amountSent, handleClose } = props;
const[amount,setAmount] = useState(0);
const[loading,setLoading] = useState(false);
const token1 = localStorage.getItem("token");
const navigate = useNavigate();
const token = "Bearer " + token1.substring(8, token1.length - 1);
    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();
      try {
        const resp = await axios.post(
          "http://localhost:9001/api/v1/wallet/fund",
          {
            amount: amount,
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (resp.status === 200) {
          console.log("This is the auth url ", resp.data.data.authUrl);
          // console.log(resp.data.data.authUrl);
          window.location.replace(resp.data.data.authUrl);
          setLoading(false);
         
        }
      } 
      catch (error) {
        toast(error.response.data.message);
        setLoading(false);
      }
    
 
    };
  return (

    <div className="modal-bg">
      <div className="modal">
      
          <img src={cancel} alt="" className="cancelButton" onClick={CloseModal}/>
        
        <img src={moneyImage} alt="" />
        {/* <p className="rewardText1">Reward Sent Successfully</p> */}
        <p className="innerText">Enter Amount</p>
        <input
          type="text"
          className="inputField"
          placeholder="enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="submitButton1" onClick={handleSubmit}>
          {!loading && Fund}
          {loading && <LoadingRing />}
        </button>
        <div className="loader"></div>
        <ToastContainer />
      </div>
    </div>
  );
}
