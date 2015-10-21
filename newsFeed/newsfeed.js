define([
        'jquery',
        'angular',
        './properties',
        './initialproperties',
        './lib/js/extensionUtils',
        'text!./lib/css/style.css',
        'text!./lib/partials/template.html'
],
function ($, angular, properties, initialProperties, extensionUtils, style, template) {
    'use strict';

    extensionUtils.addStyleToHeader(style);

    return {

        definition: properties,

        initialProperties: initialProperties,

        snapshot: { canTakeSnapshot: true },

        template: template,

        controller: ['$scope', function ($scope) {
            console.log('l',$scope.layout);
            console.log('av',angular.version);
            $scope.feed = [];
            $scope.title = 'Loading news...';

            $scope.loadFeed = function(){
                console.log('qs',$scope.layout.props.queryfield);
                $scope.feed = [];
                $scope.title = 'Loading news...';

                $.ajax({
                    url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http%3A%2F%2Fnews.google.com'
                        +'%2Fnews%3Foutput%3Drss%26q%3D'+$scope.layout.props.queryfield+'%26ned%3D'+$scope.layout.props.newsFeed,
                    dataType: "jsonp",
                    success: function (data) {
                        $scope.title = data.responseData.feed.title;
                        $scope.feed = data.responseData.feed.entries;
                    }
                });
            };

            $scope.$watch( 'layout.props', function ( newVal ) {
                console.log( 'new Vals', newVal );
                $scope.loadFeed();
            } , true);    

        }]
    };

});

// define([
//         'jquery',
//         /*'underscore',*/
//         './properties',
//         './initialproperties',
//         './lib/js/extensionUtils',
//         'text!./lib/css/style.css'
// ],
// function ($, /*_,*/ props, initProps, extensionUtils, cssContent) {
//     'use strict';

//     extensionUtils.addStyleToHeader(cssContent);

//     console.log('Initializing - remove me');

//     return {

//         definition: props,

//         initialProperties: initProps,

//         snapshot: { canTakeSnapshot: true },

//         resize : function( /*$element, layout*/ ) {
//             //do nothing
//         },

// 		//clearSelectedValues : function($element) {
// 		//
// 		//},


//         // Angular Support (uncomment to use)
//         //template: '',

//         // Angular Controller
//         //controller: ['$scope', function ($scope) {
// 		//
//         //}],


//         paint: function ( $element /*, layout*/ ) {

//             /*
//             console.groupCollapsed('Basic Objects');
//             console.info('$element:');
//             console.log($element);
//             console.info('layout:');
//             console.log(layout);
//             console.groupEnd();
//             */

//             $element.empty();
//             var $helloWorld = $(document.createElement('div'));
//             $helloWorld.addClass('hello-world');
//             $helloWorld.html('Hello World from the extension "newsFeed"');
//             $element.append($helloWorld);

//         }
//     };

// });
