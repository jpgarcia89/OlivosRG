app.controller('contactosCtrl', function($scope,$http,$location,$window){
	
	
	$scope.incompleto = true;

	$scope.form = {};
	$scope.form.nombre='';
	$scope.form.apellido='';
	$scope.form.email='';
	$scope.form.contenido='';


	$scope.$watch('form.nombre',function() {$scope.test();});
	$scope.$watch('form.apellido',function() {$scope.test();});
	$scope.$watch('form.email', function() {$scope.test();});
	$scope.$watch('form.contenido', function() {$scope.test();});

	// $scope.$watch('form.nombre',function() {validarNombre();});
	// $scope.$watch('form.apellido',function() {validarApellido();});
	// $scope.$watch('form.email', function() {validarMail();});
	// $scope.$watch('form.contenido', function() {validarContenido();});

	$scope.test = function() 
	{
		if (validarNombre() && validarApellido() && validarMail() && validarContenido()) 
		{
			$scope.incompleto = false;
		}
		else
		{
			$scope.incompleto = true;
		}

		
	};


	$scope.enviar = function() {
		
		$http.post("php/procesarContacto.php", $scope.form)
		.success(function(res){
			console.log(res);
			$location.path("successContacto");
		});  
	}




	function validarNombre()
	{
		var nombre = $scope.form.nombre;

		if(nombre == "")
		{				
			return false;
		}

		return true;
	}

	function validarApellido()
	{
		var apellido = $scope.form.apellido;

		if(apellido == "")
		{				
			return false;
		}

		return true;
	}

	function validarContenido()
	{
		var contenido = $scope.form.contenido;

		if(contenido == "")
		{				
			return false;
		}

		return true;
	}
	

	function validarMail()
	{
		var email = $scope.form.email;

		if(email == "")
		{
			return false;
		}

		if (!isValidEmail(email)) 
		{
			return false;
		}

		return true;
	}

	function isValidEmail(mail)
	{

		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);		
	}

	
});