import './App.css';
import React, {useState} from 'react';
// import ClassCom from './basic/ClassCom';
// import Function from './basic/FuncCom';
import LeftCycle from './basic/LefeCycle';

function App() {
  const [count, setCount] = useState(1124)
  const handleClick = (e) => {
    console.log('111', e)
    setCount(count =>count + 1 )
  }
  return (
    <div className="App">
      {/* <ClassCom name="我是类组件啊"></ClassCom>
      <Function name="我是函数组件" count={count} onClick={handleClick} setCount={setCount}></Function> */}

      <LeftCycle></LeftCycle>
    </div>
  );
}

export default App;
