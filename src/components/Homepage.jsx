import React, { useEffect, useState } from 'react';
// import ApiQuery from './ApiQiery.jsx';
import HomePageContextProvider from './Context/GetContext.jsx';
import FormForApiContext from './Context/FormForApiContext.jsx'


export default function App() {
  const [answer, setAnswer] = useState();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setIsLoading(true);
      fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => { return response.json() })
          .then((data) => {
              setAnswer(data.message);
              setIsLoading(false);
          })
          .catch((err) => setError(err.message));
  }, []);

  return (
        <HomePageContextProvider context={{
        answer,
        error,
        isLoading
        }}>
            <div className='center'>
                <div>
                <p className='center text-params'>MAIN</p>
            </div>
                <FormForApiContext/> 
            </div>
        </HomePageContextProvider> 
  )
}


//<HomePageContextProvider context={{
//         answer,
//         error,
//         isLoading
//     }}>  
    //<FormForApi/> 
//</HomePageContextProvider> 