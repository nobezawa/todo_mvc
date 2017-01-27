var app = app || {};

(function () {
  'use strict';

  let TodoItem = React.createClass({
    getInitialState: function() {
      return {active: true};
    },
    _complete: function () {
      this.setState({active: false});
    },
    render: function () {
      let className = '';
      if (this.state.active === false) {
        className = 'completed';
      }
      return (
          <li className={className}>
            <div className="view">
            <input className="toggle" type="checkbox" onChange={this._complete}/>
            <label>{this.props.item}</label>
            <button className="destroy" onClick={this.props.onDestroy} />
            </div>
          </li>
      );
    }
  });

  let Box = React.createClass({
    getInitialState: function() {
      return {todo: app.Utils.getData()};
    },
    _enterPress: function (e) {
      if (e.key === 'Enter') {
        //console.log(e.target.value);
        this.setState({todo: app.Utils.stack(e.target.value)});
        e.target.value = '';
      }
    },
    onDestroy: function () {
      console.log('destroy');
    },
    render: function () {
      var todoItems = [];
      if (this.state.todo.length !== 0) {
        todoItems = this.state.todo.map(function (todo) {
          return (
            <TodoItem item={todo} onDestroy={this.onDestroy} />
          );
        }, this);
      }
      return(
          <div>
            {/*<Register title={this.state.title} />*/}
            <input type="text" className="new-todo" onKeyPress={this._enterPress} />
            {/*<p>{this.state.title}</p>*/}
            <ul className="todo-list">
            {(todoItems)}
            </ul>
          </div>
      );
    }
  });

  function render() {

    React.render(
      <Box/>,
      document.getElementsByClassName('todoapp')[0]
    );
  }
  render();

})();