let input = prompt('What would you like to do?');
const todos = [];

while(input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new task?');
        todos.push(newTodo);
        console.log(`${newTodo} has been added.`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Please enter the index to be deleted.'));
        console.log(index);
        if(!Number.isNaN(index) && todos[index]) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, ${deleted} was deleted.`);
        }  else {
            console.log('Unknown index')
        }
    }
    input = prompt('What would you like to do?')
}

console.log('You quit the app.')