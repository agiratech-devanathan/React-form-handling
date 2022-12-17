import useInput from "../hooks/use-Input";

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  }= useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

 
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //form submission handler
  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    console.log("name:", enteredName);

//reset the form
  resetNameInput();
  resetEmailInput();

  }

//dynamic style for input fields
  const nameInputClass = nameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClass = emailInputHasError ? "form-control invalid" : "form-control";

  return (
    /* initializing the formSubmissionHandle */
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        {/* initializing the nameInputChangeHandler */}
        <input

          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName} />
        {/* here i'm showing the error conditionally  */}
        {nameInputHasError && <p className="error-text"> Name must not br empty</p>}
      </div>

      {/* Email Field */}
      <div className={emailInputClass}>
        <label htmlFor='name'>Email</label>
        {/* initializing the nameInputChangeHandler */}
        <input

          type='text'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail} />
        {/* here i'm showing the error conditionally  */}
        {emailInputHasError && <p className="error-text"> Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
