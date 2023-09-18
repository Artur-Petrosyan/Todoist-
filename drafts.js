// const getTasks = async () => {
    //   const tasks = await getAllTasks()
    
    //   let divContent = ''
    //   tasks.forEach(item => {
    //     divContent += `
    //         <div id="${item.id}" class="singleTask">
    //         <input class='complited' type='checkbox' check=${item.is_completed}>
    //         <p> ${item.content} </p>
    //         <p class="delete"> X </p>
    //         </div>
    //   `
    //     div.innerHTML = divContent
    //   })
    //   if (tasks.length) {
    //     removeTodo()
    //   }
    // }
    // getTasks()
    
    // let AllTasks = JSON.parse(localStorage.getItem('tasks')) || []
    // // const getTasks = () => {
    // // console.log(AllTasks);
    // //   let divContent = ''
    // //   AllTasks.forEach((item) => {
    // //     divContent += `
    // // <div id="${item.id}" class="singleTask">
    // // <input class='complited' type='checkbox' check=${item.is_completed}>
    // // <p> ${item.content} </p>
    // // <p class="delete" id='${item.id}' > X </p>
    // // </div>
    // // `
    // //     div.innerHTML = divContent
    // //   })
    // // }
    // // getTasks()
    
    // function removeTodo() {
    //   const removeBtn = document.querySelectorAll('.delete')
    //   const singleTask = document.querySelectorAll('.singleTask')
     
    // removeBtn.forEach((item,i) => item.addEventListener('click',(e) => {
    //   AllTasks.splice(i,1)
    // }))
    // getTasks()
    
    // }
    
    
    // buttonCreateProject.addEventListener('click', async () => {
    //   createNewProject("Todo Project")
    // })
    
    
    
    // addTodo.addEventListener('click', async () => {
    //   const project = await getAllProjects()
    //   let id = null;
    //   project.filter((item) => item.name === 'Todo Project').forEach((item) => id = item.id)
    //   if (input.value) {
    //     const task = await createNewTask(input.value, id)
    //     input.value = ''
    //     AllTasks.push(task)
    //     localStorage.setItem("tasks", JSON.stringify(AllTasks))
    //     getTasks()
    //   }
    //   removeTodo()
    
    // })
    
    
    