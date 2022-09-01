function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => dispalyTodo(data))
}



function dispalyTodo(todos){
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        console.log(todo);
        todoDiv.innerHTML = `
            <h3>titleL ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
        `;
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos();