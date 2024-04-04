
 let item = document.querySelector('#item')
 let todobox= document.querySelector(".to-do-box")
 
 item.addEventListener(
    "keyup",
    function(event){
        if(event.key =="Enter"){
            Todo(this.value)
            this.value=""
            
        }
    }
 )

  const Todo = (item)=>{
    var listitem =document.createElement(`li`);
    listitem.innerHTML=`
        ${item}
        <i class="fa fa-minus-circle"></i>
    `;
    listitem.querySelector("i").addEventListener(
        "click",
        function(){
            listitem.remove()
            updatelocalstorage();
        }
    )
    todobox.appendChild(listitem)
    updatelocalstorage();
    
  }
    function updatelocalstorage(){
        var tasks = [];
        document.querySelectorAll(".to-do-box li").forEach(function(item){
            tasks.push(item.textContent.trim())
        });
        localStorage.setItem("tasks",JSON.stringify(tasks))
    }

    window.onload = function (){
        var tasks = JSON.parse(localStorage.getItem("tasks")) || []
        tasks.forEach(function(tasks){
            Todo(tasks)
        })
    }


  
 
 

