import React from 'react'

import {useState} from "react";

export default function Bulbonoff() {

    
  //const arrayState = useState(0); 
  //여기에는 실제 상태값, 상태를 변경할 수 있는 함수 이렇게 2개를 배열로 저장함.
  const [count, setCount] = useState(0); //(0) 이거는 초기값!

  console.log(count);

        return (
        <>
            <div>count : {count}</div>
            <button onClick={()=>{
                setCount(count + 1);
            }}>+1</button>
        </>
    )
}