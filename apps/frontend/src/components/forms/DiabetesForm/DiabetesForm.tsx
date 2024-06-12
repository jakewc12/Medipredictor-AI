import { FormQuestionContainer, FormTextContainer, FormRadioContainer, HomeContainer, FormAnswerContainer, InfoText, InfoHeader } from './styles';
import { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import NumberInputBasic from './NumberInputForm';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { FormGroup, FormHelperText } from '@mui/material';
import {
    AwesomeButton
  } from 'react-awesome-button';
  import 'react-awesome-button/dist/styles.css';
import { state } from '../../SubmitPopUp/SubmitPopUp';
enum SmokingHistory {
    undefined = 'undefined',
    No_Info = "No_Info", 
    Never = "Never",
    Current = "Current",
    Former = "Former",
    Ever = "Ever",
    Not_Current = "Not_Current"
}

interface Props {
    setIsPopupOpen: (open: boolean) => void;
    setIsSuccess : (success: state) => void;
    setMessage: (message: string) => void;
  }
const DiabetesForm: React.FC<Props> = ({ setIsPopupOpen,  setIsSuccess, setMessage }) => {
    
    const getData = () => {
        if (
            gender === '' ||
            age === undefined ||
            smokingHistory === SmokingHistory.undefined ||
            HbA1c === undefined ||
            bloodGluclose === undefined ||
            BMI === undefined
        ){
            return 2
        }

        const formValues = {
            gender,
            age,
            hypertension,
            heartDisease,
            SmokingHistory: SmokingHistory[smokingHistory],
            HbA1c,
            bloodGluclose,
            BMI: BMI
        }
        fetch('http://localhost:5000/diabetes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({formValues}),
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
            setResult(data.thing)
            return(data)
        }).catch(error => {
            console.log(error)
        })
    };
    const [gender, setGender] = useState('')
    useEffect(() => {
        console.log("Gender updated to:", gender);
      }, [gender]);
    const [age, setAge] = useState<number>()
    const [hypertension, setHypertension] = useState<boolean>()
    const [heartDisease, setHeartDisease] = useState<boolean>()
    const [smokingHistory, setSmokingHistory] = useState<SmokingHistory>(SmokingHistory.undefined)
    const [HbA1c, setHbA1c] = useState<number>()
    const [bloodGluclose, setBloodGlucose] = useState<number>()
    const [BMI, setBMI] = useState<number>();

    const [result, setResult] = useState(0)
    const handleCheckBoxChange = (func: (args:any) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
        func(event.target.checked)
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
                <FormLabel 
                style={{
                    paddingTop:'2%'
                }}
                component="legend">Age</FormLabel>
                <FormHelperText>Age is an important factor as diabetes is more commonly diagnosed in older adults.</FormHelperText>
                    <FormTextContainer >
                        <NumberInputBasic setNumber={setAge} number={age}></NumberInputBasic>
                    </FormTextContainer>
                </FormQuestionContainer>
                
                <FormQuestionContainer>
                    <FormLabel component={'legend'}>Relevant Health Conditions</FormLabel>
                    <InfoText>
                        <FormHelperText>Hypertension is a medical condition in which the blood pressure in the arteries is persistently elevated.</FormHelperText>
                        <FormHelperText>Heart disease is another medical condition that is associated with an increased risk of developing diabetes.</FormHelperText>
                    </InfoText>
                    <FormTextContainer>
                    
                        <FormAnswerContainer>
                            <FormGroup>
                                <FormControlLabel
                                    label='Hypertension'
                                    control={<Checkbox
                                    checked= { hypertension}
                                    onChange={handleCheckBoxChange(setHypertension)}  
                                    sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                    }}
                                    />}
                                    labelPlacement='start'
                                    />
                                <FormControlLabel
                                    label='Heart Disease'
                                    control={<Checkbox
                                    checked= { heartDisease}
                                    onChange={handleCheckBoxChange(setHeartDisease)}  
                                />}
                                labelPlacement='start'
                                />
                                </FormGroup>
                            </FormAnswerContainer>
                    </FormTextContainer>
                </FormQuestionContainer>

                <FormQuestionContainer>
                <FormLabel component={'legend'}>Smoking History</FormLabel>
                            <InfoText>
                                <FormHelperText>Smoking history is also considered a risk factor for diabetes and can exacerbate the complications associated</FormHelperText>
                            </InfoText>
                    <FormTextContainer>
                        <FormControl>
                            
                                <FormAnswerContainer>
                                    <RadioGroup
                                        aria-labelledby="smoking-history"
                                        name="smoking"
                                        onChange= {
                                            (e) => {
                                                setSmokingHistory(e.target.value as SmokingHistory)
                                            }
                                        }>
                                        <FormControlLabel value="No_Info" control={<Radio />} label="No Info" />
                                        <FormControlLabel value="Never" control={<Radio />} label="Never" />
                                        <FormControlLabel value="Current" control={<Radio />} label="Current" />
                                        <FormControlLabel value="Former" control={<Radio />} label="Former" />
                                        <FormControlLabel value="Ever" control={<Radio />} label="Ever" />
                                        <FormControlLabel value="Not_Current" control={<Radio />} label="Not Current" />
                                    </RadioGroup>
                                </FormAnswerContainer>
                            </FormControl>
                        </FormTextContainer>
                    </FormQuestionContainer>

                <FormQuestionContainer>
                    <FormLabel>BMI</FormLabel>
                        <InfoText>
                            <FormHelperText>
                            BMI (Body Mass Index) is a measure of body fat based on weight and height. Higher BMI values are linked to a higher risk
                            </FormHelperText>
                        </InfoText>
                    <FormTextContainer>
                        
                        <NumberInputBasic setNumber={setBMI} number={BMI}></NumberInputBasic>
                    </FormTextContainer>
                </FormQuestionContainer>

                <FormQuestionContainer>
                    <FormLabel>HbA1c</FormLabel>
                        <InfoText>
                            <FormHelperText>
                            something abt HbA1c
                            </FormHelperText>
                        </InfoText>
                    <FormTextContainer>
                        
                        <NumberInputBasic setNumber={setHbA1c} number={HbA1c}></NumberInputBasic>
                    </FormTextContainer>
                </FormQuestionContainer>

                <FormQuestionContainer>
                    <FormLabel>Glucose</FormLabel>
                        <InfoText>
                            <FormHelperText>
                            smth abt glucose
                            </FormHelperText>
                        </InfoText>
                    <FormTextContainer>
                        
                        <NumberInputBasic setNumber={setBloodGlucose} number={bloodGluclose}></NumberInputBasic>
                    </FormTextContainer>
                </FormQuestionContainer>

                <AwesomeButton type="primary" onPress={()=> {
                    const response = getData()
                    if (response === 2) {
                        setIsSuccess(state.error)
                        
                        setMessage("Form Failed to Submit! Consider checking for empty fields")
                    }else{
                        setIsSuccess(state.success)
                        setMessage("Form Successfully Submitted!")
                        console.log(response)
                    }
                    setIsPopupOpen(true)
                }}>Submit</AwesomeButton>
            </HomeContainer>
    ) ; 
}
export default DiabetesForm

