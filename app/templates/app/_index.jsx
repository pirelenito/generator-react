/** @jsx React.DOM */

var React = require('react');


var <%= libname %> = React.createClass({
  render: function () {
    return (
      <h1>Hello World</h1>
    );
  }
});


module.exports = <%= libname %>;
