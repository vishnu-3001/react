import React from "react";
import { useEffect,useState } from "react";
const useCounter=(forward=true)=>{
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(forward===true){
            setCounter((prevCounter) => prevCounter + 1);
        }
        else if(forward===false){
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);
  return counter;
}
export default useCounter