import React, { useEffect, useMemo, useState } from "react";
import add from "../HomePage/images/Add.png";
import background from "../HomePage/images/background.png";
import TotalMoney from "../HomePage/images/MoneyRecieved.png";
import { StudentWalletStyle, TeacherWalletStyle } from "./StudentWallet.style";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FundWalletModal from "../Modal/FundWalletModal/FundWallet";
import NavBarSideBar from "../../common/NavBarSideBar";
import { FaBars } from "react-icons/fa";

export default function StudentWallet() {
  // const name = localStorage
  //   .getItem("first")
  //   .substring(1, localStorage.getItem("first").length - 1);
  const [wallet, setWallet] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const [hide, setHide] = useState("");
  const token1 = localStorage.getItem("token");
  const navigate = useNavigate();
  const [fundModal, setFundModal] = useState(false);
  const balance = numberWithCommas(wallet.balance)+".00";
  const totalMoneySent = numberWithCommas(wallet.totalMoneySent)+".00";
  const [show, setShow] = useState(false);
   const location = new useLocation()


  const ShowBars = () => {
    setShow(!show);
  };
  const CloseModal = () => {
    setFundModal(false);
  };
  function numberWithCommas(x) {
    if (x > 0) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else return 0;
  }
  const Confirmation = () => {
    setConfirmation(!confirmation);
  };

  const logout = () => {
    localStorage.removeItem("token-info");
    navigate("/student/login");
  };
  async function FetchWalletBalance() {
    const token = "Bearer " + token1.substring(8, token1.length - 1);

    axios
      .get(`http://localhost:9001/api/v1/wallet/student/balance`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setWallet(res.data.data);
      })
      .catch((error) => {
        //  navigate("/teacher/login");
        console.error(error);
      });
  }
  useEffect(() => {
    FetchWalletBalance();
  }, []);

  const hidebutton = () => {
    setHide(!hide);
  };

//   async function FetchTransaction() {
//     const token1 = localStorage.getItem("token");
//     const token = "Bearer " + token1.substring(8, token1.length - 1);

//     axios
//       .get(
//         `http://localhost:9001/api/v1/transaction/student?offset=0&pageSize=10`,
//         {
//           headers: {
//             Authorization: `${token}`,
//           },
//         }
//       )
//       .then((res) => {
//         setTransaction(res.data.data);
//         console.log(res.data.data);

//       })
//       .catch((error) => {
//         navigate("/student/dashboard");
//         console.error(error);
//       });
//   }
//   useEffect(() => {
//     FetchTransaction();
//   }, []);
// console.log(balance)
  return (
    <StudentWalletStyle>
      <NavBarSideBar show={true} option="student" />
      {/* <FaBars className="bars" onClick={ShowBars} /> */}
      {fundModal && (
        <FundWalletModal
          walletAmount={balance}
          CloseModal={CloseModal}
        />
      )}
      <div className="WalletBodydiv">
        <div className="topWalletTextDiv">
          <p className="topWalletText">My Dashboard</p>
        </div>
        <div className="topWalletDiv">
          <div className="walletDiv">
            <div>
              <p className="walletText">My Wallet Balance</p>
            </div>
            <div>
              <p className="amount">₦{balance}</p>
            </div>
            <div>
              <button
                className="addMoneyButton"
                onClick={() => {
                  setFundModal(true);
                }}
              >
                <img src={add} alt="" /> Add Money
              </button>
            </div>
          </div>
          <div className="Active">
            <p className="ActiveText">Account is Active</p>
          </div>
        </div>

        <div className="maintransactionDiv">
          <div className="transactionDiv">
            <div className="Transact">
              <img src={background} alt="png" className="backgroundImage" />
            </div>
            <div className="totalMoneySentDiv">
              <div className="totalMoneySent2">
                <div className="totalMoneySent">
                  <p className="total1">Total Money Sent</p>
                  <p className="total2">₦{totalMoneySent}</p>
                  <p className="total3">Sent</p>
                </div>
                <div className="walletIcon">
                  <img src={TotalMoney} alt="" />
                </div>
              </div>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
        {show && (
          <div className="dropDown">
            <Link className="linkdiv" to="/">
              <p>Home</p>
            </Link>
            <Link className="linkdiv" to="/about">
              <p>About</p>
            </Link>
            <Link className="linkdiv" to="/contact">
              <p>Contact</p>
            </Link>
            <Link className="linkdiv" to="login">
              <p>Login</p>
            </Link>
          </div>
        )}
      </div>
    </StudentWalletStyle>
  );
}
