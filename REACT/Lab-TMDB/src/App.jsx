import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Results from "./components/Results.jsx";
import Error from "./components/Error.jsx"

function App() {

    return (
        <>
            <Router>
                <div className="App">
                    <div className="App-header">
                        <NavBar/>
                        {
                            <Routes>
                                <Route path="/" element={<Results/>}/>
                                <Route path="/error" element={<Error/>}/>
                            </Routes>
                        }
                    </div>
                </div>
            </Router>
        </>
    )
}

export default App
