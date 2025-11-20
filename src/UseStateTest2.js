import {useState} from "react";

export default function Color(){
    const [color, setColor] = useState("RED");
    const changeColor = (c) =>{
        console.log("changeColor" + color);
        setColor(c);
        //color = "GREEN"; // 이런식의 접근은 불가합니다!!
    }
    console.log(color);
   

    return (
        <>
            <div class='colorgroup'>
                <h3>Color is {color}</h3>
                <button type='button' onClick={()=>
                changeColor('Red')}>Red</button>
                <button type='button' onClick={()=>
                setColor('Blue')}>Blue</button>
            </div>
        </>
    )
}