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