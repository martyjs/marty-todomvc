var Marty = require('marty');

var Application = Marty.createApplication(function () {
  this.register('todoStore', require('./stores/TodoStore'));
  this.register('todoActions', require('./actions/TodoActions'));
});

module.exports = Application;