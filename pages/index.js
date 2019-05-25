import React, { useState } from "react";

const InputElement = () => {

    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);

    return (
        <div>
            <input
                onChange={(event) => {
                    setInputText(event.target.value)
                    setHistoryList([...historyList, event.target.value])
                }}
                placeholder="Placeholder text" />
            <br/>
            {inputText}
            <hr/><br/>
            <ul>
                {historyList.map((rec) => {
                    return <div>{rec}</div>
                })}
            </ul>
        </div>
    )
}

export default InputElement;