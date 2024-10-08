import {useForm} from 'react-hook-form';
import {number, object, string} from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

//import './App.css'

function App() {
    const userSchema = object({
        fname: string()
            .required("Please submit first name.")
            .max(5, "Must be less than 5 characters."),
        lname: string()
            .max(5, "Must be less than 6 characters.")
            .min(1, "Must be more than 1 characters."),
        age: number()
            .positive("Must be a positive integer.")
            .max(100, "Must be 100 or less.")
            .required(),
        email: string()
            .email("Must be a valid email address.")
            .required(),
        password: string()
            .max(12, "Must be less than 12 characters.")
            .min(8, "Must be more than 8 characters.")
            .required(),
    })

    const {register, handleSubmit, setValue, reset, formState: {errors}} = useForm({
        resolver: yupResolver(userSchema),
    });

    const onSubmit = (data: unknown) => {
        console.log(data)
        reset();
    }

    const handleChange = (event) => {
        console.log(`${event.target.name}: ${event.target.value}`);
        setValue(event.target.name, event.target.value);
    }
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>
                <label htmlFor='fname'>First:</label>
                <input type="text" {...register('fname')} id='fname' onChange={handleChange}/>
                {errors.fname && <span>{errors.fname.message}</span>}
            </p>
            <p>
                <label htmlFor='lname'>Last:</label>
                <input type="text" {...register('lname')} id='lname' onChange={handleChange}/>
                {errors.lname && <span>{errors.lname.message}</span>}
            </p>
            <p>
                <label htmlFor='age'>Age:</label>
                <input type="text" {...register('age')} id='age' onChange={handleChange}/>
                {errors.age && <span>{errors.age.message}</span>}
            </p>
            <p>
                <label htmlFor='email'>Email:</label>
                <input type="email" {...register('email')} id='email' onChange={handleChange}/>
                {errors.email && <span>{errors.email.message}</span>}
            </p>
            <p>
                <label htmlFor='password'>Password:</label>
                <input type="password" {...register('password')} id='password' onChange={handleChange}/>
                {errors.password && <span>{errors.password.message}</span>}
            </p>
            <button type="submit">Submit</button>
        </form>
    </>)
}

export default App
