var app = angular.module("myapp", []);



app.controller('employeeController', function($scope){
  $scope.employees =
            [
              {
                name: 'Bill Mckay',
                dates : [ {start: '1/30/2014', end: '2/22/2015'},
                          {start: '4/14/2015', end: false} ]
              },
              {
                name: 'Virgil Dickerson',
                dates : [ {start: '1/30/2010', end: '2/22/2011'},
                          {start: '4/2/2011', end: '7/3/2013'},
                          {start: '4/14/2014', end: '2/7/2015'}
                      ]
              },
              {
                name: 'Happy Gilmore',
                dates : [ {start: '1/30/2002', end: '7/9/2005'},
                          {start: '10/1/2006', end: false},

                      ]
              },
              {
                name: 'Willie Nelson',
                dates : [ {start: '1/30/1965', end: '5/15/1967'},
                          {start: '2/20/1982', end: '8/20/1985'},

                      ]
              },
              {
                name: 'Cynthia Weeblos',
                dates : []

              }



              ]
  $scope.showEmployed = function(){
    var data = $scope.employees
    var employed = []
    data.forEach(function(employee){
      employee['dates'].forEach(function(dates){
        if(!dates['end']){
          employed.push(employee['name']);
        }
    })
  })

  $scope.employed = employed;
  }

  $scope.hideEmployed = function(){
    return $scope.hide = !$scope.hide
  }



})
