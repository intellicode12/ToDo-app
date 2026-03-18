<!DOCTYPE html>
<html>
<head>
    <title>To-Do App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1>To-Do List</h1>

        <input type="text" id="taskInput" placeholder="Enter a task">
        <button onclick="addTask()">Add</button>

        <ul id="taskList"></ul>
    </div>

    <script src="script.js"></script>
</body>
</html>

body {
    font-family: Arial;
    background: #f4f4f4;
    text-align: center;
}

.container {
    background: white;
    padding: 20px;
    margin: 50px auto;
    width: 300px;
    border-radius: 10px;
}

input {
    padding: 10px;
    width: 70%;
}

button {
    padding: 10px;
    cursor: pointer;
}

li {
    list-style: none;
    padding: 10px;
    background: #ddd;
    margin: 5px;
    cursor: pointer;
}

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    li.onclick = function () {
        this.remove();
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
