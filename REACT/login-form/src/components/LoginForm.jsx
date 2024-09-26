import {useState} from 'react';

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <form className="form">
            <input type="email" id="email" placeholder="Enter your email" />
            Password:
            <input type={showPassword ? "text" : "password" } id="password" placeholder="Enter your password" />
            <input type="checkbox" name="" id="" onChange={handleShowPassword}/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm