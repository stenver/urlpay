var app = angular.module('app');

app.controller('UserListController', function ($scope, $http, $route, $location, UserService) {

  $scope.setEditMode = function(value){
    angular.forEach($scope.users, function (user) {
      user.editmode = value;
    });
  };

  UserService.index(function (users) {
    $scope.users = users;
    $scope.setEditMode(false);
  });

  $scope.deleteUser = function(user){
    UserService.delete(user, function(){
      $scope.users.splice($scope.users.indexOf(user), 1)
    }, function(err){
      console.log("Error occured when deleting", err);
    });
  };

  $scope.editUser = function(user){
    $scope.setEditMode(false);
    user.editmode = true;
  };

  $scope.saveUser = function(name, description, age){
    var user = { name: name, description: description, age: age }
    UserService.save(user, function(){
      $scope.users.push(user);
      $scope.userName = '';
      $scope.userDescription = '';
      $scope.userAge = '';
    }, function(err){
      console.log("Error occured when saving", err);
    });
  };

  $scope.updateUser = function(user){
    UserService.updateUser(user, function(){
      $scope.setEditMode(false);
    }, function(err){
      console.log("Error occured when updating", err);
    });
  }
});

app.controller('SenderController', function ($scope, $http, $route, $location, $routeParams) {
  $scope.transfer = {
    urlHash: "SomeHash",
    amount: 1000,
    currency: "eur",
    country: "Estonia",
    creditCardNumber: "12321321231"
  };
  $scope.send = function(transfer){
    $http.port("/app/transfer", transfer).success(function(data){
      console.log("Transfer done!");
    }).error(function(err){
      console.log(err);
    });
  }
});

app.controller('ReceiveController', function ($scope, $http, $route, $location, $routeParams) {
  $http.get("/app/transfer/" + $routeParams["urlHash"])
    .success(function(data){
      $scope.transfer = data
      console.log("Got transfer!", data);
    }).error(function(err){
      console.log(err);
    });

  $scope.receive = function(transfer){
    $http.post("/app/transfer", transfer).success(function(data){
      console.log("Transfer done!");
    }).error(function(err){
      console.log(err);
    });
  }
});