import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

// TodoList 컴포넌트에서 받아온 props
function List({ todos, setTodos }) {
  const onDeleteHanlder = (todoId) => {
    // newTodos라는 변수안에 todoId라는것과 todo.id가 일치하지않는것 filter
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    // 현재 todos 상태 변경
    setTodos(newTodos);
  };

  // 취소,완료 결정 해준 버튼 기능
  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo, // 기존 todo 배열 복사
          isDone: !todo.isDone, // 내가 누른id의 값을 반대로 바꿔줘(T/F)
        };
      } else {
        return { ...todo }; // 그게아니면 다른 todo들은 그대로 해놔라
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {/* 아래의 props들을 Todo컴포넌트에 전달 */}
        {todos.map((todo) => {
          if (!todo.isDone) {
            return <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHanlder={onDeleteHanlder} onEditHandler={onEditHandler} />;
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHanlder={onDeleteHanlder} onEditHandler={onEditHandler} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
