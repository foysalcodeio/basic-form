import { useEffect } from "react";
import { useRef } from "react";

const RefFrom = () => {

    const nameRef = useRef(null); // it's action e.target
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    useEffect( () => {
        nameRef.current.focus();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} defaultValue={'foysal@gmail.com'} type="email" name="email" />
                <br />
                <input ref={passwordRef} type="text" name="phone" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefFrom;