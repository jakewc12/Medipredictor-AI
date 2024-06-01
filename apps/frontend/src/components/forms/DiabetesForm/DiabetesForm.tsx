import { TextField } from "@mui/material";
import { useState } from 'react';
import Button from "@mui/material/Button";

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
    const [age, setAge] = useState('')
    const [hypertension, setHypertension] = useState(false)
    const [heartDisease, setHeartDisease] = useState(false)
    const [smokingHistory, setSmokingHistory] = useState<SmokingHistory>(SmokingHistory.No_Info)
    const [HbA1c, setHbA1c] = useState<number>()
    const [bloodGluclose, setBloodGlucose] = useState<number>()
    const [BMI, setBMI] = useState<number>();

    const [thing, setThing] = useState('')
    const [test, setTest] = useState('hehe')
    return (
    <div>{BMI}
        <br/>
        {test}
        <br/>
        <TextField
    required
    //id="outlined-required"
    label= 'required'
    defaultValue="test"
    onChange={e => {
        setThing(e.target.value)
    }}
    />
    <Button variant="contained" onClick={handleClick}>submit</Button>
    </div>
    
) ; 

}
export default DiabetesForm

