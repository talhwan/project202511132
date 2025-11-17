/*
컴포넌트 내에 컴포넌트 부를수 있음!
props 넘길때 JSON 형태 가능!
Array.map 함수 사용!
*/

function Car(props){
    return(
        <h2>I am a {props.brand}!</h2>
    );
}
function Car2(props){
    return(
        <h2>I am a {props.brand.model}!</h2>
    );
}
function Car3(props){
    return(
        <li>I am a {props.brand}!!</li>
    );
}

function Garage(props){
    let carInfo ={name : "FORD", model : "MUSTANG"};
    let carName = "Ford2";
    //let cars = ['Ford', 'Audi', 'M~'];
    let array_car = [
        { id : 1, brand : "Ford!!"}
        ,{ id : 2, brand : "Audi!1"}
        ,{ id : 3, brand : "M~!!"}
    ];
    /*
    <ol>
        {cars.map((car) => <Car3 brand={car} />)}
    </ol>
    */
    return(
        <div>
            <h1>WHo lives in my GARAGE?</h1>
            <Car brand="Ford1"/>
            <Car brand={carName} />
            <Car2 brand={carInfo} />
            <ol>
                {array_car.map((car) => <Car3 key={car.id} brand={car.brand} />)}
            </ol>
        </div>
    );
}

export default Garage;