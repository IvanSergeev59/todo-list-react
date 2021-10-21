import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
onSearchChange = (event) => {
  console.log(event.target.value)
  const item = event.target.value
  this.props.searchChange(item)
}

render() {
  return (
    <input type="text"
              className="form-control search-input"
              placeholder="type to search"
              onChange={this.onSearchChange} />
  );
};

}
