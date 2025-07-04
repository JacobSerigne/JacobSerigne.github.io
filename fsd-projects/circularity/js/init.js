var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw, // creates the draw var
        physikz = window.opspark.racket.physikz, // creates the physikz var
        
        app = window.opspark.makeApp(), // calls the var app
        canvas = app.canvas, //calls the canvasvar
        view = app.view, // calls the var view
        fps = draw.fps('#000'); //creates number for fps
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game; // makes the game var equal window.opspark.game
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
var circle; // variable to hold a single circle when creating circles / iterating
var circles = []; // variable to store all circles in an array


        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){ //creates the drawCircle function
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); //creates a random circle
            physikz.addRandomVelocity(circle, canvas, 5, 5); //adds a random velocity 
            view.addChild(circle);// puts the circle in view
            circles.push(circle);   //stores the circle in the array 
        }


        // TODO 3 : Call the drawCircle() function
        /* drawCircle()
      drawCircle()
        drawCircle()
          drawCircle()
            drawCircle()
            */


        // TODO 7 : Use a loop to create multiple circles
            for (var i = 0; i < 100; i++) { //creates a loop until it reaches 100
            drawCircle()// draws the circle function 
            }



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() { //creates the update function
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
           /* physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            */
            // TODO 5 : Call game.checkCirclePosition() on your circles
            /*
           game.checkCirclePosition(circles[0]);
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]);
            */
            // TODO 8 / TODO 9 : Iterate over the array
           for (var i = 0; i < circles.length; i++) { //checks for how many circles their are and declare the i variable as that 
            physikz.updatePosition(circles[i]) //updates the position of the circle
            game.checkCirclePosition(circles[i])//checks the position of the circle
            }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) { //calls the function

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if ( circle.x < 0 ) { // makes the circle go from the left and go to the right
                circle.x = canvas.width; // puts the circle on the right
            }if( circle.y > canvas.height ) { // makes the circle go to the top
                circle.y = 0;// makes the circle go from the top and go to the bottom
            }if( circle.y < 0 ) { //makes the circle to to the bottom
                circle.y = canvas.height;// makes the circle go from the bottom and go to the top
            }


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps); //adds fps
        app.addUpdateable(fps); //updates the fps
        
        game.circle = circle; //makes game.circle equal circle
        game.circles = circles; //makes game.circles equal circles
        game.drawCircle = drawCircle; //makes game.drawCircle equal drawCircle
        game.update = update; ///makes game.update equal update
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
