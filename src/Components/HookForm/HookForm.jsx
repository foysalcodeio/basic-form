import React from 'react';

import useObjInputState from '../../Hooks/useObjInputState';

const HookForm = () => {

    // const [name, handleNameChange]  = useInputState('foysal')
    const emailState = useObjInputState('foysal ahammed')

    const handleSubmit = (e) => {
        console.log('form data', emailState.value)
        e.preventDefault();
    }
    return (
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
            
        </div>
    );
};

export default HookForm;