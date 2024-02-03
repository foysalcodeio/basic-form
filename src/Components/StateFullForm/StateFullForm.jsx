import { useState } from "react";

const StateFullForm = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length  < 6){
            setError('Password must be a 6 character')
        }
        else{
            setError('');
            console.log(name, email, password)
        }
    }

    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleName} type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StateFullForm;