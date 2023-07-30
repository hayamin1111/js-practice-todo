import "./styles.css";

const onClickAdd = () => {
  //テキストボックの値を取得し初期化
  const input = document.getElementById("input").value;
  document.getElementById("input").value = "";

  createIncompleteList(input);
};

//未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //ul生成
  const ul = document.createElement("ul");

  //li生成
  const li = document.createElement("li");

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  //button（完了）生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", () => {
    //親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに移動
    const addTarget = completeButton.parentNode;

    //ToDoテキストを取得
    const text = addTarget.firstElementChild.innerText;

    //liを初期化
    addTarget.textContent = null;

    //p生成
    const p = document.createElement("p");
    p.innerText = text;

    //buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    backButton.addEventListener("click", () => {
      //backボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //liの子要素に追加
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button（削除）生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    //親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  //ulの子要素のli設定
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
