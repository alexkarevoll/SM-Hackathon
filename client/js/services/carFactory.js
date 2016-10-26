angular.module('theCarRepo')
  .factory('CarFactory', ['$http', CarFactory])

function CarFactory($http) {
  return {
    index: index,
    show: show,
    destroy: destroy,
    create : create,
    update: update
  }

  function index() {
    return $http.get('/api/cars')
  }

  function show(paramsFromCtrl) {
    return $http.get('/api/cars/' + paramsFromCtrl)
  }

  function destroy(id) {
    return $http.delete('/api/cars/' + id)
  }

  function create(newCar) {
    return $http.post('/api/cars/', newCar)
  }

  function update(id, newCar) {
    return $http.patch('/api/cars/' + id, newCar)
  }
}
