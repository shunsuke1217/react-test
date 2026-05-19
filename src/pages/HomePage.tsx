import { useNavigate } from 'react-router-dom'
export const HomePage=()=>{
    const navigate = useNavigate();
    return (
        <>
        <h1>HomePage</h1>
        <button onClick={()=>navigate('/gemini')}>Go to Gemini</button>
        </>
    )
}
