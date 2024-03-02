import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(inputs));

        navigate('/home', { state: { username: inputs.username } });
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username
                <input type="text" 
                name='username'
                value={inputs.username || ""} 
                onChange={handleChange}/>
            </label>

            <label>Password
                <input type="text" 
                name='password'
                value={inputs.password || ""} 
                onChange={handleChange}/>
            </label>

            <input type="submit" value='Login'/>
        </form>
    );
}

export default Login;
