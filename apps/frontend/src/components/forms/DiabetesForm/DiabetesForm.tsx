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
import { state } from '../../PopUps/SubmitPopUp/SubmitPopUp';
import { SmokingHistory, SMOKING_OPTIONS, GENDER_OPTIONS, RESULTS } from './constants';

interface Props {
    setIsPopupOpen: (open: boolean) => void;
    setIsSuccess : (success: state) => void;
    setMessage: (message: string) => void;
    setResultMessage: (resultMessage: RESULTS[]) => void;
    setIsResultPopupOpen: (open: boolean) => void;
    setLoading: (loading: boolean) => void;
    isLoading: boolean
  }
const DiabetesForm: React.FC<Props> = ({ setIsPopupOpen,  setIsSuccess, setMessage, setResultMessage, setIsResultPopupOpen, setLoading, isLoading }) => {
    
    const getData = async () => {
        try {
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
        setLoading(true)
        
        const response = await fetch('http://localhost:5000/diabetes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({formValues}),
        });
        if(!response.ok){
            console.log('failed to fetch')
            console.log(response)
        }else{
            const data = await response.json()
            const messageResult:RESULTS[] = []
        Object.entries(data.result).forEach(([key, value]) => {
            const result: RESULTS={
                type: key.charAt(0).toUpperCase() + key.slice(1)+':',
                result: value as string
            }
            messageResult.push(result)
        });
        setLoading(false)
        setResultMessage(messageResult)
        setIsResultPopupOpen(true)
        console.log(data)
        return(1)
        }
    }catch(error) {
        console.log(error)
        return error
    }
    };
    const [gender, setGender] = useState('')
    
    const [age, setAge] = useState<number>()
    const [hypertension, setHypertension] = useState<boolean>()
    const [heartDisease, setHeartDisease] = useState<boolean>()
    const [smokingHistory, setSmokingHistory] = useState<SmokingHistory>(SmokingHistory.undefined)
    const [HbA1c, setHbA1c] = useState<number>()
    const [bloodGluclose, setBloodGlucose] = useState<number>()
    const [BMI, setBMI] = useState<number>();
    useEffect(() => {
        console.log("smoking updated to:", smokingHistory);
      }, [smokingHistory]);
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
                <FormLabel id="gender">Gender</FormLabel>
                    <FormRadioContainer>
                        <FormControl>
                            <FormTextContainer>
                                <FormAnswerContainer>
                                    <RadioGroup
                                        aria-labelledby="gender"
                                        name="gender"
                                        onChange= {
                                            (e) => {
                                        setGender(e.target.value)
                                            }
                                        }
                                        >
                                {GENDER_OPTIONS.map((menu)=>(<FormControlLabel value={menu.value} label={menu.label} control={<Radio/>}/>))}
                                    </RadioGroup>
                                </FormAnswerContainer>
                            </FormTextContainer>
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
                        <NumberInputBasic setNumber={setAge} number={age} name='age'></NumberInputBasic>
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
                                        {SMOKING_OPTIONS.map((menu)=> (<FormControlLabel value={menu.value} control={<Radio/>} label={menu.label}/>))}
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
                        
                        <NumberInputBasic setNumber={setBMI} number={BMI} name='BMI'></NumberInputBasic>
                    </FormTextContainer>
                </FormQuestionContainer>

                <FormQuestionContainer>
                    <FormLabel>HbA1c</FormLabel>
                        <InfoText>
                            <FormHelperText>
                            HbA1c (Hemoglobin A1c) level is a measure of a person's average blood sugar level over the past 2-3 months. 
                            </FormHelperText>
                        </InfoText>
                    <FormTextContainer>
                        
                        <NumberInputBasic setNumber={setHbA1c} number={HbA1c} name='HbA1c'></NumberInputBasic>
                    </FormTextContainer>
                </FormQuestionContainer>

                <FormQuestionContainer>
                    <FormLabel>Glucose</FormLabel>
                        <InfoText>
                            <FormHelperText>
                            Blood glucose level refers to the amount of glucose in the bloodstream at a given time.
                            </FormHelperText>
                        </InfoText>
                    <FormTextContainer>
                        
                        <NumberInputBasic setNumber={setBloodGlucose} number={bloodGluclose} name='blood glucose'></NumberInputBasic>
                    </FormTextContainer>
                </FormQuestionContainer>
                <AwesomeButton type="primary" onPress={()=> {
                    awaitData()
                }}>Submit</AwesomeButton>
            </HomeContainer>
    ) ; 
    async function awaitData() {
        setIsSuccess(state.success)
        setMessage("Form Successfully Submitted!")
        setIsPopupOpen(true)

        const response = await getData()
        
        if (response === 2) {
            setIsSuccess(state.error)
            setMessage("Form Failed to Submit! Consider checking for empty fields")
        }
        console.log(response)
        console.log(isLoading)
        window.location.assign('http://localhost:4200/diabetes-resources');
        
    }
}

export default DiabetesForm

