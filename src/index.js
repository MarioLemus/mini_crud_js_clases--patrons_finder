import NewTask from "./newTask";
import ManualCounter from "./manualCounter";

const title = document.getElementById("title");
const description = document.getElementById("description");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const data = new NewTask(title.value, description.value);
  data.addNewTaskToTasksDB();
  const count = new ManualCounter();
  count.counter();

  title.value = null;
  description.value = null;
});
