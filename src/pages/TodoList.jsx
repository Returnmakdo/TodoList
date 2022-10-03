import React, { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]); // 초기에 보여질 todolist

  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} /> {/* Form 컴포넌트에 todos라는이름으로 props 내려주기, 변경값은 setTodos */}
      <List todos={todos} setTodos={setTodos} /> {/* List 컴포넌트에 todos라는이름으로 props 내려주기, 변경값은 setTodos */}
    </Layout>
  );
};

export default TodoList;
