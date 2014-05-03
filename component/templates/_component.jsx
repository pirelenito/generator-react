/** @jsx React.DOM */


var React = require('react');


var <%= componentfunction %> = React.createClass({
  render: function () {
    return (
      <div className='<%= componentslug %>'>

      </div>
    );
  }
});


module.exports = <%= componentfunction %>;
