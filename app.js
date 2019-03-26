class details {
    constructor(name, review, rating) {
        this.name = name;
        this.review = review;
        this.rating = rating;
    }
}

var app = angular.module("myapp", []);
app.controller("mainctrl", function ($scope,$window) {
    var editmode=false;
    var editanddeletemode=false;
    var indexofedit;
    $scope.arry = [];
    $scope.hoverIn = function (index) {
        $scope['shw-' + index] = true;

    }

    $scope.hoverOut = function (index) {
        $scope['shw-' + index] = false;

        
        //  var btn1 =  $('#object-'+index)[0].children[3].children[0];
        // $(btn1).css('display' , 'none');
        // var btn2=  $('#object-'+index)[0].children[3].children[1];
        //  $(btn2).css('display' , 'none');
    }

    $scope.edit = function (index) {

        editmode = true;
        indexofedit = index;
        var variblarr = $scope.arry[index];
        $scope.namee = variblarr.name;
        $scope.review = variblarr.review;
        $scope.rating = variblarr.rating;
        $window.document.getElementById('namee').focus();
        $window.document.getElementById('review').focus();
        $window.document.getElementById('rating').focus();
    }

    $scope.delete = function (index) {
        if(editmode==true)
        {
             editmode=false;
        }
        $scope.arry.splice(index, 1);
        if ($scope.arry.length == 0) {
            $scope.tableshw = false;
            $scope.txt = "Hey!..There is no data..Enter something to show below  :)"

        }
        //  console.log("in Delete");
    }


    $scope.submit = function () {
        var name = $scope.namee;
        var review = $scope.review;
        var rating = $scope.rating;
        if (name == undefined || review == undefined || rating == undefined || name.length < 1 || review.length < 1 || rating < 1) {
            console.log("inside if");
            return;
        }
        if (editmode == true) {
            var indexi = indexofedit;
            $scope.arry[indexi].name = name;
            $scope.arry[indexi].review = review;
            $scope.arry[indexi].rating = rating;
            editmode = false;
            $scope.namee = null;
            $scope.review = null;
            $scope.rating = null;
        }
        else {
            //    console.log("Inserting");
            $scope.arry.push(new details(name, review, rating));
            $scope.namee = null;
            $scope.review = null;
            $scope.rating = null;
            $scope.tableshw = true;
            $scope.txt = "Here is the data entered till now"
        }
        if ($scope.arry.length == 0) {
            $scope.tableshw = false;
            $scope.txt = "Hey!..There is no data..Enter something to show below  :)"

        }
    }

    $scope.cancel = function () {
        $scope.namee = "";
        $scope.review = "";
        $scope.rating = "";
        editmode=false;
    }
});