import React, { useEffect, useState } from 'react';
import './App.css';

// const { isLoading, data, error } = useGetRequest('https://api.com/resource')

function useCustomHook (url) {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {return response.json()})
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message))
  }, []);

  return {isLoading, data, error}
}

export default function App() {

  const {isLoading, data, error} = useCustomHook("https://dog.ceo/api/breeds/image/random")

  function YourResponse(){
    if(error != ''){
      return(
        <div>Oops... something went wrong</div>
      )
    }else{
      return (
        <div><img src={data?.message} style={{width: "800px", height:"800px"}}/></div>
      )
    }
  }

  return (
    <div className='center'>
      <p>{isLoading && 'Loading...'}</p>
      <YourResponse/>
    </div>
  )
}