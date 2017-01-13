var app = app || {};

(function () {
  'use strict';

  let Register = React.createClass({
    render: function () {
      return (
          <input
              className="new-todo"
              type="text"
              onKeyPress={this._enterPress}
          />
      );
    },
    _enterPress: function (e) {
      if (e.key === 'Enter') {
        console.log(e.target.value);
      }
    }
  });

  let Box = React.createClass({
    render: function () {
      return(
          <div>
            <Register/>
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