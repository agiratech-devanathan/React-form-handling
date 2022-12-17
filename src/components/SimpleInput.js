import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //get user input value with form submission method-1
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameIsTouched(true);
  }

  const emailInputBlurHandler = event => {
    setEnteredEmailIsTouched(true);
  }

  //form submission handler
  const formSubmissionHandler = event => {
    event.preventDefault();
    //here you go with useState method and checking form is valid or not 
    setEnteredNameIsTouched(true)
    if (!enteredNameIsValid) {
      return;
    }
    console.log("name:", enteredName);

//reset the form
    setEnteredName('')
    setEnteredNameIsTouched(false);

    setEnteredEmail('')
    setEnteredEmailIsTouched(false);
  }

//dynamic style for input fields
  const nameInputClass = nameInputIsInvalid ? "form-control invalid" : "form-control";
  const emailInputClass = enteredEmailInputIsInvalid ? "form-control invalid" : "form-control";

  return (
    /* initializing the formSubmissionHandle */
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        {/* initializing the nameInputChangeHandler */}
        <input

          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName} />
        {/* here i'm showing the error conditionally  */}
        {nameInputIsInvalid && <p className="error-text"> Name must not br empty</p>}
      </div>

      {/* Email Field */}
      <div className={emailInputClass}>
        <label htmlFor='name'>Email</label>
        {/* initializing the nameInputChangeHandler */}
        <input

          type='text'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail} />
        {/* here i'm showing the error conditionally  */}
        {enteredEmailInputIsInvalid && <p className="error-text"> Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
