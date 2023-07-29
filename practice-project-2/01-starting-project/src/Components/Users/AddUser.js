import Card from "../UI/Card"
import classes from './AddUser.module.css'
import Button from "../UI/Button"
import { useState,useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser=(props)=>{
    const nameInputRef=useRef();
    const ageRef=useRef();
    const [error,setError]=useState();
    const submitHandler=(event)=>{
        event.preventDefault();
        const username=nameInputRef.current.value;
        const age=ageRef.current.value;
        if(username.trim().length===0 || age.trim().length===0){
            setError({
                title:'Invalid input',
                message:'Please dont submit with empty fields, ,everything is important'
            })
            return;
        }
        if(+age<1){
            setError({
                title:'Invalid age',
                message:'Please dont play with numbers, they too have feelings'
            })
            return;
        }
        const userObj={name:username,age:+age,id:Math.random().toString()};
        props.onSubmit(userObj);
        nameInputRef.current.value='';
        ageRef.current.value='';
    }
    const errorHandler=()=>{
        setError(null)
    }
    return(
        <div>
            {error&&<ErrorModal title={error.title} message={error.message} onClose={errorHandler}></ErrorModal>}
            <Card className={classes.input}>
            <form onSubmit={submitHandler}>
            <label>Username</label>
            <input type='text' id="username" ref={nameInputRef}></input>
            <label>Age (years)</label>
            <input type='number' id='Age' ref={ageRef}></input>
            <Button type='submit' onClick={submitHandler}>Add User</Button>
        </form>
        </Card>
        </div>
    )
}
export default AddUser