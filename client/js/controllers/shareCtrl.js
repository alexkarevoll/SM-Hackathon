angular.module('theCarRepo')
  .controller('ShareController', ShareController)

ShareController.$inject = ['$state', 'CarFactory']

function ShareController($state, CarFactory) {
  var vm = this

  vm.createCar = function(){
    CarFactory.create(vm.newCar)
      .success(function(data) {
        $state.go('cars')
      })
  }
}
