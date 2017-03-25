// Managing the poll list
function PollListCtrl($scope) {
  $scope.polls = [];
}

 // Voting / Viewing poll list
 function PollItemCtrl($scope, $routeParams) {
   $scope.poll = {};
   $scope.vote = function() {

   };
 }

 // Create a new poll
 function PollNewCtrl($scope) {
   $scope.poll = {
     question: '',
     choices: [
       {text: ''},
       {text: ''},
       {text: ''}
     ]
   };
   $scope.addChoices = function() {
     $scope.poll.choices.push(
       {text: ''}
     )
   };
   $scope.createPoll = function() {

   };
 }
