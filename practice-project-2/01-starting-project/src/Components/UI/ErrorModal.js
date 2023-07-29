import React from "react";
import classes from './ErrorModal.module.css';
import Card from "./Card";
import Button from "./Button";
import  ReactDOM  from "react-dom";
const ErrorModal=(props)=>{
    const Backdrop=(props)=>{
        return <div className={classes.backdrop} onClick={props.onClose}></div> 
    }
    const ModalOverlay=(props)=>{
        return(
            <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onClose}>Close</Button>
            </footer>
        </Card>
        )
    }

    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>,document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClose={props.onClose}></ModalOverlay>,document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export default ErrorModal