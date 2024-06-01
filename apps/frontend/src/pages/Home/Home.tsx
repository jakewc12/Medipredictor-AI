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
   <div> This is home
      The current time is {currentTime}
   </div>
   );
  };
  
  export default Home;