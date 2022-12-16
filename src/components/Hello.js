import Word from "./Word"
import { useState } from "react";

const Hello = ({age}) => {

    const [name, setName] = useState('Mike');
    const [increaseAge, setIncreaseAge] = useState(age);
    
    function changeName() {
        const newName = name === 'Mike' ? 'Jane' : 'Mike';
        setName(newName)
    }

    function increaseAgeageValue() {
        setIncreaseAge(increaseAge + 1)
    }
    
    function showName() {
        console.log('Mike')
    }

    function showTexts(txt) {
        console.log(txt);
    }

    function showText(e) {
        console.log(e.target.value);
    }
    return (
    <div>
        <h1>Hello</h1>
        <h2>{name}({increaseAge})</h2>
        <button onClick={() => setName(name === 'Mike' ? 'Jane' : 'Mike')}>Show name</button>
        <button onClick={increaseAgeageValue}>Show age</button>
        <input type="text" onChange={showText}></input>
        <input type="text" onChange={(e) => console.log(e.target.value)}></input>
        <input type="text" onChange={(e) => {
            const txt = e.target.value
            showTexts(txt);
        }}></input>
    </div>
    );
}

export default Hello;