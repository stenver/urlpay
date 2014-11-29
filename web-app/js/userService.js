var app = angular.module('app');

app.service('UserService', function ($http, $resource) {

  var userResource = $resource("/app/users/:id", {userId:'@id'});

  this.index = function(successFn, errorFn) {
    userResource.query({}, successFn, errorFn);
    // Can also use like this:
    //$http.get("/app/users").success(successFn).error(errorFn);
  };

  this.save = function(user, successFn, errorFn){
    userResource.save(user, successFn, errorFn);
    // can also use like this:
    //$http.post("/app/users", user).success(successFn).error(errorFn)
  };

  this.delete = function(user, successFn, errorFn){
    userResource.delete(user, successFn, errorFn);
    // can also use like this:
    //$http.delete("/app/users/" + user.id).success(successFn).error(errorFn)
  };

  // Unused, left for sample
  this.query = function(user, successFn, errorFn){
    userResource.get(user, successFn, errorFn);
  };

  this.updateUser = function(user, successFn, errorFn){
    userResource.save(user, successFn, errorFn);
  };
});