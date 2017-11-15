import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
}


/* Javascript que faz menu responsivo funcionar */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

function Ctrl($scope) {
  $scope.value= 'Sim';
  $scope.visivel = false;
  $scope.$watch('value', function(value) {
       if(value==='Sim'){
       		$scope.visivel = false;
       }
       else{
       		$scope.visivel = true;
       }
	});
	$scope.show1 = true;
	$scope.show2 = false;
	$scope.show3 = false;
	$scope.show4 = false;
	$scope.show5 = false;
	$scope.show6 = false;

	$scope.add = function() {
		if($scope.show1==true){
			$scope.show1 = false;
			$scope.show2 = true;
		}
		else if($scope.show2==true){
			$scope.show2 = false;
			$scope.show3 = true;
		}
		else if($scope.show3==true){
			$scope.show3 = false;
			$scope.show4 = true;
		}
		else if($scope.show4==true){
			$scope.show4 = false;
			$scope.show5 = true;
		}
		else if($scope.show5==true){
			$scope.show5 = false;
			$scope.show6 = true;
		}
    };
}
