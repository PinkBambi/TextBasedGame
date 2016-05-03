// Code goes here
var app = angular.module('app', []);

app.controller('playerAnwers', function($scope) {

    $scope.items = [
        'You woke in a forest, alone, hungry and freezing.',
        'What do you do first?',
        'Search for: people, food or shelter?'
    ];
    /************************/
    $("#thePlace").keyup(function(e) {
        if (e.keyCode == 13) {
            $scope.add();
        }
    });
    /************************/
    $scope.add = function() {
        console.log("Spelare skrev: " + $scope.input);
        var lowerResult = $scope.input.toLowerCase();
        if (lowerResult === "people") {
            $scope.items.push(
                'Your gut feeling told you to try your luck and search for people. While you are stumbling in the dark woods a unknown presence is felt behind you.',
                'What is your reaction when a hand is placed on your shoulder?',
                'Do you: Scream, fight or run?');
            ActionHand();
        } else if (lowerResult === "food") {
            $scope.items.push(
                'balalala',
                'What is your reaction when a hand is placed on your shoulder?',
                'Do you: Scream, fight or run?');
        } else if (lowerResult === "shelter") {
            $scope.items.push(
                'balalalfsgrewsgbvsfra',
                'What is your reaction when a hand is placed on your shoulder?',
                'Do you: Scream, fight or run?');
        }
        $scope.input = '';
    };

    /**********/
    function ActionHand() {
        var lowerResult2 = $scope.input.toLowerCase();
        if (lowerResult2 === "scream") {
            $scope.items.push(
                'GE daj',
                'GE daj?',
                'Do you: GE daj, GE daj or GE daj?');
            ActionHand();
        } else if (lowerResult2 === "fight") {
            $scope.items.push(
                'Gå på en promenad',
                'Gå på en promenad?',
                'Do you: Gå på en promenad, Gå på en promenad or Gå på en promenad?');
        } else if (lowerResult2 === "run") {
            console.log('brsss');
            $scope.items.push(
                'falla fel',
                'inte falla rätt?',
                'Do you: ha, ha or ha?');
        }
    }


    /****************/
    /*$scope.remove = function(index) {
        $scope.items.splice(index, 1);
      };*/
});
/**********/
