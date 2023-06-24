import React, { useState } from 'react';
import "../App.css";

const MainContentView = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        console.log(`first name is ${firstName}`)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value);
    }

    const createUser = e => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        console.log("*** Create User ***")
        console.log(`New User: ${firstName} ${lastName}`)
        setHasBeenSubmitted(true);
    }

    return (
        <div className='flexRow'>
            {/* **** Form Area ******** */}
            <form className='col1 pad10 roundedBdr' onSubmit={ createUser }>
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
                <br />
                {/* **** Last Name **** */}
                <div className='flexRow'>
                    <label >Last Name:</label>
                    <input type='text' className='inputBar' onChange={handleLastNameChange} placeholder='Enter last name here'/>
                </div>
                <br />
                {/* **** E-mail **** */}
                <div className='flexRow'>
                    <label >E-mail:</label>
                    <input type='text' className='inputBar' onChange={handleEmailChange} placeholder='email@provider.com'/>
                </div>
                <br />
                {/* **** Password **** */}
                <div className='flexRow'>
                    <label >Password:</label>
                    <input type='text' className='inputBar' onChange={handlePasswordChange} placeholder='************'/>
                </div>
                <br />
                {/* **** Confirm Password **** */}
                <div className='flexRow'>
                    <label >Confirm Password:</label>
                    <input type='text' className='inputBar' onChange={handleConfirmPasswordChange} placeholder='************'/>
                </div>
                <input type="submit" className='btn' value="Create User" />
            </form>


            {/* **** Display's user info ******** */}
            <div className='col1 pad10 roundedBdr'>
                <h3>Form Info</h3>
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