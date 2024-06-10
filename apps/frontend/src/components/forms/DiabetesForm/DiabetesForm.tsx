import { FormQuestionContainer, FormTextContainer, FormRadioContainer, HomeContainer } from './styles';
import { useState, useEffect } from 'react';
//import { Radio } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import NumberInputBasic from './NumberInputForm';
enum SmokingHistory {
    No_Info, 
    Never,
    Current,
    Former,
    Ever,
    Not_Current
}

interface Props {
    setIsPopupOpen: (open: boolean) => void;
  }
const DiabetesForm: React.FC<Props> = ({ setIsPopupOpen }) => {
    
    const getData = (inputs: string ) => {
        fetch('http://localhost:5000/diabetes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({inputs}),
        })
        .then(response => {
            if(!response.ok){
                console.log('failed to fetch')
                console.log(response)
            }else{
                return response.json()
            }
        }).then(data => {
            console.log(data)
            setTest(data.thing)
        }).catch(error => {
            console.log(error)
        })
    };
    const handleClick = () => {
        getData(thing)
    }
    const [gender, setGender] = useState('')
    useEffect(() => {
        console.log("Gender updated to:", gender);
      }, [gender]);
    const [age, setAge] = useState(0)
    const [hypertension, setHypertension] = useState(false)
    const [heartDisease, setHeartDisease] = useState(false)
    const [smokingHistory, setSmokingHistory] = useState<SmokingHistory>(SmokingHistory.No_Info)
    const [HbA1c, setHbA1c] = useState<number>()
    const [bloodGluclose, setBloodGlucose] = useState<number>()
    const [BMI, setBMI] = useState<number>();

    const [thing, setThing] = useState('')
    const [test, setTest] = useState('hehe')

    const handleAgeChange = (value:number | null) => {
        if (value != null) {
            setAge(value)
        }
    }
    
    return (
            <HomeContainer>
                <FormQuestionContainer>
                    <FormTextContainer>
                    Welcome to the Diabetes Predictor Form
                    </FormTextContainer>
                </FormQuestionContainer>

                <FormQuestionContainer>
                    <FormRadioContainer>
                        <FormControl>
                            <FormLabel id="gender">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="gender"
                                name="gender"
                                onChange= {
                                    (e) => {
                                        setGender(e.target.value)
                                    }
                                }
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </FormRadioContainer>
                </FormQuestionContainer>

                <FormQuestionContainer>
                    <FormTextContainer >
                        <NumberInputBasic setNumber={setAge} number={age}></NumberInputBasic>
                    </FormTextContainer>
                </FormQuestionContainer>



            </HomeContainer>
    
    
) ; 

}
export default DiabetesForm

