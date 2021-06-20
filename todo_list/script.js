const add1=document.querySelector(".add_todo");
const addbutton=document.querySelector(".submit");
const list1=document.querySelector(".list");
addbutton.addEventListener('click',function(){
   const todo_Div=document.createElement("div");
   todo_Div.classList.add("todo");
   //create li
   const li_item=document.createElement("li");
   li_item.innerText=add1.value;
   li_item.classList.add("todo-item");
   const delete_but=document.createElement("button");
   delete_but.innerText="DELETE";
   delete_but.classList.add("delete-btn");
   todo_Div.appendChild(li_item);
   todo_Div.appendChild(delete_but);
   //append to list
   list1.appendChild(todo_Div);
   add1.value="";
})
list1.addEventListener("click",deleteitem);
function deleteitem(e){
    const item=e.target;
    //delete todo item
    if(item.classList[0]==='delete-btn'){
        const i=item.parentElement;
        i.remove();
    }
}