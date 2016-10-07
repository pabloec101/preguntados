preguntadosApp.factory('localStorageService',['$window',localStorageService ]);



function localStorageService($window) {

	var service = {
		set: set,
		get: get,
		setObject: setObject,
		getObject: getObject,
		removeItem: removeItem
	};
	return service;

	function set(key, value) {
		$window.localStorage[key] = value;
	};
	function get(key, defaultValue) {
		return $window.localStorage[key] || defaultValue;
	};
	function setObject(key, value) {
		$window.localStorage[key] = JSON.stringify(value);
	};
	function getObject(key) {
		return JSON.parse($window.localStorage[key] || '{}');
	};
	function removeItem(key) {
		$window.localStorage.removeItem(key);
	};
}