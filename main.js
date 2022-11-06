let idCounter= 0;
const input = document.querySelector('input[type="text"]');
userInput.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    addTask()
});

let addTask = ()=>{
    idCounter++;
    let newValue = input.value;
    list.innerHTML += ` <div class="task-container" id="${idCounter}">
            <label >
                <input type="checkbox">
               ${newValue}
            </label>
            <img src="./img/delete.png" alt="delete" class="closeBtn">

        </div>`;
    input.value='';
    updateStats();

};
list.addEventListener('click',(evento)=>{    
    if(evento.srcElement.nodeName=='INPUT'){
        updateStats();
    }else if(evento.srcElement.nodeName=='IMG'){
        deleteTask(evento.srcElement.parentNode.id);
    }
});
let updateStats= ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')
    stats.innerHTML = `<p> Tareas Pendientes: ${element.length} Completadas: ${checkbox.length}</p>`;
}
let deleteTask=(id)=>{
    let tasktoDelete= document.getElementById(id);
    list.removeChild(tasktoDelete);
    updateStats();
}