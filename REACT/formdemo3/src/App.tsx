//import './App.css'

import {useState} from "react";

function App() {
    const initPerson = {
        fname: "",
        lname: "",
        age: 0
    }

    const [personData, setPersonData] = useState({initPerson});

    const handleChange = (event) => {
        setPersonData({ ...personData, [event.target.name]: event.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Sending data: ", personData);
        setPersonData(initPerson);
    }
    return (
        <>
            {/* submission of form */}
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor='fname'>
                        First Name:
                        <input
                            type='text'
                            name='fname'
                            id='fname'
                            value={personData.fname}
                            onChange={handleChange}
                            required
                            minLength={3}
                            maxLength={5}
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor='lname'>
                        Last Name:
                        <input
                            type='text'
                            name='lname'
                            id='lname'
                            value={personData.lname}
                            onChange={handleChange}
                            minLength={3}
                            maxLength={5}
                            autoComplete="off"
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor='age'>
                        Age:
                        <input
                            type='number'
                            name='age'
                            id='age'
                            value={personData.age}
                            min={21}
                            max={99}
                            onChange={handleChange}
                        />
                    </label>
                </p>
                <button>Submit</button>
            </form>
        </>
    )
}

export default App
