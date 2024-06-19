import React, { useState, useEffect } from 'react';
import {
  AwesomeButton
} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import {
  FormQuestionContainer,
  FormTextContainer,
  FormRadioContainer,
  HomeContainer
} from '../DiabetesForm/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import NumberInputBasic from '../DiabetesForm/NumberInputForm';
import { FormAnswerContainer } from './styles';
import { SEX_OPTIONS, RESULTS } from './constants';

interface Props {
  setIsPopupOpen: (open: boolean) => void;
}

const HeartForm: React.FC<Props> = ({ setIsPopupOpen }) => {
  const [age, setAge] = useState<number | undefined>(0);
  const [sex, setSex] = useState<string>('');
  const [cp, setCp] = useState<number | undefined>();
  const [trestbps, setTrestbps] = useState<number | undefined>();
  const [chol, setChol] = useState<number | undefined>();
  const [fbs, setFbs] = useState<boolean | undefined>();
  const [restecg, setRestecg] = useState<number | undefined>();
  const [thalach, setThalach] = useState<number | undefined>();
  const [exang, setExang] = useState<boolean | undefined>();
  const [oldpeak, setOldPeak] = useState<number | undefined>();
  const [slope, setSlope] = useState<number | undefined>();
  const [ca, setCa] = useState<number | undefined>();
  const [thal, setThal] = useState<number | undefined>();

  const [resultMessage, setResultMessage] = useState<RESULTS[]>([]);
  const [isResultPopupOpen, setIsResultPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log("Sex updated to:", sex);
  }, [sex]);

  const formValues = {
    age,
    sex,
    cp,
    trestbps,
    chol,
    fbs,
    restecg,
    thalach,
    exang,
    oldpeak,
    slope,
    ca,
    thal,
  };

  const getData = () => {
    if (
      age === undefined ||
      sex === '' ||
      cp === undefined ||
      trestbps === undefined ||
      chol === undefined ||
      restecg === undefined ||
      thalach === undefined ||
      oldpeak === undefined ||
      slope === undefined ||
      ca === undefined ||
      thal === undefined
    ) {
      return 2;
    }

    fetch('http://localhost:5000/heart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formValues }),
    })
      .then(response => {
        if (!response.ok) {
          console.log('failed to fetch');
          console.log(response);
        } else {
          return response.json();
        }
      })
      .then(data => {
        console.log(data);
        const messageResult: RESULTS[] = [];
        Object.entries(data.result).forEach(([key, value]) => {
          const result: RESULTS = {
            type: key.charAt(0).toUpperCase() + key.slice(1) + ':',
            result: value as string,
          };
          messageResult.push(result);
        });
        setResultMessage(messageResult);
        setIsPopupOpen(true);
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCheckBoxChange = (func: (args: any) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
    func(event.target.checked);
  };

  return (
    <HomeContainer>
      <FormQuestionContainer>
        <FormTextContainer>Welcome to the Heart Disease Predictor Form</FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel id="sex">Sex</FormLabel>
        <FormRadioContainer>
          <FormControl>
            <FormTextContainer>
              <FormAnswerContainer>
                <RadioGroup
                  aria-labelledby="sex"
                  name="sex"
                  onChange={(e) => setSex(e.target.value)}
                >
                  {SEX_OPTIONS.map((menu) => (
                    <FormControlLabel key={menu.value} value={menu.value} label={menu.label} control={<Radio />} />
                  ))}
                </RadioGroup>
              </FormAnswerContainer>
            </FormTextContainer>
          </FormControl>
        </FormRadioContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel style={{ paddingTop: '2%' }} component="legend">Age</FormLabel>
        <FormTextContainer>
          <NumberInputBasic setNumber={setAge} number={age} name='age' />
        </FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel component={'legend'}>Chest Pain Type (CP)</FormLabel>
        <FormTextContainer>
          <NumberInputBasic setNumber={setCp} number={cp} name='cp' />
        </FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel component={'legend'}>Resting Blood Pressure (Trestbps)</FormLabel>
        <FormTextContainer>
          <NumberInputBasic setNumber={setTrestbps} number={trestbps} name='trestbps' />
        </FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel component={'legend'}>Serum Cholesterol (Chol)</FormLabel>
        <FormTextContainer>
          <NumberInputBasic setNumber={setChol} number={chol} name='chol' />
        </FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel component={'legend'}>Fasting Blood Sugar {'>'} 120 mg/dl (FBS)</FormLabel>
        <FormTextContainer>
          <FormControlLabel
            label='Fasting Blood Sugar'
            control={<Checkbox checked={fbs} onChange={handleCheckBoxChange(setFbs)} />}
            labelPlacement='start'
          />
        </FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel component={'legend'}>Resting Electrocardiographic Results (Restecg)</FormLabel>
        <FormTextContainer>
          <NumberInputBasic setNumber={setRestecg} number={restecg} name='restecg' />
        </FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel component={'legend'}>Maximum Heart Rate Achieved (Thalach)</FormLabel>
        <FormTextContainer>
          <NumberInputBasic setNumber={setThalach} number={thalach} name='thalach' />
        </FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel component={'legend'}>Exercise Induced Angina (Exang)</FormLabel>
        <FormTextContainer>
          <FormControlLabel
            label='Exercise Induced Angina'
            control={<Checkbox checked={exang} onChange={handleCheckBoxChange(setExang)} />}
            labelPlacement='start'
          />
        </FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel component={'legend'}>Oldpeak</FormLabel>
        <FormTextContainer>
          <NumberInputBasic setNumber={setOldPeak} number={oldpeak} name='oldpeak' />
        </FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel component={'legend'}>Slope</FormLabel>
        <FormTextContainer>
          <NumberInputBasic setNumber={setSlope} number={slope} name='slope' />
        </FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel component={'legend'}>Number of Major Vessels (Ca)</FormLabel>
        <FormTextContainer>
          <NumberInputBasic setNumber={setCa} number={ca} name='ca' />
        </FormTextContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <FormLabel component={'legend'}>Thal</FormLabel>
        <FormTextContainer>
          <NumberInputBasic setNumber={setThal} number={thal} name='thal' />
        </FormTextContainer>
      </FormQuestionContainer>

      <AwesomeButton type="primary" onPress={()=> {
                  const response = getData()
                    if (response === 2) {
                      console.log('empty fields')
                        // setIsSuccess(state.error)
                        
                        // setMessage("Form Failed to Submit! Consider checking for empty fields")
                    }else{
                        // setIsSuccess(state.success)
                        // setMessage("Form Successfully Submitted!")
                        console.log(response)
                    }
                    setIsPopupOpen(true)
        }}>Submit</AwesomeButton>
    </HomeContainer>
  );
};

export default HeartForm;