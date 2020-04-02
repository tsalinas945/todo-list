let globalTodos = [];
function printTodos(){
    const ul = document.querySelector('.todos');
    let content = "";
    globalTodos.forEach(function(item){
        console.log("content", content);
        content += `<li>${item} <button onclick='remove("${item}")'> </button></li>`;
    });
    if(globalTodos.length === 0) content += "<li>No tasks added<li>"
    content = content + `<li><input type='text' onfocusout="addTodo(value)" /><li>`;
    ul.innerHTML = content;
}
function add(label){
    globalTodos.push(label);
    printTodos();
}
function remove(label){
    globalTodos = globalTodos.filter(l !== label);
    printTodos();
}

window.addTodo = addTodo;
printTodos();

