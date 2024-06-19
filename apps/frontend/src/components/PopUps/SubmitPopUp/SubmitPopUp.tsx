import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export enum state {
    success = "success",
    error = "error"
}

interface Props {
  this_severity: state
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  message: string
}

const SubmitPopUp: React.FC<Props> = ({ this_severity, open, setOpen, name, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000}>
      <Alert
        onClose={() => setOpen(false)}
        severity={state[this_severity]}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {name} {message}
      </Alert>
    </Snackbar>
  );
};

export default SubmitPopUp;
