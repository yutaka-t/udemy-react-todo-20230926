import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";

export const App = () => {
  const [todoText, SetTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // onChangeは、引数を渡してくる　名前は受け取り側で任意に設定する
  // 今回は、event　という名前の変数で受け取ることとする
  // <変数名>.target.value で、入力値が取得できる
  const onChangeInput = (event) => SetTodoText(event.target.value);

  const onClickInput = () => {
    // 入力なしで追加ボタンをクリックした時の処理
    if (todoText === "") return;

    // ...<リスト> で、リストの内容を全て移行している
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    SetTodoText("");
  };

  const deleteListValue = (target_list, target_useState, del_index) => {
    const new_list = [...target_list];
    // 配列から指定箇所の値を削除する sprice(<どこから>, <いくつ>)
    new_list.splice(del_index, 1);
    target_useState(new_list);
  };

  const onClickDelete = (index) => {
    deleteListValue(incompleteTodos, setIncompleteTodos, index);
  };

  const onClickComp = (index) => {
    deleteListValue(incompleteTodos, setIncompleteTodos, index);
    const newTodos = [...completeTodos];
    setCompleteTodos([...newTodos, incompleteTodos[index]]);
  };

  const onClickBack = (index) => {
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos);
    deleteListValue(completeTodos, setCompleteTodos, index);
  };

  return (
    <>
      <InputTodo
        disabled={incompleteTodos.length >= 5}
        todoText={todoText}
        onChange={onChangeInput}
        onClick={onClickInput}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個まで</p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComp={onClickComp}
        onClickDelete={onClickDelete}
      />

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div className="list-row" key="index">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
