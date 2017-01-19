var app = app || {};

(function () {
  'use strict';

  let TodoItem = React.createClass({
    render: function () {
      return (
          <p>{this.props.item}</p>
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
      }
    },
    render: function () {
      var todoItems = [];
      if (this.state.todo.length !== 0) {
        var todoItems = this.state.todo.map(function (todo) {
          return (
            <TodoItem item={todo} />
          );
        }, this);
      }
      console.log(todoItems);
      return(
          <div>
            {/*<Register title={this.state.title} />*/}
            <input type="text" className="new-todo" onKeyPress={this._enterPress} />
            {/*<p>{this.state.title}</p>*/}
            {(todoItems)}
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