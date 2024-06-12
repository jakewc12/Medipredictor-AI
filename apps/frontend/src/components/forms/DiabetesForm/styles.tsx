import { FormLabel } from "@mui/material";
import styled from "styled-components"

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

export const Item = styled('div')({
justifyContent: 'center',
alignItems: 'center',
display: 'flex'
})

// export const FormQuestionContainer = styled.div(() => ({
//     border: '1px',
//     alignItems: 'center',
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     boxShadow: '2px 2px 5px #ccc',
//     borderRadius: '10px',
//     margin: '1%',
//     height: '50px',
//     padding: '3%',
    
//   }));
  
export const HomeContainer = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '5%',
    overflowY: 'auto',
  }));

  export const FormQuestionContainer = styled.div(() => ({
    border: '1px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '2px 2px 5px #ccc',
    borderRadius: '5px',
    margin: '10px',
    display: 'flex',
    width: '70%',
  }));
  export const FormTextContainer = styled.div(() => ({
    padding: '3%',
  }));
  export const FormTextAnswerContainer = styled.div(() => ({
    display: 'flex',
    paddingBottom: '3%',
    width: '100%',
    justifyContent: 'center',
  }));

  export const FormRadioContainer = styled.div(()=> ({
    padding: '1%'
  }))

  export const FormAnswerContainer = styled.div(()=> ({
    borderRadius: '8px',
    paddingLeft: '50px',
    paddingRight: '50px',
    border: `1px solid ${grey[200]}`,
    boxShadow: `0px 2px 2px ${grey[50]}`, 
    display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  }))

  export const InfoText = styled.div(()=> ({
    paddingBottom: '5px',
    width: '80%',
  }))

  export const InfoHeader = styled(FormLabel)(()=> ({
    paddingTop:'10px'
  }))
