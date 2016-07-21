(function() {
    'use strict';

    angular
        .module('app')
        .factory('ChirpFactory', ChirpFactory);

    ChirpFactory.$inject = ['$http', 'apiUrl', '$q', 'toastr'];

    /* @ngInject */
    function ChirpFactory($http, apiUrl, $q, toastr) {
      
        var service = {
            getChirps: getChirps,
            addChirps: addChirps,
            getComments: getComments,
            addComments: addComments,
            likeChirps: likeChirps,
            likeComments: likeComments
        };
        return service;

        ////////////////

        //Grabs the posts from a database and display the main posts page
        function getChirps(chirps){
            var defer = $q.defer();

            $http.get(apiUrl + 'chirps')
                 .then(
                    function(response){
                        defer.resolve(response);
                    },
                    function(err){
                        defer.reject(err.data.message);
                    }
                );
                return defer.promise;
        }//end of function

        //Add chirp to the database
        function addChirps(data){
            var defer = $q.defer();

            $http.post(apiUrl + 'chirps', data)
                 .then(
                    function(response){
                        defer.resolve(response);
                    },
                    function(err){
                        defer.reject(err.data.message);
                    }
                 );
                 return defer.promise;
        }

        //Grabs comments from a post and display the main posts page
        function getComments(comments){
            var defer = $q.defer();

            $http.get(apiUrl + 'comments')
                 .then(
                    function(response){
                        if (typeof response.data === 'object') {
                        defer.resolve(response);
                    } else {
                    
                        defer.reject("No data found!");
                    }
                });
                return defer.promise;
        }

        //Adds a comment to a posts to the database
        function addComments(data){
            var defer = $q.defer();

            $http.post(apiUrl + 'comments', data)
                 .then(
                    function(response){
                        defer.resolve(response);
                    },
                    function(err){
                        defer.reject("No data found!");
                    }
                 );
                 return defer.promise;

 function likeChirps(likeChirps){
            var defer = $q.defer();

            $http.put(apiUrl + 'likeChirps', likeChirp)
                 .then(
                    function(response){
                        defer.resolve(response);
                    },
                    function(err){
                        defer.reject(err.data.message);
                    }
                );
                return defer.promise;
        }//end of function

        //Add chirp to the database
        function likeComments(likeComments){
            var defer = $q.defer();

            $http.put(apiUrl + 'likeComments', likeComment)
                 .then(
                    function(response){
                        defer.resolve(response);
                    },
                    function(err){
                        defer.reject(err.data.message);
                    }
                 );
                 return defer.promise;
        }
        }
    }
})();