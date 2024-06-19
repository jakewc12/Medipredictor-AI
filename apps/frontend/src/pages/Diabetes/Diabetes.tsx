import { useState } from "react";
import DiabetesForm from "../../components/forms/DiabetesForm/DiabetesForm";
import SubmitPopUp from "../../components/PopUps/SubmitPopUp/SubmitPopUp";
import { state } from "../../components/PopUps/SubmitPopUp/SubmitPopUp";
import { RESULTS } from "../../components/forms/DiabetesForm/constants";
import { LinearProgress } from "@mui/material";
import { red } from '@mui/material/colors';

const Diabetes: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isSuccess, setIsSuccess] = useState<state>(state.error)
    const [message, setMessage] = useState('')
    const[resultMessage, setResultMessage] = useState<RESULTS[]>([])
    const [isResultPopupOpen, setIsResultPopupOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    return (
        <div>
            {
                loading && ( <LinearProgress
                color="secondary"
                    sx={{ 
                        width: '100%' ,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                />
                  )
            }
            <DiabetesForm
                setIsPopupOpen = {setIsPopupOpen}
                setIsSuccess = {setIsSuccess}
                setMessage = {setMessage}
                setResultMessage = {setResultMessage}
                setIsResultPopupOpen = {setIsResultPopupOpen}
                setLoading = {setLoading}
            />
            <SubmitPopUp 
            open={isPopupOpen} 
            setOpen={setIsPopupOpen} 
            this_severity= {isSuccess}
            message = {message}
            name="Diabetes"
            />
            {/* <ResultPopUp 
            open = {isResultPopupOpen}
            setOpen={setIsResultPopupOpen}
            message={resultMessage}
            />
            {
                loading && ( <LinearProgress
                color="secondary"
                    sx={{ 
                        width: '100%' ,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                />
                  )
            } */}
        </div>
        
    );
};
export default Diabetes;