function HelloBtn2(){

    const message = (name) => {
        alert("HELLO! " + name + "~~");
    };

    return (
        <>
            <button onClick={() => message("112233")}>버튼입니다.</button>
        </>
    );
}

export default HelloBtn2;