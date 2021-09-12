export default class ManualCounter {
  counter() {
    const counter = document.querySelectorAll(".task_counter");
    counter.forEach((item) => {
      let i = 1;
      item.addEventListener("click", () => {
        item.innerHTML = `${i++}`;
      });
    });
  }
}
