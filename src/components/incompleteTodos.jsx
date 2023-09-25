import React from "react";

// 【注意！！】コンポーネント名の先頭は必ず大文字にすること。(読み込まれない)
export const IncompleteTodos = (props) => {
  const { todos, onClickComp, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key="todo" className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComp(index)}>完了</button>
              {/* 関数に値を渡す場合は、アロー関数を使う　使わないと毎回呼び出しが走る */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
