import { useRef, useState } from 'react';

export default function LastClickTime() {

    const [message, setMessage] = useState("아직 한번도 클릭안함");
    const lastClickedAtRef = useRef(null); // 마지막 클릭 시간 저장

    const handleClick = () => {
        const now = new Date();

        if (lastClickedAtRef.current) {
            setMessage(
                `이전 클릭: ${lastClickedAtRef.current}`
            );
        } else {
            setMessage("처음 클릭!!");
        }

        // ref에는 그냥 값만 업데이트 (리렌더 X)
        lastClickedAtRef.current = now;
    };

    return (
        <div>
            <button onClick={handleClick}>클릭</button>
            <p>{message}</p>
        </div>
    );
}

