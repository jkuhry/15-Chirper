(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['authFactory', '$stateParams', 'toastr'];

    /* @ngInject */
    function loginController(authFactory, $state, $stateParams, toastr) {
        var vm = this;
        vm.title = 'loginController';

        //
        vm.loading = true;
        vm.login = $stateParams.login;

        vm.state = $state.current
        vm.params = $stateParams;

        activate();


            function activate() {
                authFactory.login(vm.username, vm.password)
                    .then(
                        function(response) {
                            $state.go('chirp');
                        },
                        function(message) {
                            toastr.warning(message);
                        }
                    );
            }

            } 
    }
})();