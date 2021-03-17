const Task = require('../models/task')

class TaskRepository {


    _tasks = null;
    
    constructor(){
        this._tasks = []
    }

    getAllTask() {

    }

    /**
     * 
     * @param {String} title
     *
     * TODO: Nos falta persistir datos en archivo
     *      Return en la lista de tareas
     *  
     */
    createTask(task) {
        const task = new Task(title);
        this._tasks.push(task);
        return this._tasks;
    }

    deleteTask() {

    }

    completeTask() {

    }


}