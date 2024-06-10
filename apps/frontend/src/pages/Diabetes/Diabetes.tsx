import { useState } from "react";
import DiabetesForm from "../../components/forms/DiabetesForm/DiabetesForm";
const Diabetes: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    return (
        <div>
            <DiabetesForm
                setIsPopupOpen = {setIsPopupOpen}
            />
        
        </div>
        
    );
};
export default Diabetes;