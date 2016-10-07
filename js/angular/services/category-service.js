// Adicionamos a preguntadosApp, categoryService, para invocarlo desde los controller en donde lo necesitemos.
preguntadosApp.factory('categoryService', categoryService); 

categoryService.$inject = [];

function categoryService() {

    var service = {
        getAll: getAll
    };

    var categories = [{"id": 1, "name": "Deportes", "image": "img/sports.png"}, {"id": 2, "name": "Arte", "image": "img/art.png"}, {"id": 3, "name": "Ciencia", "image": "img/science.png"}, {"id": 4, "name": "Geografía", "image": "img/geography.png"}];
    //var programs = [{"id": 1, "name": "El gallo", "stationId": "2"}, {"id": 2, "name": "El perezoso", "stationId": "2"}, {"id": 3, "name": "El diario", "stationId": "1"}];

    return service;

    function getAll() {
    	return categories;
    };

/*    function getStationPrograms(stationId) {
        var programList = [];

        for (var i = 0; i < programs.length; i++){
            var program = programs[i];
            if(angular.equals(program.stationId,stationId)){
                programList.push(program);
            }
        
        }

        return programList;

    };
    */
}