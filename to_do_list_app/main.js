const inputDate = document.getElementById("date");
const listInput = document.getElementById("listInput");
const inputBtn = document.getElementById("inputBtn");
const toDos = document.getElementById("toDos");

// Dynamic date function
const todayDate = new Date();

const daysOfWeek = ['weeks', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

day = todayDate.getDay();

let todayWeekDay = daysOfWeek[day]

todayDay = todayDate.getDate();

todayMonth = todayDate.getMonth();

todayYear = todayDate.getFullYear();

inputDate.innerText = `${todayWeekDay}, ${todayDay} / ${todayMonth} / ${todayYear}`


// function for adding the task

let toDoList = [];

const addToList = () => {
  const text =  listInput.value.trim();

  if(text) {
    toDoList.push({text: text, completed: false});
    listInput.value = "";

    updateList();
  }
}

const updateList = () => {
  toDos.innerHTML = "";

  toDoList.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <input type="checkbox" name="" class="checkbox" ${task.completed ? "checked" : ""}>
      <label for="">${toDoList.text}</label>
      <div class="todo-btns">
        <button onclick="editList(${index})"><i class="bi bi-pencil-square"></i></button>
        <button onclick="deleteList(${index})><i class="bi bi-trash3"></i></button>
      </div>
    `;

    listItem,addEventListener("change", () => toggleTakComplete(index));
    toDos.append(listItem)
  })
}

inputBtn.addEventListener("click", (e) => {
   e.preventDefault();

   addToList();
});