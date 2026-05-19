import { useNavigate } from 'react-router-dom'

export const GeminiPage=()=>{
    const navigate = useNavigate();
    return(
        <>
        <h1>GeminiPage</h1>
        <button onClick={()=>navigate('/home')}>Go to Home</button>
        </>
    )

}