import { useRef, useState } from "react";

const SimpleInput = (props) => {
//setting input reference using useRef() hook

const nameInputRef=useRef(); // methos -2
const [enteredName ,setEnteredName]=useState('')

//Another useState for checking the input is valid or not
//initially it is true
const [enteredNameIsValid, setEnteredNameIsValid]=useState(false);

const [enteredNameIsTouched, setEnteredNameIsTouched]=useState(false);

//get user input value with every key storke method-1
const nameInputChangeHandler=(event)=>{
setEnteredName(event.target.value);
}

//form submission handler
const formSubmissionHandler=event=>{
event.preventDefault();  

//here you go with useState method and checking form is valid or not 

setEnteredNameIsTouched(true)

if(enteredName.trim()===""){
  //adding the state here with false 
  setEnteredNameIsValid(false);
  return;
}
//if input is valid here
setEnteredNameIsValid(true)

console.log("name:", enteredName);

// getting value input value and assign to a variable
const enteredValue=nameInputRef.current.value;
console.log(enteredValue)
setEnteredName('')
}
const nameInputIsInvalid=!enteredNameIsValid && enteredNameIsTouched;

const nameInputClass=nameInputIsInvalid?"form-control invalid":"form-control";
  return (
          /* initializing the formSubmissionHandle */
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        {/* initializing the nameInputChangeHandler */}
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
        {/* here i'm showing the error conditionally  */}
        {nameInputIsInvalid && <p className="error-text"> Name must not br empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
