app.controller('productosCtrl', function($scope, $http){
	
	$scope.aceites='';
	$scope.conserva='';
	
	$http.get("php/getProductos.php")
		.success(function(res){
			// console.log(res);
			$scope.aceites=res.aceites;
			$scope.conservas=res.conservas;
			// $scope.productos = res;
			//$scope.res = res;
	});  
});