function HelloBtn3(){

    const message = (name, event) => {
        alert("HELLO! " + "!!" + event.target.id + "//" + event.type + "!!" + name + "~~");
    };

    return (
        <>
            <button id="btn_hello3" onClick={(e) => message("112233", e)}>버튼입니다.</button>
        </>
    );
}

export default HelloBtn3;