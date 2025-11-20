function HelloBtn(){

    const message = () => {
        alert("HELLO!");
    };

    return (
        <>
            <button onClick={message}>버튼입니다.</button>
        </>
    );
}

export default HelloBtn;