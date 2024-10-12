import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    return (
        <>
            <Router>
                <div className="App">
                    <div className="App-header">
                        <NavBar/>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default App
