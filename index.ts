import axios from "axios";

const url = 'http://jsonplaceholder.typicode.com/todos/1';

//interface in typescript，可以忽略掉一些参数
//when create Todo, you create a new type.
interface Todo {
  id:number;
  title:string;
  completed:boolean
}

axios.get(url).then(response=>{
  const todo = response.data as Todo;
  const id = todo.id;
  const title= todo.title;
  const completed = todo.completed;
  //定义type后，指出方法参数的错误！
  logTodo(id,completed,title);
});

const logTodo =(id: number,title: string,completed: boolean)=>{
  console.log(`
  id: ${id}
  title: ${title}
  finished?: ${completed}
  `)
}