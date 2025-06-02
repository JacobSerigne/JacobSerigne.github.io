$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1200, 300, 20, 290, "red")
createPlatform(500, 625, 290, 20, "orange")
createPlatform(600, 500, 290, 20, "green")
createPlatform(400, 250, 290, 20, "purple")
createPlatform(100, 525, 290, 20, "blue")
createPlatform(800, 375, 290, 20, "blue")


    // TODO 3 - Create Collectables
    createCollectable("iron", 300, 200, 0, 0 )
createCollectable("diamond", 225, 500, 1, 0.0 )
createCollectable("emerald", 800, 475, 1, 0.0 )
createCollectable("coin", 500, 500, 1, 0.0 )
createCollectable("ems", 1300, 400, 0, 0.0 )

    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
createCannon("right", 300, 1500);
createCannon("left", 500, 2000);
createCannon("right", 2000, 1000);
createCannon("right", 200, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
