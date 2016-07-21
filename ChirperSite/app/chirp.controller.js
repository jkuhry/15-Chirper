(function() {
    'use strict';

    angular
        .module('app')
        .controller('ChirpController', ChirpController);

    ChirpController.$inject = ['ChirpFactory', 'toastr'];

    /* @ngInject */
    function ChirpController(ChirpFactory, toastr) {
        var vm = this;
        vm.title = 'ChirpController';
        vm.getChirps = getChirps;
        vm.addChirps = addChirps;
        vm.getComments = getComments;
        vm.addComments = addComments;
        vm.likeChirps = likeChirps;
        vm.likeComments = likeComments
        var reverse = true;

        activate();

        ////////////////

         function activate() {
            ChirpFactory.getChirps()
                .then(function(response) {

                        vm.chirps = response.data;
                        toastr.success('Chirper has Loaded!');

                    },
                    function(error) {
                        if (typeof error === 'object') {
                            toastr.error('There was an error: ' + error.data);
                        } else {
                            toastr.info(error);
                        }
                    })
        }


        function getChirps() {
            ChirpFactory.getChirps()
                .then(function(response) {

                        vm.chirps = response.data;
                        toastr.success('Your Chirps Sent!');


                    },
                    function(error) {
                        if (typeof error === 'object') {
                            toastr.error('There was an error: ' + error.data);
                        } else {
                            toastr.info(error);
                        }
                    })
        }


        function addChirps() {
            ChirpFactory.addChirps()

            .then(function(response) {

                    vm.addChirps = response.data;
                    vm.chirps.push(vm.addChirps);
                    toastr.success('Your Chirps are good!');

                },
                function(error) {
                    if (typeof error === 'object') {
                        toastr.error('There was an error: ' + error.data);
                    } else {
                        toastr.info(error);

                         }
                    })
        }


        function getComments() {
            ChirpFactory.getComments()
                .then(function(response) {

                        vm.getComments = response.data;                       
                        toastr.success('Your Comments Posted!');


                    },

                    function(error) {
                        if (typeof error === 'object') {
                            toastr.error('There was an error: ' + error.data);
                        } else {
                            toastr.info(error);
                      }
                    })
        }
       

        function addComments() {
            ChirpFactory.addComments()
            .then(function(response) {

                    vm.addComments = response.data;
                    vm.comments.push(vm.addComments);
                    toastr.success('Comments Added!');


                },

                function(error) {
                    if (typeof error === 'object') {
                        toastr.error('There was an error: ' + error.data);
                    } else {
                        toastr.info(error);

                     }
                    })
        }


        function likeChirps() {
            ChirpFactory.likeChirps()
                .then(function(response) {

                        vm.likeChirps = response.data;                       
                        toastr.success('Chirp Liked!');


                    },
                    function(error) {
                        if (typeof error === 'object') {
                            toastr.error('There was an error: ' + error.data);
                        } else {
                            toastr.info(error);
                       }
                    })
        }


        function likeComments() {
            ChirpFactory.likeComments()
            .then(function(response) {

                    vm.likeComments = response.data;                    
                    toastr.success('Comment Liked!');

                },
                function(error) {
                    if (typeof error === 'object') {
                        toastr.error('There was an error: ' + error.data);
                    } else {
                        toastr.info(error);
                  }
                    })
        }
    
        

    
