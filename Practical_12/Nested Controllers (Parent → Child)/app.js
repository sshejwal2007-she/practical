app.controller("ParentCtrl", function($scope){
    $scope.parentData = "This is Parent Scope";
});

app.controller("ChildCtrl", function($scope){
    $scope.childData = "This is Child Scope";
});
