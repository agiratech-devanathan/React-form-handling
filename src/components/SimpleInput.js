import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')

  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  //get user input value with form submission method-1
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameIsTouched(true);
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
    setEnteredName('')
    setEnteredNameIsTouched(false);
  }


  const nameInputClass = nameInputIsInvalid ? "form-control invalid" : "form-control";
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
