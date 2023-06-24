import React, { useState } from 'react';
import "../App.css";

const MainContentView = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [errMsgFirstName, setErrMsgFirstName] = useState("");
    const [errMsgLastName, setErrMsgLastName] = useState("");
    const [errMsgEmail, setErrMsgEmail] = useState("");
    const [errMsgPassword, setErrMsgPassword] = useState("");

    const handleFirstNameChange = (e) => {
        const text = e.target.value;
        setFirstName(text);
        (text.length < 3) && (text.length > 0) ?
            setErrMsgFirstName("First name must be at least 3 (three) characters in length") :
            setErrMsgFirstName("");
    }

    const handleLastNameChange = (e) => {
        const text = e.target.value;
        setLastName(text);
        (text.length < 3) && (text.length > 0) ?
            setErrMsgLastName("Last name must be at least 3 (three) characters in length") :
            setErrMsgLastName("");
    }

    const handleEmailChange = e => {
        const text = e.target.value;
        setEmail(text);
        if ((text.length > 0) && (text.length < 5)) {
            setErrMsgEmail("Email must be at least 5 (five) characters in length");
        } else {
            setErrMsgEmail("");
        }
    }

    const handlePasswordChange = e => {
        const text = e.target.value;
        setPassword(text);
        ((text.length > 0) && (text.length < 8)) ?
            setErrMsgPassword("Password must be at least 8 (eight) characters in length") :
            setErrMsgPassword("");
    }

    const handleConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value);
    }

    const createUser = e => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("*** Create User ***")
        console.log(`New User: ${firstName} ${lastName}`)
        setHasBeenSubmitted(true);
    }

    return (
        <div className='flexRow'>
            {/* **** Form Area ******** */}
            <form className='col1 pad10 roundedBdr' onSubmit={createUser}>
                {/* **** Submit Message **** */}
                {
                    hasBeenSubmitted ?
                        <h3>Thanks for creating a user</h3> :
                        <h3>Welcome, please submit a user</h3>
                }
                <hr />
                {/* **** First Name **** */}
                <div className='flexRow'>
                    <label >First Name:</label>
                    <input type='text' className='inputBar' onChange={handleFirstNameChange} placeholder='Enter first name here' />
                </div>
                {
                    errMsgFirstName ?
                        <p className='warning-msg'>{errMsgFirstName}</p> :
                        <p>&nbsp;</p>
                }
                {/* **** Last Name **** */}
                <div className='flexRow'>
                    <label >Last Name:</label>
                    <input type='text' className='inputBar' onChange={handleLastNameChange} placeholder='Enter last name here' />
                </div>
                {
                    errMsgLastName ?
                        <p className='warning-msg'>{errMsgLastName}</p> :
                        <p>&nbsp;</p>
                }
                {/* **** E-mail **** */}
                <div className='flexRow'>
                    <label >E-mail:</label>
                    <input type='text' className='inputBar' onChange={handleEmailChange} placeholder='email@provider.com' />
                </div>
                {
                    errMsgEmail ?
                        <p className='warning-msg'>{errMsgEmail}</p> :
                        <p>&nbsp;</p>
                }
                {/* **** Password **** */}
                <div className='flexRow'>
                    <label >Password:</label>
                    <input type='text' className='inputBar' onChange={handlePasswordChange} placeholder='************' />
                </div>
                {
                    errMsgPassword ?
                        <p className='warning-msg'>{errMsgPassword}</p> :
                        <p>&nbsp;</p>
                }
                {/* **** Confirm Password **** */}
                <div className='flexRow'>
                    <label >Confirm Password:</label>
                    <input type='text' className='inputBar' onChange={handleConfirmPasswordChange} placeholder='************' />
                </div>
                <input type="submit" className='btn' value="Create User" />
            </form>


            {/* **** Display's user info ******** */}
            <div className='col1 pad10 roundedBdr'>
                <h3>User Info</h3>
                <hr />
                <p>
                    <span className='txtBold'>First name:</span> {firstName}
                </p>
                <p>
                    <span className='txtBold'>Last name:</span> {lastName}
                </p>
                <p>
                    <span className='txtBold'>E-mail:</span> {email}
                </p>
                <p>
                    <span className='txtBold'>Password:</span> {password}
                </p>
                <p>
                    <span className='txtBold'>Confirm Password:</span> {confirmPassword}
                </p>
            </div>
        </div>
    )
}

export default MainContentView;