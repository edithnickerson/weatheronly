(function() {

    angular
        .module('airplaneApp')
        .controller('weatherCtrl', weatherCtrl);
        //.services('geolocation', geolocation);
        
        
    weatherCtrl.$inject = ['$scope', 'SelectedData', 'DarkskyWeather'];

    function weatherCtrl($scope, SelectedData, DarkskyWeather) {

        var vm = this;
        console.log(window.location);

        vm.content = "Weather";
           
        vm.selectedDepartureICAO = "";
        vm.selectedArrivalICAO = "";
        vm.selectedWeight = "";

        //check selected Departure
        if (SelectedData.selectedDepartureICAO !== null) {
            vm.selectedDepartureICAO = SelectedData.selectedDepartureICAO;
        }
        
        //check selected Arrival
        if (SelectedData.selectedArrivalICAO !== null) {
            vm.selectedArrivalICAO = SelectedData.selectedArrivalICAO;
        }

        //check selected weight
        if (SelectedData.selectedWeight !== null) {
            vm.selectedWeight = SelectedData.selectedWeight;
        }
       var lat=0;
       var lon=0;
        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getDepartureWeather = function() {
            
        // var lat = 0;
           // console.log(lat);
          //  var lon = 0;
           // console.log(lon);    
                       
 if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(showLocation);
		}else{
			console.log('Geolocation is not supported by this browser.');
		}
         function showLocation(position){
                 lat = position.coords.latitude;

                console.log("latitude: " + lat);
                 lon = position.coords.longitude;

                console.log("longitude: " + lon);
                
            DarkskyWeather.getWeather(lat, lon)
                .then(function(response) {
                    vm.departureWeather = response.data;
                    console.log(vm.departureWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }
       
        }

        //refactored for Angular 1.6 - removed success/error, used Promises...        
        /*vm.getArrivalWeather = function() {
            
             var lat = vm.selectedArrivalICAO.airportLat;
            var lon = vm.selectedArrivalICAO.airportLon;

            //refactored for Angular 1.6 - removed success/error, used Promises...
            DarkskyWeather.getWeather(lat, lon)
                .then(function(response) {
                    vm.arrivalWeather = response.data;
                    console.log(vm.arrivalWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }*/
        
        //call services
        vm.getDepartureWeather();
        //vm.getArrivalWeather();

    }

})();
