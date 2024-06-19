import React, { useState, useEffect } from 'react';
import { HomeContainer } from '../../components/forms/DiabetesForm/styles';
import { FormQuestionContainer } from '../../components/forms/DiabetesForm/styles';
import { FormTextContainer } from '../../components/forms/DiabetesForm/styles';
interface Props {
    formValues: ((values: JSON ) => void) | null
}

const ResultComponent: React.FC<Props> = ({formValues}) => {
   return (
   <div>
    {
        false && (
            <HomeContainer>
        <FormQuestionContainer>
            <FormTextContainer>
                what

            </FormTextContainer>
        </FormQuestionContainer>
    </HomeContainer>
        )
    }
   </div>
   );
  };
  
  export default ResultComponent;