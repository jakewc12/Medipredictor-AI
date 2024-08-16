import styled from "styled-components"



export interface RESOURCES_OPTIONS {
    link: string,
    value: Array<string>
}

export const FormQuestionContainer = styled.div(() => ({
    border: '1px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '2px 2px 5px #ccc',
    borderRadius: '5px',
    margin: '10px',
    display: 'flex',
    width: '500px',
  }));

  export const FormTextContainer = styled.div(() => ({
    padding: '3%',
  }));