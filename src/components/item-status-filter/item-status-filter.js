import React, {Component} from 'react';

import './item-status-filter.css';

export class ItemStatusFilter extends Component {
  buttons = [
    {name: 'all', label:'All'},
    {name: 'active', label:'Active'},
    {name: 'done', label:'Done'}
  ]
  
  render () {
    const {itemStatus, onItemStatus} = this.props
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = itemStatus === name
      console.log(itemStatus)
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button 
        key={name}
        type="button"
        className={`btn ${clazz}`}
        onClick={() => onItemStatus(name)}
        >{label}
        </button>
      )
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}





export default ItemStatusFilter;
