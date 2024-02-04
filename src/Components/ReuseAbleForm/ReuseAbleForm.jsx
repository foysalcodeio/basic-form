import React from 'react';

const ReuseAbleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <br />
            <input type="email" name="email" />
            <br />
            <input type="password" name="password" />
            <br />
            <input type="submit" value="submit" />
        </form>
    );
};

export default ReuseAbleForm;