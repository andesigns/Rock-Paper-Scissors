(function() {
	var app = angular.module('rockPaperScissorsApp', ['ngAnimate']);

	app.controller('rockPaperScissorsCtrl', ['$scope', function ($scope) {
		
		// Title and Description
		$scope.title = 'Rock Paper Scissors';
		$scope.description = 'Take your pick...Rock, Paper or Scissors';

		// Assign players name
		$scope.addName = function(text) {
			$scope.playerName = text;
		}

		// Rock paper scissors choices
		$scope.choices = [
			{'name':'Rock','image':'img/rock.png'},
			{'name':'Paper','image':'img/paper.png'},
			{'name':'Scissors','image':'img/scissors.png'}
		];

		// User's choice
		var userChoice = "";
		// Assign user's choice
		$scope.addChoice = function(text) {
			userChoice = text;
			$scope.usersChoice = userChoice;

			// Computer's choice
			var computerChoice = Math.floor(Math.random() * 3 + 1);
			if (computerChoice === 1) {
				computerChoice = "Rock";
				$scope.computersChoice = computerChoice;
			} else if(computerChoice === 2) {
				computerChoice = "Paper";
				$scope.computersChoice = computerChoice;
			} else {
				computerChoice = "Scissors";
				$scope.computersChoice = computerChoice;
			}

			// Work out who won
			if(userChoice === computerChoice) {
        console.log("The result is a tie!");
        $scope.result = "The result is a tie!";
	    } else if (userChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            console.log("rock wins");
            $scope.result = "Rock Wins!";
        } else {
            console.log("paper wins");
            $scope.result = "Paper Wins!";
        }
	    } else if (userChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            console.log("paper wins");
            $scope.result = "Paper Wins!";
        } else {
            console.log("scissors wins");
            $scope.result = "Scissors Wins!";
        }
	    } 
		}

		// Start again
		$scope.startAgain = function() {
			// $scope.playersName = "";
			// $scope.playerName = "";
			$scope.usersChoice = "";
			$scope.computersChoice = "";
			$scope.result = "";
		}

	}]);
})();