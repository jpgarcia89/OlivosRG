app.controller("navCtrl", function($scope,$location){
        var map = this;
        
        $scope.title='';
        
        $scope.estoy = function(ruta){        	
            return $location.path() == ruta;
        }

        $scope.titulo=function(titulo) {
        	$scope.title=titulo;
        }
    });