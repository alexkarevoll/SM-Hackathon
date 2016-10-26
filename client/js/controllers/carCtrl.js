angular.module('theCarRepo')
  .controller('SingleCarController', SingleCarController)

SingleCarController.$inject = ['$stateParams', '$state', 'CarFactory']

function SingleCarController($stateParams, $state, CarFactory) {
  var vm = this

  CarFactory.show($stateParams.id)
    .success(function(car) {
      vm.car = car
      console.log(vm.car)
    })

  vm.destroyCar = function(){
    CarFactory.destroy(vm.car._id)
      .success(function(data){
        $state.go('cars')
      })
  }

  vm.editCar = function(){
    CarFactory.update($stateParams.id, vm.newCar)
      .success(function(data) {
        vm.editing = false
        $state.go('cars')
      })
  }
  // REPLACED BY THE FACTORY
  // $http.get('/api/cars/' + $stateParams.id)
  //   .success(function(car) {
  //     vm.car = car
  //     console.log(vm.car)
  //   })

}
