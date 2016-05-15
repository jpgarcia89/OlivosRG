var app=angular.module("app", ["ngRoute"]);
app.config(function($routeProvider)
{
	$routeProvider
	.when("/", 
	{
		controller: "homeCtrl",
		controllerAs: "vm",
		templateUrl: "pages/home.html"
	})            
	.when("/productos", 
	{
		controller: "productosCtrl",
		controllerAs: "vm",
		templateUrl: "pages/productos.html"
	})
	.when("/servicios", 
	{
		controller: "serviciosCtrl",
		controllerAs: "vm",
		templateUrl: "pages/servicios.html"
	})
	.when("/contactos", 
	{
		controller: "contactosCtrl",
		controllerAs: "vm",
		templateUrl: "pages/contactos.html"
	})
	.when("/successContacto", 
	{
		controller: "contactosCtrl",
		controllerAs: "vm",
		templateUrl: "pages/successContacto.html"
	});
});


