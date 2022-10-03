import React, { useState } from "react";
import "./style.css";

let number = 3; // TodoList에서 만든 더미데이터상 현재 입력값은 2번이기 때문에
// TodoList 컴포넌트에서 받아온 props
function Form({ setTodos, todos }) {
  // 초기값
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  // onChangeHandler, onSubmitHandler를 사용하기 위해(변화 감지하기 위해), todo, setTodo라는 state를 만듬
  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // form안에 input전송하는 동작을 중단시킨다.
    if (todo.title.trim() === "" || todo.body.trim() === "") return alert("공백은 X"); // 버튼눌렀을때 title,body를 trim으로 앞뒤 공백제거한것이 빈값이면 return;? 뭘리턴
    // setTodos는 todos의 배열을 복사하고 추가기능
    setTodos([...todos, { ...todo, id: number }]); // 추가해주는 기능 원래있던거 +
    // setTodo는 Form의 초기값으로 설정
    setTodo(initialState);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        {/* todos라는 props를 받아온 Form컴포넌트에서 새로 todo, setTodo라고 useState를 만들어 줬기때문에 value사용을 위해 todo.title,body 사용 */}
        <input type="text" name="title" value={todo.title} className="add-input input-body" onChange={onChangeHandler} />
        <label className="form-label">내용</label>
        <input type="text" name="body" value={todo.body} className="add-input" onChange={onChangeHandler} />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
