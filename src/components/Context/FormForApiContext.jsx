
import useHomePageContext from './getContex.jsx'

export default function FormForApiContext(){
  
    const { isLoading, error, answer } = useHomePageContext()

    return(
        <div>
          <p>{isLoading && 'Loading...'}</p>
          <p>{error && 'error...'}</p>
          <div><img src={answer} style={{width: "800px", height:"800px"}}/></div>
        </div>
    )
}