app.controller('serviciosCtrl', function($scope,$http){
	
	$scope.nombre="paulo";

	$http.get("php/getServicios.php")
		.success(function(res){
			// console.log(res);
			$scope.servicios = res;
			//$scope.res = res;
	});  
});