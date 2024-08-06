 const inputDate = document.getElementById("date");
const listInput = document.getElementById("listInput");
const inputBtn = document.getElementById("inputBtn");
const toDos = document.getElementById("toDos");
const progressBar = document.getElementById("progress-bar");
const progressNum = document.getElementById("progress-num");
const praise = document.getElementById("praise");

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

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();

  addToList();
});

const addToList = () => {
  const text =  listInput.value.trim();

  if(text) {
    toDoList.push({text: text, completed: false});
    listInput.value = "";

    updateList();
    statusUpdate();
  }
}

const updateList = () => {
  toDos.innerHTML = "";

  toDoList.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <input type="checkbox" name="" class="checkbox" ${task.completed ? "checked" : ""}>
      <label for="" class="${task.completed ? "completed" : ""}">${task.text}</label>
      <div class="todo-btns">
        <button onclick="editList(${index})"><i class="bi bi-pencil-square"></i></button>
        <button onclick="deleteList(${index})"><i class="bi bi-trash3"></i></button>
      </div>
    `;

    listItem.addEventListener("change", () => toggleTaskComplete(index));

    toDos.append(listItem)
  })
}

// Function to toggle task completed or not
const toggleTaskComplete = (index) => {
  toDoList[index].completed = !toDoList[index].completed

  console.log(toDoList);

  statusUpdate();
}

// function to delete task

const deleteList = (index) => {
  toDoList.splice(index,1);

  updateList();

  statusUpdate();
}

// Function to edit task

const editList = (index) => {
  listInput.value = toDoList[index].text;

  toDoList.splice(index,1);
  updateList();

  statusUpdate();
}

// Implementing progress bar

const statusUpdate = ()=>{
  const completedTasks = toDoList.filter(list => list.completed).length;
  const totalTasks = toDoList.length;
  const progress = (completedTasks / totalTasks) * 100;

  progressBar.style.width = `${progress}%`;

  progressNum.innerText = `${completedTasks} / ${totalTasks}`

  if(progress === 0){
    praise.innerText = "Let's get some task done"
  }
  else if(progress > 0 && progress <= 25){
    praise.innerText = "Good job getting started"
  }
  else if(progress <= 49){
    praise.innerText = "Keep up the momentum"
  }
  else if(progress === 50){
    praise.innerText = "Half way through "
  }
  else if(progress <= 75){
    praise.innerText = "We are almost there "
  }
  else if(progress === 100){
    praise.innerText = "Congratulations!!! You did it"
  }
}