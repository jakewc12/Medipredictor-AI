import { useState } from "react";
import DiabetesForm from "../../components/forms/DiabetesForm/DiabetesForm";
import SubmitPopUp from "../../components/SubmitPopUp/SubmitPopUp";
import { state } from "../../components/SubmitPopUp/SubmitPopUp";
import ResultPopUp from "../../components/ResultPopUp";
import { RESULTS } from "../../components/forms/DiabetesForm/constants";

const Diabetes: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isSuccess, setIsSuccess] = useState<state>(state.error)
    const [message, setMessage] = useState('')
    const[resultMessage, setResultMessage] = useState<RESULTS[]>([])
    const [isResultPopupOpen, setIsResultPopupOpen] = useState(false)
    return (
        <div>
            <DiabetesForm
                setIsPopupOpen = {setIsPopupOpen}
                setIsSuccess = {setIsSuccess}
                setMessage = {setMessage}
                setResultMessage = {setResultMessage}
                setIsResultPopupOpen = {setIsResultPopupOpen}
            />
            <SubmitPopUp 
            open={isPopupOpen} 
            setOpen={setIsPopupOpen} 
            this_severity= {isSuccess}
            message = {message}
            name="Diabetes"
            />
            <ResultPopUp 
            open = {isResultPopupOpen}
            setOpen={setIsResultPopupOpen}
            message={resultMessage}
            />
        </div>
        
    );
};
export default Diabetes;