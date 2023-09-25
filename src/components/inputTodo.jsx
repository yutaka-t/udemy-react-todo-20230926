// import React from "react";

// ※JSXにCSSを記述する際は、ルールが変わってくるので注意
//
// jscript で書くので波かっこで囲む
// 設定名のハイフン除去＋キャメルケースにする (例: border-radius -> borderRadius)
// 設定値は区オートで囲って文字列にする
// ; で終わるのではなく、オブジェクトなので , でつなげる
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

// 【注意！！】コンポーネント名の先頭は必ず大文字にすること。(読み込まれない)
export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    // <div className="input-area"> 独自CSSにしたので変更 ※jscriptなので {} で囲む
    <div style={style}>
      {/* onChangeに値を入力した時の処理(関数)を渡す */}
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
