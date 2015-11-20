playbuy.controller('playbuyCtrl', function($scope, $http, $ionicGesture) {


  // цепляем жЫсонку
  $http.get('films/films.json').success(function(data, headers){
    $scope.filmlist = data;
  });

  $http.get('films/filmstime.json').success(function(data, headers){
    $scope.filmlisttime = data;
  });

  // $http.get('films/zalhuial.json').success(function(data, headers){
  //   $scope.zalseats = data;
  // });

  $http.get('films/zal.json').success(function(data, headers){
    $scope.zalseats = data;
  });

  // аккордеоним список
  $scope.films = [];
  for (var i=0; i<10; i++) {
    $scope.films[i] = {
      name: i,
      items: []
    };
  }
  $scope.toggleGroup = function(film) {
    if ($scope.isGroupShown(film)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = film;
    }
  };
  $scope.isGroupShown = function(film) {
    return $scope.shownGroup === film;
  };
  $scope.toggleSeat = function(film) {
    if ($scope.isSeatShown(film)) {
      $scope.shownSeat = null;
    } else {
      $scope.shownSeat = film;
    }
  };

  $scope.isSeatShown = function(film) {
    return $scope.shownSeat === film;
  };
  $scope.isSeatShown = function(film) {
    return $scope.shownSeat === film;
  };

  // свайпим для выбора места
  $scope.isSeatShown = function(film) {
    return $scope.shownSeat === film;
  };
  $scope.isSeatShown = function(film) {
    return $scope.shownSeat === film;
  };



  // далее все для фильтра 
  var date = new Date();

  $scope.today = date;




}); // крайний тег контролера



playbuy.controller('zalCtrl', function($scope, $http) {

  $http.get('films/zalhuial.json').success(function(data, headers){
    $scope.zal = data;
  });

  // $scope.selectSeat = function(){

  //   document.getElementById('paths').onclick = function fn(e){
  //     e = e || event
  //     var target = e.target || e.srcElement
  //     tgid = target.id
  //     tgcl = target.classList
  //     console.log(tgid)
  //     document.getElementById(tgid).classList.remove('st4', 'st2');
  //     document.getElementById(tgid).classList.add('st0')
  //   }

  // };


  // var element = angular.element(document.querySelector('#zal'));

  // $ionicGesture.on('drag', updateX, element);



  // $scope.selectSeat = function reply_click(clicked_id)
  //   {
  //       alert(clicked_id);
  //   }
  // };

});