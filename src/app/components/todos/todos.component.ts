import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  inputTodo: string = '';

  constructor() {}
  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ];
  }

  toogleDone (id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }

  deleteTodo (id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    if(this.isInputEmpty()){
      return alert('Please enter a todo');
    }
    else{
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
      this.inputTodo = '';
    }
  }
  // make sure input is not empty to add todo
  isInputEmpty () {
    return this.inputTodo.length === 0;
  }
}
