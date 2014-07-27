// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {
  this.root('pages#main');
  this.match('ticket/list', 'ticket#list', {via: 'GET'});
  this.match('ticket/create', 'ticket#create', {via: 'POST'});
  this.match('ticket/near', 'ticket#near', {via: 'GET'});
  this.match('ticket/update', 'ticket#update', {via:'GET'});
}
