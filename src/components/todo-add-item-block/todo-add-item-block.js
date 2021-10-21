import React, {Component} from 'react'

import './todo-add-item-block.css'

export default class TodoAddItemBlock extends Component {
    state = {
        label: ''
    }    
    
    
        
        onLabelChange = (event) => {
            this.setState({ 
                label: event.target.value
            })
        }

        onSubmit = (event) => {
            event.preventDefault();
            this.props.onItemAdded(this.state.label)
            this.setState({
                label: ''
            })
        }

            render() {
                return (
                    <form className="todo-add-item-type d-flex"
                        onSubmit={this.onSubmit}>
                        <input type="text"
                            placeholder="type to add"
                            className="form-control"
                            onChange={this.onLabelChange}
                            value={this.state.label}
                            />
                        <button
                            className="btn btn-outline-secondary"
                            
                            >Add item</button>
                    </form>
                )
            }
    }
