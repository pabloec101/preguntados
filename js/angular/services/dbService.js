misFinanzasApp.factory('dbService', dbService);

dbService.$inject = [];

function dbService() {
	var db = openDatabase('misFinanzasDB', '1.0', 'MisFinanzas DB', 2 * 1024 * 1024);
	var service = {
		createDbAndTables: createDbAndTables,
		insertFinanza:insertFinanza,
		getFinanzas:getFinanzas,
		removeFinanza:removeFinanza,
		removeAllFinanzas:removeAllFinanzas
	};
	return service;

//Create table
function createDbAndTables() {
	db.transaction(function (tx) {
//tx.executeSql('CREATE TABLE IF NOT EXISTS Finanzas (Finanza)');
tx.executeSql('CREATE TABLE IF NOT EXISTS MyFinanzas (id integer primary key AUTOINCREMENT, description text, value integer)');
});
};

//Insert row
function insertFinanza(finanza, successCallback, errorCallBack) {
	db.transaction(function (tx) {
		tx.executeSql('INSERT INTO MyFinanzas (description, value) VALUES (?, ?)', [finanza.description,finanza.value ], insertFinanzaComplete, insertFinanzaFailed);
	});
	function insertFinanzaComplete(transaction, results) {
		return successCallback(results);
	}
	function insertFinanzaFailed(error) {
		return errorCallBack(error);
	} 
};


//GET FINANZAS
function getFinanzas(successCallback, errorCallBack) {

	db.transaction(function(t) {
		t.executeSql("SELECT * FROM MyFinanzas", [],
			getFinanzaComplete, getFinanzaFailed);
	});

	function getFinanzaComplete(transaction, results) {
		return successCallback(results);
	}
	function getFinanzaFailed(error) {
		return errorCallBack(error);
	} 
};

//Remove Finanza
function removeFinanza(id, successCallback, errorCallback) {
	db.transaction(function (tx) {
		tx.executeSql('DELETE FROM MyFinanzas WHERE id=?', [id],
			deleteFinanzaComplete, deleteFinanzaFailed);
	});

	function deleteFinanzaComplete(transaction, results) {
		return successCallback(results);
	}
	function deleteFinanzaFailed(error) {
		return errorCallback(error);
	}
};

//Remove All finanzas
function removeAllFinanzas() {
	db.transaction(function (tx) {
		tx.executeSql('DELETE FROM MyFinanzas', []);
	});
};


}

