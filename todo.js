class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}

const projects = [];
const defaultProject = new Project('Default');
projects.push(defaultProject);

function saveToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function loadFromLocalStorage() {
    const data = localStorage.getItem('projects');
    if (data) {
        const loadedProjects = JSON.parse(data);
        // TODO: Convert plain objects to instances of Project and Todo
    }
}

// Call these functions when the app is loaded
loadFromLocalStorage();
// And when a new project or todo is created
saveToLocalStorage();

// DOM elements
const projectList = document.getElementById('project-list');
const todoList = document.getElementById('todo-list');

// Render projects
projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project.name;
    projectList.appendChild(li);
});

// Render todos for the first project
projects[0].todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.title;
    todoList.appendChild(li);
});
