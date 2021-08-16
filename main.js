let checkbox = document.getElementsByClassName('check')[0];
let textArea = document.getElementsByClassName('new-task')[0];
let newTaskBtn = document.getElementsByClassName('btn-create')[0];
let checkedNumber = document.getElementsByClassName('completed-number')[0];
let checkedAmount = 0;
let notCheckedNumber = document.getElementsByClassName('not-completed-number')[0];
let notCheckedAmount = 0;
const content = document.getElementsByClassName('content')[0];
const checkedItems = document.getElementsByClassName('checked')[0];
const notCheckedItems = document.getElementsByClassName('not-checked')[0];

let toDoS = [{
    task: "Montar To-do com HTML, CSS e JS",
    status: true
}, {
    task: "Estilizar da forma que quiser",
    status: true
},{
    task: "Todos finalizados ficam no topo da lista",
    status: true
},{
    task: "contador de todos (2/10)",
    status: true
}];


/* <div class="to-do">
<input type="checkbox" class="check">
<label class="check-text">Para Fazer</label>
</div> */

function createToDo(task, status = false) {
    let toDoDiv = document.createElement('div');
    toDoDiv.className = 'to-do';
    
    
    let taskLabel = document.createElement('label');
    taskLabel.className = 'check-text';
    taskLabel.innerText = task;
    
    
    
    let checkboxTag = document.createElement('input');
    if(status == true){
        checkboxTag.type = 'checkbox';
        checkboxTag.className = 'check checkedBox'
        checkboxTag.checked = true;
        taskLabel.style.textDecorationLine = 'line-through';
        checkedItems.appendChild(toDoDiv);
    }else{
        checkboxTag.type = 'checkbox';
        checkboxTag.className = 'check noCheckedBox';
        notCheckedItems.appendChild(toDoDiv);
    }

    toDoDiv.appendChild(checkboxTag);
    toDoDiv.appendChild(taskLabel);

    checkboxTag.addEventListener('change', () => setCheckbox(toDoDiv));
    
    
    textArea.value = "";
    setCheckedNumbers();
}

function setCheckbox(toDoDiv){
    let label = toDoDiv.getElementsByClassName("check-text")[0];
    let checkbox = toDoDiv.getElementsByClassName("check")[0];
    if(checkbox.checked){
        label.style.textDecorationLine = 'line-through';
        checkedItems.appendChild(toDoDiv);
        checkbox.className = 'check checkedBox';
    }else{
        label.style.textDecorationLine = 'none';
        notCheckedItems.appendChild(toDoDiv);
        checkbox.className = 'check noCheckedBox';
    }
    setCheckedNumbers();
}

function setCheckedNumbers(){
    checkedAmount = document.querySelectorAll('.checkedBox').length;
    checkedNumber.textContent = checkedAmount.toString();
    notCheckedAmount = document.querySelectorAll('.noCheckedBox').length;
    notCheckedNumber.textContent = notCheckedAmount.toString();
}

newTaskBtn.addEventListener('click', () => createToDo(textArea.value));

function updateTasks(){
    for(let i = 0; i < toDoS.length; i++){
        createToDo(toDoS[i].task, toDoS[i].status);
    }
}

updateTasks();
setCheckedNumbers();

createToDo("Nova Tarefa");
createToDo("Nova Tarefa 2");
createToDo("Nova Tarefa 3");
createToDo("Nova Tarefa 4");
createToDo("Nova Tarefa 5");
createToDo("Nova Tarefa 6");
