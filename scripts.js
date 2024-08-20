    //se adiciona un "event listener" para cuando se cargue el contenido
    //de la pagina
document.addEventListener("DOMContentLoaded", () => {

    //se obtiene referencia a la lista dinámica
    const educacionList = document.getElementById("educacionList");

    //referencia al elemento seleccionado de la lista
    let selectedEdu = null;

    //se adiciona event listener a cada botón
    document.getElementById("addEdu").addEventListener("click", ()=>{
        const textoEdu = prompt("Ingrese una experiencia académica:");
        if(textoEdu)
        {
            //crea un nuevo elemento HTML de tipo "li"
            const nuevaEdu = document.createElement("li");
            nuevaEdu.textContent = textoEdu;
            educacionList.appendChild(nuevaEdu);
            selectTaskHandler(nuevaEdu);
        }
    });

    document.getElementById("deleteEdu").addEventListener("click", ()=>{
        if(selectedEdu)
        {
            educacionList.removeChild(selectedEdu);
            selectedEdu = null;
        }
        else{
            alert("No ha seleccionado ninguna experiencia académica para borrar");
        }
    });

    document.getElementById("editEdu").addEventListener("click", ()=>{
        if(selectedEdu)
        {
            const nuevoTextoEdu = prompt("editar la experiencia académica", selectedEdu.textContent)
            if(nuevoTextoEdu)
                {
                    selectedEdu.textContent = nuevoTextoEdu;
                }
        }
        else{
            alert("No ha seleccionado ninguna experiencia académica para editar");
        }
    
    });
    
    function selectTaskHandler(edu)
    {
        edu.addEventListener("click", ()=> {
            selectedEdu = edu;
        });
    }

});

/*-------------------------------------------------------------------------------------------------
PARTE 2 (SKILLS)
-------------------------------------------------------------------------------------------------*/

//se adiciona un "event listener" para cuando se cargue el contenido
    //de la pagina
    document.addEventListener("DOMContentLoaded", () => {

        //se obtiene referencia a la lista dinámica
        const taskList = document.getElementById("skillsList");
    
        //referencia al elemento seleccionado de la lista
        let selectedTask = null;
    
        //se adiciona event listener a cada botón
        document.getElementById("addSkill").addEventListener("click", ()=>{
            const textoTarea = prompt("Ingrese la skill:");
            if(textoTarea)
            {
                //crea un nuevo elemento HTML de tipo "li"
                const nuevaTarea = document.createElement("li");
                nuevaTarea.textContent = textoTarea;
                taskList.appendChild(nuevaTarea);
                selectTaskHandler(nuevaTarea);
            }
        });
    
        document.getElementById("deleteSkill").addEventListener("click", ()=>{
            if(selectedTask)
            {
                taskList.removeChild(selectedTask);
                selectedTask = null;
            }
            else{
                alert("No ha seleccionado ninguna skill para eliminar");
            }
        });
    
        document.getElementById("editSkill").addEventListener("click", ()=>{
            if(selectedTask)
            {
                const nuevoTexto = prompt("Modificar la skill", selectedTask.textContent)
                if(nuevoTexto)
                    {
                        selectedTask.textContent = nuevoTexto;
                    }
            }
            else{
                alert("No ha seleccionado ninguna skill para modificar");
            }
        
        });
        
        function selectTaskHandler(task)
        {
            task.addEventListener("click", ()=> {
                selectedTask = task;
            });
        }
    
    });