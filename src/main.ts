import './style.css';


interface Todo {
  title:string,
  readonly id:string
  isComplete:boolean
};


// creating the todo array
const todos:Todo[]=[];

//target the tags :
  // input tag 
    const titleValue = document.getElementById('title') as HTMLInputElement;

    // items container :
    const itemContainer = document.querySelector('.items') as HTMLDivElement;



    // target the form 


    const todoForm = document.getElementById('todoForm') as HTMLFormElement;


//form submit:
todoForm.onsubmit=(e:SubmitEvent)=>{
  e.preventDefault();

  const todo:Todo={
    title:titleValue.value,
    isComplete:false,
    id:String(Math.random()*1000)
  };


  todos.push(todo);


  //render the todo items :

  renderTodo(todos);

  titleValue.value="";

}

const renderTodo = (todos:Todo[])=>{
  itemContainer.innerText = "";
  todos.forEach((item)=>{

    //creating the elements 
    const div:HTMLDivElement= document.createElement('div');
    const  checkbox:HTMLInputElement = document.createElement('input');
    checkbox.setAttribute("type","checkbox");
    checkbox.className ="checkbox";
    checkbox.onchange =()=>{
      p.className = checkbox.checked?"cutLine":"";
      checkbox.checked?item.isComplete = true:item.isComplete=false;
    };
   

    const p:HTMLParagraphElement =document.createElement('p');

    const h3:HTMLHeadingElement = document.createElement('h3');

    const span:HTMLSpanElement = document.createElement('span');


    p.className = item.isComplete?"cutLine":"";
    checkbox.checked =item.isComplete === true;

    //  todo item delte :
    h3.onclick= ()=>{
      todoItemDelete(item.id);
    }

    // apending the datas :
    p.innerText=item.title;
  
    h3.innerText="X";
    span.innerText = "delete";
    div.append(checkbox,p,h3,span);
    itemContainer.append(div);
  })
}


// delte the todo item

const todoItemDelete=(id:string)=>{
  const idx:number = todos.findIndex((item)=>item.id==id);
  todos.splice(idx,1);
  renderTodo(todos);
}



    







  