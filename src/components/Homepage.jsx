import React, { useEffect, useState } from 'react';
import HomePageContextProvider from './Context/GetContext.jsx';
import FormForApiContext from './Context/FormForApiContext.jsx'

import HomePageContext from './Context/HomePageContext.jsx';
import ApiQuery from './ApiQiery.jsx';

export default function Homepage() {

  return (
    <HomePageContext>
    <div className='center'>
      <ApiQuery /> 
    </div>
    </HomePageContext>
  )
}




// import React, { useEffect, useState } from 'react';

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
