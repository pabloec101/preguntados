// A la variable preguntadosApp (que se comporta como un arreglo) le agregamos un arreglo (controller) 
preguntadosApp.controller('CategoryCtrl', CategoryCtrl);
  	CategoryCtrl.$inject = ['$scope', '$state', 'categoryService'];

	function CategoryCtrl($scope, $state, categoryService) {
	    $scope.tittle = 'Categorías';

	    init();

	    function init() {
	    	$scope.categories = categoryService.getAll();	
	    }

    	$scope.gotoDetailQuestion = function(categoryId) {
      		$state.go("questionDetail", {"categoryId": categoryId});
	    }

	}