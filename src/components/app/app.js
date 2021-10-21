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
    ],
    term:'',
    itemStatus:'All'
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

    onItemAdded =(item) => {
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

    searchChange = (item) => {
      this.setState(({term}) => {
        return {
          term: item
        }
      })
    }

    search(items, term) {
      if (term.length ===0 ) {
        return items;
      }

      return items.filter((item) => {
        return item.label.indexOf(term) > -1;
      })
   
    }  
    
    onItemStatus = (status) => {
      this.setState(({itemStatus}) => {
        return {
          itemStatus: status
        }
      })
    }

    itemStatusFilter (items,  itemStatus) {
      switch(itemStatus) {
        case 'all':
          return items;
        case 'active':
          return items.filter((item) => !item.done)
        case 'done':
          return items.filter((item) => item.done)
        default:
          return items

      }
    }
    
    render () {
      const{todoData, term, itemStatus} = this.state
      const doneCount = todoData.filter((el)=> el.done).length;
      const todoCount = todoData.length - doneCount
      const visibleItems = this.itemStatusFilter(this.search(todoData, term), itemStatus)
     
          return (
        <div className="todo-app">
          <AppHeader doneCount={doneCount} todoCount = {todoCount}
           />
          <div className="top-panel d-flex">
            <SearchPanel 
            searchChange={this.searchChange}/>
            <ItemStatusFilter 
            itemStatus= {itemStatus}
            onItemStatus={this.onItemStatus}/>
          </div>

          <TodoList todos={visibleItems}
          onDeleted={ this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
          <div className= "todo-add-item-block">
            <TodoAddItemBlock
            onItemAdded = {this.onItemAdded} />
          </div>
        </div>
      );

    
  }
}