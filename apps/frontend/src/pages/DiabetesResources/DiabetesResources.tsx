import React, { useState, useEffect } from 'react';
import ResultComponent from './ResultComponent';

interface Props {
    formValues: ((values: JSON ) => void) | null
}

const DiabetesResources: React.FC<Props> = ({formValues}) => {
   return (
//    <a href='https://www.nih.gov/news-events/news-releases/nih-study-finds-interventions-prevent-type-2-diabetes-give-good-return-investment'> 
//       . About 7 million people have type 2 diabetes but do not know it. In addition, about 79 million adults have prediabetes, with high blood sugar levels that are not yet in the diabetic range.
//    </a>
    <ResultComponent formValues={null}/>
   );
  };
  
  export default DiabetesResources;