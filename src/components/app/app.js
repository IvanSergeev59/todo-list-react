import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import React, {Component} from 'react'
import TodoAddItemBlock from '../todo-add-item-block/todo-add-item-block';


export default class App extends Component  {
 maxId =10
 state = {
   todoData : [
    this.createTodoItem('Drink Coffee'),
    this.createTodoItem('Make Awesome App'),
    this.createTodoItem('Have a lunch')
    ]
}
   
    createTodoItem(label) {
      return {
        label,
        important:false,
        done:false,
        id:this.maxId++
      }
    }
  
    deleteItem = (id) => {
      this.setState(({todoData}) => {
        const idx = todoData.findIndex((el) => el.id=== id)
        const a = todoData.slice()
        // eslint-disable-next-line no-unused-vars
        const b = a.splice(idx,1)
      

       return {
         todoData: a
       }
      })
    }

    addItem =(item) => {
      this.setState(({todoData})=> {        
        
        const newLabel = this.createTodoItem(item)
        const newLabels= todoData.concat(newLabel)
        
      return {
        todoData:newLabels
        
      }
      })
    }
    
    onToggleImportant = (id) => {
   
    
      this.setState(({todoData}) => {
        const idx = todoData.findIndex((el) => el.id=== id)
        const oldItem = todoData[idx]
        const newItem = {...oldItem, important:!oldItem.important}
        const newItems = [
          ...todoData.slice(0, idx),
          newItem,
          ...todoData.slice(idx+1)
        ]
        
        
      
        return {
          todoData: newItems
        }
      })
    }

    onToggleDone = (id) => {
      
     
      this.setState(({todoData}) => {
        const idx = todoData.findIndex((el) => el.id=== id)
        const oldItem = todoData[idx]
        const newItem = {...oldItem, done:!oldItem.done}
        const newItems = [
          ...todoData.slice(0, idx),
          newItem,
          ...todoData.slice(idx+1)
        ]
      

        return {
          todoData:newItems
        }
      })
    }
    

    render () {
      const todoData = this.state.todoData
    
      return (
        <div className="todo-app">
          <AppHeader 
           />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>

          <TodoList todos={todoData}
          onDeleted={ this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
          <div className= "todo-add-item-block">
            <TodoAddItemBlock
            addItem = {this.addItem} />
          </div>
        </div>
      );

    
  }
}