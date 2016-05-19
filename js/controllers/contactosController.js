app.controller('contactosCtrl', function($scope,$http,$location,$window){
	
	$scope.form = {};
	$scope.form.nombre='';
	$scope.form.apellido='';
	$scope.form.email='';
	$scope.form.contenido='';

	$scope.enviar = function() {
		
		$http.post("php/procesarContacto.php", $scope.form)
		.success(function(res){
			console.log(res);
			$location.path("successContacto");
		});  
	}	
});