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
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
    ]
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
        
        const newLabel = {label:item, important:false, id:this.maxId+1}
        const newLabels= todoData.concat(newLabel)
        this.maxId++
     
      
      
      return {
        todoData:newLabels
        
      }
      })
    }
    render () {
      const todoData = this.state.todoData
    
      return (
        <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>

          <TodoList todos={todoData}
          onDeleted={ this.deleteItem} />
          <div className= "todo-add-item-block">
            <TodoAddItemBlock
            addItem = {this.addItem} />
          </div>
        </div>
      );

    
  }
}