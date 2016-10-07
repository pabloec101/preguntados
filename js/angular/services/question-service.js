// Adicionamos a preguntadosApp, questionService, para invocarlo desde los controller en donde lo necesitemos.
preguntadosApp.factory('questionService', questionService); 

questionService.$inject = [];

function questionService() {

    var service = {
        getQuestionCategory: getQuestionCategory,
        isCorrectAnswer: isCorrectAnswer
    };
    
    
    var questionList = [{"id": "1", "categoryId": "1", "image": "img/sports.png", "name": "¿Cuántos jugadores participan en un partido de fútbol?"},
                        {"id": "2", "categoryId": "2", "image": "img/art.png", "name": "¿Artista que inspiró su obra en cuerpos voluptuosos?"},
                        {"id": "3", "categoryId": "3", "image": "img/science.png", "name": "¿Elemento químico cuyo número atómico es 7?"},
                        {"id": "4", "categoryId": "4", "image": "img/geography.png", "name": "¿Capital de Uruguay?"}
    ];    
    var answersList = [{"id": "1", "questionId": "1", "name": "11", "isCorrect": false}, {"id": "2", "questionId": "1", "name": "22", "isCorrect": true}, {"id": "3", "questionId": "1", "name": "24", "isCorrect": false},
                       {"id": "4", "questionId": "2", "name": "Fernando Botero", "isCorrect": true}, {"id": "5", "questionId": "2", "name": "Pablo Picasso", "isCorrect": false}, {"id": "6", "questionId": "2", "name": "Leonardo Da Vinci", "isCorrect": false},
                       {"id": "7", "questionId": "3", "name": "Oxígeno", "isCorrect": false}, {"id": "8", "questionId": "3", "name": "Nitrógeno", "isCorrect": true}, {"id": "9", "questionId": "3", "name": "Magnesio", "isCorrect": false},
                       {"id": "10", "questionId": "4", "name": "Asunción", "isCorrect": false}, {"id": "11", "questionId": "4", "name": "Medellín", "isCorrect": false}, {"id": "12", "questionId": "4", "name": "Montevideo", "isCorrect": true}

    ]

    //var programs = [{"id": 1, "name": "El gallo", "stationId": "2"}, {"id": 2, "name": "El perezoso", "stationId": "2"}, {"id": 3, "name": "El diario", "stationId": "1"}];

    return service;

    function getQuestionCategory(categoryId) {
        var questionArray = [];
        for (var i = 0; i < questionList.length; i++) {
            var question = questionList[i];
            if(angular.equals(question.categoryId,categoryId)){
                var answersQuestion = getAnswersQuestion(question.id);
                questionArray = [{"question": question, "answers": answersQuestion}];
                
                return questionArray;
            }
        
        }

        return null;

    };

    function getAnswersQuestion(questionId) {
        var answersQuestion = [];
        for (var i = 0; i < answersList.length; i++) {
            var answer = answersList[i];
            if (angular.equals(answer.questionId, questionId)) {
                answersQuestion.push(answer);
            }
        }

        return answersQuestion;
    };

    function isCorrectAnswer(questionId, answerId) {
        var response = [];
        for (var i = 0; i < questionList.length; i++) {
            var question = questionList[i];
            if (angular.equals(question.id, questionId)) {
                var questionAnswers = getAnswersQuestion(question.id);
                for (var j = 0; j < questionAnswers.length; j++) {
                    var answer = questionAnswers[j];
                    if (answer.isCorrect) {
                        if (angular.equals(answer.id, answerId)) {
                            response = [{"isCorrect": true, "score": 20}];
                            return response;
                        }
                    }
                }
            }
        }

        response = [{"isCorrect": false, "score": 0}];
        return response;
    };

}