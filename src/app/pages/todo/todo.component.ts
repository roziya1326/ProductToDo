import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoItem } from '../../interface/TodoItem';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: TodoItem[] = [];
  newTask: string = '';
  @ViewChild('todoText') todoInputRef: ElementRef<HTMLInputElement> = null!;
  editingTask: TodoItem | null = null; // Task currently being edited

  constructor() { }

  ngOnInit(): void {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      this.todoList = JSON.parse(storedTodoList);
    }
  }

  addTask(text: string): void {
    if (text.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: text.trim(),
        completed: false
      };
      this.todoList.push(newTodoItem);
      this.todoInputRef.nativeElement.value = '';
      this.saveTodoList();
    }
  }

  deleteTask(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
    this.saveTodoList();
  }

  toggleCompleted(id: number): void {
    const todoItem = this.todoList.find(item => item.id === id);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
      this.saveTodoList();
    }
  }

  saveTodoList(): void {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
