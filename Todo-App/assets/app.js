const detailes = document.querySelector(".detailes");
const addInput = document.querySelector(".addInput");
const addBtn = document.querySelector(".addBtn");
const navItem = document.querySelectorAll(".nav-item");
const firstLi = document.querySelector("#first");
const secondLi = document.querySelector("#second");
const thridLi = document.querySelector("#thrid");
const under = document.createElement("div");
// if(JSON.parse(localStorage.getItem("lists"))===null){
//     localStorage.setItem("lists",JSON.stringify([]))
// }
firstLi.append(under);
under.classList.add("hr");
navItem.forEach((e) => {
  e.addEventListener("click", () => {
    e.append(under);
    addLine();
  });
});
function addLine() {
  under.classList.add("hr");
}
secondLi.addEventListener("click",checkAdd)
function checkAdd() {
    
}
addBtn.addEventListener("click",toDoUi);

function toDoUi() {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  detailes.append(li);
  li.append(checkbox);
  li.append(label);
  li.classList.add("detaile-list");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");
  label.textContent = addInput.value;
  addInput.value = "";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  });
  firstLi.addEventListener("click",()=>{
    li.style.display = "flex"
  })
  secondLi.addEventListener("click",()=>{
    if(checkbox.checked){
        li.style.display = "none"
    }
    if(!checkbox.checked){
        li.style.display = "flex"
    }
  })
  thridLi.addEventListener("click",()=>{
    if(!checkbox.checked){
        li.style.display = "none"
    }
    if(checkbox.checked){
        li.style.display = "flex"
    }
  })
}
