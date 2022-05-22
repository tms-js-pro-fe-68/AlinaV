
import ApiQuery from './ApiQiery.jsx';

export default function App() {

  return (
    <div className='center'>
        <div>
        <p className='center text-params'>MAIN</p>
            <ApiQuery /> 
        </div>
    </div>
  )
}




// import React, { useEffect, useState } from 'react';
// import { HomePageContextProvider } from './GetContext.jsx';
// import FormForApiContext from './FormForApiContext.jsx'

//   const [answer, setAnswer] = useState();
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//       setIsLoading(true);
//       fetch("https://dog.ceo/api/breeds/image/random")
//           .then((response) => { return response.json() })
//           .then((data) => {
//               setAnswer(data.message);
//               setIsLoading(false);
//           })
//           .catch((err) => setError(err.message));
//   }, []);


//<HomePageContextProvider context={{
//         answer,
//         error,
//         isLoading
//     }}>  
    //<FormForApi/> 
//</HomePageContextProvider> 
