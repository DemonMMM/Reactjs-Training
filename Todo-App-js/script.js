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
    const delPara = document.createElement("p");
    delPara.innerHTML = "Are You Sure?";
    div.replaceChild(delPara,para);
    delYes = document.createElement("button");
    delNo = document.createElement("button");
    delYes.innerHTML = '<i class="fa-solid fa-check"></i>';
    delNo.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    div.replaceChild(delYes,edit);
    div.replaceChild(delNo,del);

    delYes.onclick = function(){
        div.remove();
    }
    delNo.onclick = function(){
        div.replaceChild(para,delPara);
        div.replaceChild(edit,delYes);
        div.replaceChild(del,delNo);
    }
    // div.remove();
}

const edit = document.createElement("button");
edit.innerHTML = '<i class="fa-solid fa-pencil"></i>';
edit.onclick = function(){
const formEdit = document.createElement("form");
const inputEdit = document.createElement("input");
const submitEdit = document.createElement("input");
inputEdit.type = "text";
submitEdit.type = "submit";
submitEdit.value = "Edit";
inputEdit.value = inputValue;
formEdit.appendChild(inputEdit);
formEdit.appendChild(submitEdit);

element.replaceChild(formEdit,div);
formEdit.addEventListener("submit", function(event_edit){
    event_edit.preventDefault();
    const newVal = inputEdit.value;
    para.innerHTML = newVal;;
    inputValue = newVal;
    element.replaceChild(div, formEdit);
})
}
div.appendChild(edit);
div.appendChild(del);

this.reset();
})