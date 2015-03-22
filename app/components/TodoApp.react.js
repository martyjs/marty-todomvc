/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

var React = require('react');
var Marty = require('marty');
var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var TodoStore = require('../stores/TodoStore');

var TodoApp = React.createClass({
  render: function() {
  	return (
      <div>
        <Header />
        <MainSection
          allTodos={this.props.allTodos}
          areAllComplete={this.props.areAllComplete}
        />
        <Footer allTodos={this.props.allTodos} />
      </div>
  	);
  }
});

module.exports = Marty.createContainer(TodoApp, {
  listenTo: TodoStore,
  fetch: {
    allTodos() {
      return TodoStore.getState()
    },
    areAllComplete() {
      return TodoStore.areAllComplete()
    }
  }
});