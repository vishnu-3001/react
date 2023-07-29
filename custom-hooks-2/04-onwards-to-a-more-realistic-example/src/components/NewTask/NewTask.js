import { useCallback, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  let taskText='';
  const  [words,setWords]=useState()
  const createTask=useCallback((data)=>{
    console.log(taskText);
    const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text:words };

      props.onAddTask(createdTask);
  },[words]);

  const {isLoading,error,sendRequest:sendTasksRequest}=useHttp(createTask)

  const enterTaskHandler = async (tkText) => {
    taskText=tkText
    setWords(tkText)
    // sendTasksRequest(
    //   {url:'https://react-custom-hooks-d8ce8-default-rtdb.firebaseio.com//tasks.json',
    //   method:'POST',
    //   headers:{'Content-type':'application/json'},
    //   body:{ text: tkText }})
    
  };
  useEffect(()=>{
    sendTasksRequest(
      {url:'https://react-custom-hooks-d8ce8-default-rtdb.firebaseio.com//tasks.json',
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:{ text: words }})
  },[words]);

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
