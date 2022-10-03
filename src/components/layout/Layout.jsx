import React from "react";
import "./style.css";

const Layout = (props) => {
  // Layout으로 Header, Form, List를 감싸고 있기때문에 부모의 역할을 할 수있다.
  // 그래서 children은 Header, Form, List를 뜻한다.
  return <div className="layout">{props.children}</div>;
};

export default Layout;
