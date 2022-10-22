import "./Modal.css";
import success from "./Successfully.png";
export default function SuccessModal(props) {
    const { teacherName, amountSent,handleClose} = props;
    
    console.log("Excution got here")
  return (
    <div className="modal-bg">
      <div className="modal">
        <img src={success} alt="" />
        <p className="rewardText1">Reward Sent Successfully</p>
        <p className="innerText">
          You just sent ₦{amountSent} to {teacherName}
        </p>
        <button className="Modalbutton" onClick={handleClose}>
          Done
        </button>
      </div>
    </div>
  );
}
