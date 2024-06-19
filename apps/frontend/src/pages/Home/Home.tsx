import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
   const [currentTime, setCurrentTime] = useState(0)

   useEffect(() => {
      fetch('http://localhost:5000/time').then(
      res => {
         if(!res.ok) {
            console.log("Request failed")
         }
         else{
            return res.json();
         }
      }).then(data => {
         setCurrentTime(data.time)
      });
    }, []);

   return (
   <a href='https://www.nih.gov/news-events/news-releases/nih-study-finds-interventions-prevent-type-2-diabetes-give-good-return-investment'> 
      . About 7 million people have type 2 diabetes but do not know it. In addition, about 79 million adults have prediabetes, with high blood sugar levels that are not yet in the diabetic range.
   </a>
   );
  };
  
  export default Home;