import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            firstName, lastName, email, password, confirmPassword
        };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
    	setEmail("");
    	setPassword("");
        setConfirmPassword("");

        setHasBeenSubmitted(true);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length == 1 || e.target.value.length == 2) {
            setFirstNameError("First name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length == 1 || e.target.value.length == 2) {
            setLastNameError("Last name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length == 1 || e.target.value.length == 2) {
            setEmailError("Email must be at least 2 characters");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length > 1 && e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length > 1 && e.target.value.length < 8) {
            setConfirmPasswordError("Password must be at least 8 characters");
        } else {
            setConfirmPasswordError("");
        }
    }
        
    return(
        <div className="App">
            <form onSubmit={ createUser }>
                {
                    hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form</h3>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" value={ firstName } onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={ lastName } onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="email" value={ email } onChange={ handleEmail } />
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={ password } onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={ confirmPassword } onChange={ handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <h2>Form Data</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>


    );
};
    
export default Form;
