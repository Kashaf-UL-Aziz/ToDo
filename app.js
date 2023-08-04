const item = document.querySelector("#item");
const todo = document.querySelector("#todoItem");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addTodo(this.value);
  }
});

const addTodo = (item) => {
  const listitem = document.createElement("div");
  listitem.innerHTML = `<div class="card">
      <h3>${item}</h3>
      <button id="delBtn"> Delete </button>
  </div>`;
  todo.appendChild(listitem);

  listitem.querySelector("#delBtn").addEventListener("click", () => {
    listitem.remove();
  });
};
