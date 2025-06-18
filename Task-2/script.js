document.getElementById("form").addEventListener("submit", function(event) {
event.preventDefault();
let inputValue = this.elements["work"].value;

const element = document.getElementById("output");
const div = document.createElement("div");
const para = document.createElement("p");
para.innerHTML = inputValue;
element.appendChild(div);
div.appendChild(para);

const del = document.createElement("button");
del.innerHTML = '<i class="fa-solid fa-trash"></i>';
del.onclick = function(){
    div.remove();
}

const edit = document.createElement("button");
edit.innerHTML = '<i class="fa-solid fa-pencil"></i>';
edit.onclick = function(){
const form_edit = document.createElement("form");
const input_edit = document.createElement("input");
const submit_edit = document.createElement("input");
input_edit.type = "text";
submit_edit.type = "submit";
submit_edit.value = "Edit";
input_edit.value = inputValue;
form_edit.appendChild(input_edit);
form_edit.appendChild(submit_edit);

element.replaceChild(form_edit,div);
form_edit.addEventListener("submit", function(event_edit){
    event_edit.preventDefault();
    const newVal = input_edit.value;
    para.innerHTML = newVal;;
    inputValue = newVal;
    element.replaceChild(div, form_edit);
})
}
div.appendChild(edit);
div.appendChild(del);

this.reset();
})