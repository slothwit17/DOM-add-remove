// function add(){
//     const addtodo = document.getElementById('gurujitodo');
//     let todo = document.createElement('li');
//     todo.innerHTML = 'todo';
//     addtodo.appendChild(todo);
// }

function removeElement(){
    const remove = document.querySelector('#gurujitodo li:last-child')
    remove.remove();
}

function newList(){
        
    var li = document.createElement("li");
    var inputAdd = document.getElementById('addElement').value;
    var text = document.createTextNode(inputAdd);
    li.appendChild(text);
    if(inputAdd == '' && inputAdd == ' '){
        alert('You must write something!')
    }
    else{
        document.getElementById("gurujitodo").appendChild(li);
    }
    document.getElementById("addElement").value = "";
}