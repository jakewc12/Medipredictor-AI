import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { RESULTS } from '../forms/DiabetesForm/constants';

export enum state {
    success = "success",
    error = "error"
}

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  message: RESULTS[]
}

const ResultPopUp: React.FC<Props> = ({ open, setOpen, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000}
    anchorOrigin={{vertical:'top', horizontal:'center'}}
    >
      <Alert
      
        onClose={() => setOpen(false)}
        severity='info'
        variant="filled"
        sx={{ width: '100%' }}
      >
        {'Results: '} {message.map((menu)=>(menu.type + " "+ menu.result + "\n"))}
      </Alert>
    </Snackbar>
  );
};

export default ResultPopUp;
