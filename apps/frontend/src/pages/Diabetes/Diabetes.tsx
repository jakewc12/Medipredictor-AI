import { useState } from "react";
import DiabetesForm from "../../components/forms/DiabetesForm/DiabetesForm";
import SubmitPopUp, { state } from "../../components/SubmitPopUp/SubmitPopUp";
const Diabetes: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isSuccess, setIsSuccess] = useState<state>(state.error)
    const [message, setMessage] = useState('')
    return (
        <div>
            <DiabetesForm
                setIsPopupOpen = {setIsPopupOpen}
                setIsSuccess = {setIsSuccess}
                setMessage = {setMessage}
            />
            <SubmitPopUp 
            open={isPopupOpen} 
            setOpen={setIsPopupOpen} 
            this_severity= {isSuccess}
            message = {message}
            name="Diabetes"
            ></SubmitPopUp>
        </div>
        
    );
};
export default Diabetes;