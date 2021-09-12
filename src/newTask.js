const dataContainer = document.getElementById("tasks_container");

export default class NewTask {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  //metodos
  addNewTaskToTasksDB() {
    //incorporar siempre las referencias del dom dentro de los metodos,
    // para que renderisen siempre que se crea un nuevo elemento
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="task_card">
    <div class="task_counter"></div>
        <h3>${this.title}</h3>
        <p class="task_description">${this.description}</p>
      </div>
    `;
    dataContainer.appendChild(div);
  }
}
