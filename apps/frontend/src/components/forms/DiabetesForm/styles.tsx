import styled from "styled-components"


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