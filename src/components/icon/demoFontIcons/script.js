
angular
  .module('appDemoFontIcons', ['ngMaterial'])
  .controller('DemoCtrl', function( $scope ) {
      // Create list of font-icon names with color overrides
      var iconData = [
            {name: 'icon-home'        , color: "#0070CC" },
            {name: 'icon-user-plus'   , color: "#4c4c4c" },
            {name: 'icon-google-plus2', color: "#0070cc" },
            {name: 'icon-youtube4'    , color:"#cc0000" },
             // Use theming to color the font-icon
            {name: 'icon-settings'    , color:"#4c4c4c"}//, theme:"md-warn md-hue-5"} ORIGINAL
          ];

      // Create a set of sizes...
      $scope.sizes = [
        {size:12,padding:0},
        {size:21,padding:2},
        {size:36,padding:6},
        {size:48,padding:10}
      ];

      $scope.fonts = [].concat(iconData);



  })
  .config(function($mdThemingProvider){
    // Update the theme colors to use themes on font-icons
    $mdThemingProvider.theme('default')
          .primaryPalette("red")
          .accentPalette('green')
          .warnPalette('blue');
  });
