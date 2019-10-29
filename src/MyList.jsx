import React, { Component } from 'react';
import ListItem from './ListItem';
import './App.css';


class MyList extends Component {
  constructor(props) {
    super()
    this.state = {
      toDoItemArray: [props.theList],
      newItem: ''
    }
  }

  newItemChange(e) {
    console.log(this.newItemChange)
    this.setState({
      newItem: e.target.value
    })
  }

  clearList(e) {
    console.log('Clearing the List!')
    this.setState({
      toDoItemArray: []
    })
  }

  render(props) {

    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={'todo' + index} />
    ))
    return (
      <div className="list">
        <h1> Things I should stop procrastinating:</h1>
        <ul className="list-item">
          {todoItems}
        </ul>
        <form>
          <input type="text"
            placeholder="Type an item here"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
          />
          <button onClick={(e) => this.newItemChange(e)}>Add it!</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Finished the List!</button>
      </div>
    )
  }
}

export default MyList;
