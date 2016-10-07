// A la variable preguntadosApp (que se comporta como un arreglo) le agregamos un arreglo (controller) 
preguntadosApp.controller('QuestionCtrl', QuestionCtrl);
  	QuestionCtrl.$inject = ['$scope', '$state', 'questionService','$stateParams', 'localStorageService'];

	function QuestionCtrl($scope, $state, questionService, $stateParams, localStorageService) {
	    $scope.tittle = 'Pregunta';
	    //$scope.answer={"value1":20, "value2":30};
	   
	    $scope.answerRadio = {"selectedRadio": "0"};

	    init();

	    function init() {
	    	var categoryId = $stateParams.categoryId;
	    	var questionArray = questionService.getQuestionCategory(categoryId);
	    	$scope.question = questionArray[0].question;
	    	$scope.answers = questionArray[0].answers;
			$scope.score = localStorageService.get('score', 0) + ' Puntos';
			$scope.showMessage = false;
	    }

		$scope.evaluateAnswer = function() {
			$scope.showMessage = false;
			if (!angular.equals($scope.answerRadio.selectedRadio, "0")) {
				$scope.correctAnswer = false;
				$scope.uncorrectAnswer = false;
				var response = questionService.isCorrectAnswer($scope.question.id, $scope.answerRadio.selectedRadio);
				var isCorrect = response[0].isCorrect;
				var scoreSaved = localStorageService.get('score', 0);
				var scoreQuestion = response[0].score;
				var totalScore = parseInt(scoreSaved) + parseInt(scoreQuestion);
				localStorageService.set('score', totalScore);

				$scope.score = totalScore + ' Puntos';

		    	if (isCorrect) {
		    		$scope.correctAnswer = true;
		    	} else {
		    		$scope.uncorrectAnswer = true;
		    	}
		    } else {
		    	$scope.message = 'Seleccione una opción';
		    	$scope.showMessage = true;
		    }
	    }

	}