// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('signin', {
          url: "/signin",
          templateUrl: "signin.html",
          controller: 'SignInCtrl'
        })
        .state('forgotpassword', {
          url: "/forgotpassword",
          templateUrl: "forgotpassword.html",
          controller: 'PasswordCtrl'
        })
    
        .state('welcome', {
          url: "/welcome",
          templateUrl: "welcome.html"
		  
        })
		
		 .state('accountBlance', {
          url: "/accountBlance",
          templateUrl: "accountBlance.html",
		  controller: 'accountBlanceCtrl'
        })
    
    $urlRouterProvider.otherwise("/signin");
})

.controller('SignInCtrl', function($scope, $state, $http) {
	
//	Parse.initialize("",
//                "");
    window.addEventListener("load", initApp);
	function initApp(){
		document.getElementById("btnLogin").addEventListener("click", login);
	}
    
	function login() {
        alert("login...");
        uname = document.getElementById('uname').value;
        pass = document.getElementById('pass').value;
        $http({
          method: 'GET',
          url: 'http://10.11.201.43:8084/BankAndroidConnectivity/LoginMobiBank',
          params: {uname:uname, pass:pass},
          //type:'JSON',
          headers : { 'Content-Type': 'application/json' }
        }).success(function(data, status, headers, config) {
            alert("success..."+data.loginNodes[0].cusCode);
//            angular.forEach(data.loginNodes, function(i, loginNodes) {
//                alert("Customer ID: "+loginNodes.cusCode);                
//            });
            if(data.loginNodes[0].errorCode == 0) {
                $state.go('welcome');
            } else {
                alert(data.loginNodes[0].errorMessage);
            }
            //$state.go('welcome'); 
        }).error(function(data, status, headers, config) {
            alert("error...");
        });
//        $http.get("http://202.40.190.14:8084/BankAndroidConnectivity/LoginMobiBank").success(function(result) {
//          console.log("Success", result);
//          //$scope.result = result;
//        }).error(function() {
//              console.log("error");
//        });
                       
    }
})

.controller('PasswordCtrl', function($scope, $state) {

//Parse.initialize("",
//                "");
//    window.addEventListener("load",initApp);
//	function initApp(){
//		document.getElementById("reset").addEventListener("click", reset);
//	}
//	function reset(){
//        email = document.getElementById('email').value;
//        Parse.User.requestPasswordReset(email, {
//          success: function() {
//            confirm('Foi enviado um email para: '+email+'/n Verifique seu email e redifina a senha!');
//          },
//          error: function(error) {
//            confirm('Aconteceu algum erro, entre em contato com o desenvolvedor!');
//          }
//        });
//    }
})

//.run(function($ionicPlatform) {
//  $ionicPlatform.ready(function() {
//    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//    // for form inputs)
//    if(window.cordova && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//    }
//    if(window.StatusBar) {
//      StatusBar.styleDefault();
//    }
//  });
//})

.controller('accountBlanceCtrl', function($scope, $state) {
 window.addEventListener("load", initApp);
	function initApp(){
		document.getElementById("#btnAccountBlance").addEventListener("click", accountBalance);
	}
	
	function accountBalance() {
	// $state.go('accountBlance');
	alert("Account Balance");
	}
})

.run(function($ionicPlatform,$ionicPopup) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
	

 
	//if(window.Connection) {
            //    if(navigator.connection.type == Connection.NONE) {
                   // $ionicPopup.confirm({
                      //  title: "Internet Disconnected",
                    //    content: "The internet is disconnected on your device."
                 //   })
                    
                //}
            //}
  });
  
   $ionicPlatform.onHardwareBackButton(function () {
      if(true) { // your check here
          $ionicPopup.confirm({
            title: 'System warning',
            template: 'are you sure you want to exit?'
          }).then(function(res){
            if( res ){
              navigator.app.exitApp();
            }
          })
      }
  })

			if(window.Connection) {
              if(navigator.connection.type == Connection.NONE) {
                  $ionicPopup.confirm({
                       title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                   })
                    
                }
            }
//    document.addEventListener("deviceready", onDeviceReady, false);
//
//    function onDeviceReady() {
//
//        //Initialize anything you need to. aka: Google analytics.
//
//        //Set other evens you need to listen to.
////        document.addEventListener("online", onOnline, false);
////        document.addEventListener("offline", onOffline, false);
//         documrnt.addEventListener("load", initAccBalance, false);
//    
//	function initAccBalance() {
//		document.getElementById("btnLogin").addEventListener("click", accountBalance);
//	}
//        //document.getElementById("accBalanceLnk").addEventListener("click", accountBalance, false);
//     }
})
