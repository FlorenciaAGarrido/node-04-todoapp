const { inquirerMenu, inquirerInput } = require('./helpers/inquirer')

const main = async() => {
    
    const option = await inquirerMenu();
    
    switch (option) {
        case 1:
            
            //TODO: hacer que el usuario pueda ingresar el titulo de la tarea
            console.log('El usuario selecciono la opcion crear tarea');

            await inquirerInput('Task Title');
                        break;
    
        case 2:

        //TODO: mostrar la lista de tareas de la base de datos
        
            break;
    }


}

main();
