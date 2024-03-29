import './App.css';
import { useEffect, useState } from 'react';
import Board from './component/todoBoard';
// import Renderer from './component/Renderer'


// todo 적을 인풋창 + 제출 버튼
// 제출한거 표시되는 게시판
// 게시되어있는거 삭제하는 버튼
function App() {
    useEffect(() => {
        console.log('mounted!')        
    })
    const[inputValue,setinPutValue] = useState('')
    const[todoList, setTodoList] = useState([])
    const addItem = () => {
        setTodoList([...todoList, inputValue])
        //이거 찾아서 하는게 아니라 useState로 하는거누
        console.log(document.getElementById('todoinput').value)
        setinPutValue('')
    }
    return (
    <div className="App">    
    {/* <Renderer/> */}
    
    <input id='todoinput' className='todoInput' value={inputValue} type = "text"
    placeholder="니가 뭘 할 수 있는데? ㅋㅋ"
    onChange={(event) => {setinPutValue(event.target.value)}}/>
    
    <button className='submit_btn' onClick={addItem}>추가</button>
    
    <Board todoList={todoList}/>
    </div>
    );
}


export default App;
