// A la variable preguntadosApp (que se comporta como un arreglo) le agregamos un arreglo (controller) 
preguntadosApp.controller('QuestionCtrl', QuestionCtrl);
  	QuestionCtrl.$inject = ['$scope', '$state', 'questionService','$stateParams', 'localStorageService'];

	function QuestionCtrl($scope, $state, questionService, $stateParams, localStorageService) {
	    $scope.tittle = 'Pregunta';
	    //$scope.answer={"value1":20, "value2":30};
	   
	    $scope.answerRadio = {"selectedRadio": "1"};

	    init();

	    function init() {
	    	var categoryId = $stateParams.categoryId;
	    	var questionArray = questionService.getQuestionCategory(categoryId);
	    	$scope.question = questionArray[0].question;
	    	$scope.answers = questionArray[0].answers;
			$scope.score = localStorageService.get('score', 0);
	    }

		$scope.evaluateAnswer = function() {
			var response = questionService.isCorrectAnswer($scope.question.id, $scope.answerRadio.selectedRadio);
			var isCorrect = response[0].isCorrect;
			var scoreSaved = localStorageService.get('score', 0);
			var scoreQuestion = response[0].score;
			var totalScore = parseInt(scoreSaved) + parseInt(scoreQuestion);
			localStorageService.set('score', totalScore);

			$scope.score = totalScore;

	    	if (isCorrect) {
	    		alert('Respuesta correcta');
	    	} else {
	    		alert('Respuesta incorrecta');
	    	}
	    }

	}