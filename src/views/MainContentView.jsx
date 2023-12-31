import React, { useState, useReducer} from 'react';
import "../App.css";

const MainContentView = (props) => {

    const initialState = {
        firstName: "",
        lastName: ""
    }

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [errMsgFirstName, setErrMsgFirstName] = useState("");
    const [errMsgLastName, setErrMsgLastName] = useState("");
    const [errMsgEmail, setErrMsgEmail] = useState("");
    const [errMsgPassword, setErrMsgPassword] = useState("");
    const [errMsgPasswordConfirm, setErrMsgPasswordConfirm] = useState("");

    const reducer = (state, action) => {
        return {
            ...state,
            [action.type]: action.payload
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleFirstNameChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
        (value.length < 3) && (value.length > 0) ?
            setErrMsgFirstName("First name must be at least 3 (three) characters in length") :
            setErrMsgFirstName("");
    }
    
    const handleLastNameChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
        (value.length < 3) && (value.length > 0) ?
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
        const text = e.target.value;
        setConfirmPassword(text);
        (text == password) ?
            setErrMsgPasswordConfirm("") :
            setErrMsgPasswordConfirm("Password must match Confirm Password");
    }

    const createUser = e => {
        e.preventDefault();
        const firstName = state.firstName;
        const lastname = state.lastName;
        const newUser = {firstName, lastname};
        console.log(`*** New User created: ${state.firstName} ${state.lastName}`);
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
                <p>state: {JSON.stringify(state)}</p>
                <hr />
                {/* **** First Name **** */}
                <div className='flexRow'>
                    <label >First Name:</label>
                    <input type='text' className='inputBar' onChange={handleFirstNameChange} placeholder='Enter first name here' name='firstName' value={state.firstName} />
                </div>
                {
                    errMsgFirstName ?
                        <p className='warning-msg'>{errMsgFirstName}</p> :
                        <p>&nbsp;</p>
                }
                {/* **** Last Name **** */}
                <div className='flexRow'>
                    <label >Last Name:</label>
                    <input type='text' className='inputBar' onChange={handleLastNameChange} placeholder='Enter last name here' name='lastName' value={ state.lastName } />
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
                {
                    errMsgPasswordConfirm ?
                        <p className='warning-msg'>{errMsgPasswordConfirm}</p> :
                        <p>&nbsp;</p>
                }
                <input type="submit" className='btn' value="Create User" />
            </form>


            {/* **** Display's user info ******** */}
            <div className='col1 pad10 roundedBdr'>
                <h3>User Info</h3>
                <hr />
                <p>
                    <span className='txtBold'>First name:</span> {state.firstName}
                </p>
                <p>
                    <span className='txtBold'>Last name:</span> {state.lastName}
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