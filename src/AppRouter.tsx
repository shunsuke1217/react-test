import { HashRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { GeminiPage } from './pages/GeminiPage'



export const AppRouter=()=>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gemini" element={<GeminiPage />} />
            </Routes>
        </HashRouter>
    )
}