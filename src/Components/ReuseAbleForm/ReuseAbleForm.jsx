import React from 'react';

const ReuseAbleForm = ({ formTitle, handleSubmit, submitBtnText='Submit' }) => {
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }
    return (
        <form onSubmit={handleLocalSubmit}>
            <h1>{formTitle}</h1>
            <input type="text" name="name" />
            <br />
            <input type="email" name="email" />
            <br />
            <input type="password" name="password" />
            <br />
            <input type="submit" value={submitBtnText} />
        </form>
    );
};

export default ReuseAbleForm;