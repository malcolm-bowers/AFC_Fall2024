import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Results from "./components/Results.jsx";
import Error from "./components/Error.jsx"
import LandingPage from "./components/LandingPage.jsx";

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <div className="App-header">
                        <NavBar/>
                        {
                            <Routes>
                                <Route path="/" element={<LandingPage/>}/>
                                <Route path="/results" element={<Results/>}/>
                                <Route path="/error" element={<Error/>}/>
                                <Route path="*" element={<Navigate to="/error" replace/>}/>
                            </Routes>
                        }
                    </div>
                </div>
            </Router>
        </>
    )
}

export default App
