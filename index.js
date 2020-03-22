/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//create our angularjs app
var bytutorialEbookApp = angular.module('bytutorialEbookApp', ['ngRoute']);

//once the html is ready we attach the angularjs directive app into the body
angular.element(document).ready(function () {
    if (window.cordova) {
      document.addEventListener('deviceready', function () {
        angular.bootstrap(document.body, ['bytutorialEbookApp']);
      }, false);
    } else {
      angular.bootstrap(document.body, ['bytutorialEbookApp']);
    }
});

//this will be the app controller which will be triggered once the html is ready
bytutorialEbookApp.controller('chapterController', ['$scope', function ($scope) {
	/**** INITIATE MENU SLIDE OUT ****/
	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 0,
		'tolerance': 70,
		touch: true,
		openPage() {

			this.nativePageTransitions.slide(options);
			this.navCtrl.push(page);
		  
		  }
	});

	//we add an event to our main button so when user perform a click, we called the slideout function.
	document.querySelector('#main-button').addEventListener('click', function() {
		slideout.toggle();
	});

	//when user taps or clicks particular menu, we hide the slideout
	$("#menu-list > li > a").on("click", function(){
		//we check if we need to close it automatically
		if($("html").hasClass("slideout-open")){
			slideout.toggle();
		}
	});
	
	
	//animateMe function 
	function animateMe(myObject, animateType, duration){
		$(myObject).addClass("animated " + animateType).css("animation-delay", duration + "s");
	}
	
	//we add the fadeIn animation with 0.1 seconds, for more information animate css, please google animate.css in your browser, there are varieties of animations available.
	animateMe("#box-content", "fadeIn", 0.1);
}]); 
bytutorialEbookApp.config(function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/', {
			templateUrl : 'pages/introduction.html',
			controller  : 'chapterController'
		})
		.when('/chapter1', {
			templateUrl : 'pages/chapter1.html',
			controller  : 'chapterController'
		})
		.when('/chapter2', {
			templateUrl : 'pages/chapter2.html',
			controller  : 'chapterController'
		})
		.when('/chapter3', {
			templateUrl : 'pages/chapter3.html',
			controller  : 'chapterController'
		})
		.when('/chapter4', { 
			templateUrl : 'pages/chapter4.html',
			controller  : 'chapterController'
		})
		.when('/chapter5', { 
			templateUrl : 'pages/chapter5.html',
			controller  : 'chapterController'
		})
});   


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();