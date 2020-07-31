import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo-list';
  todos = [
  {
     label:'Bring milk', 
     done: false, 
     priority: 3
},
{
  label:'Pay mobile bill', 
  done: true, 
  priority: 1
},
{
  label:'Go to Mc Donalds', 
  done: false, 
  priority: 4
},
{
  label:'Clean house', 
  done: false, 
  priority: 5
}
  ];
  addTodo(newTodolabel) {
    var newTodo = {
      label:newTodolabel,
      priority:1,
      done:false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo) {
    this.todos =this.todos.filter( t => t.label !== todo.label);
  }
}