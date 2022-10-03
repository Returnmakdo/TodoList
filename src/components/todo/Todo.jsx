import React from "react";
import "./style.css";

// TodoList 박스 안에 나올 타이틀,내용,버튼들
// todo, onDeleteHanlder, onEditHandler 는 List 컴포넌트에서 받아온 props

function Todo({ todo, onDeleteHanlder, onEditHandler }) {
  // List컴포넌트에서 map을 돌린 부분
  return (
    <div className="todo-container">
      <div>
        {/* List 컴포넌트에서 받아온 todo.title, body */}
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button className="todo-delete-button button" onClick={() => onDeleteHanlder(todo.id)}>
          {/* todo.id(키)값을 받아서 분별해서 삭제 */}
          삭제하기
        </button>
        <button className="todo-complete-button button" onClick={() => onEditHandler(todo.id)}>
          {/* todo.id(키)값을 받아서 분별해서 삭제 */}
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
