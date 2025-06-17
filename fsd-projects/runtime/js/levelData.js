var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
        { type: "sawblade", x: 400, y: groundY - 10, damage: 10 },
        { type: "sawblade", x: 600, y: groundY - 125, damage: 10 },
        { type: "sawblade", x: 800, y: groundY - 125, damage: 10 },
        { type: "sawblade", x: 1500, y: groundY - 10, damage: 10 },
        { type: "sawblade", x: 1700, y: groundY - 10, damage: 10 },
        { type: "sawblade", x: 2000, y: groundY - 125, damage: 10 },
        { type: "enemy", x: 400, y: groundY - 50, speed: -2, image: 'img/b1BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.25, damage: -10  },
        { type: "enemy", x: 600, y: groundY - 50, speed: -2, image: 'img/b1BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.25, damage: -10  },
        { type: "enemy", x: 800, y: groundY - 50, speed: -2, image: 'img/b1BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.25, damage: -10  },
        { type: "enemy", x: 1000, y: groundY - 50, speed: -2, image: 'img/b1BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.25, damage: -10  },
        { type: "enemy", x: 1500, y: groundY - 50, speed: -2, image: 'img/b1BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.25, damage: -10  },
        { type: "enemy", x: 1700, y: groundY - 50, speed: -2, image: 'img/b1BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.25, damage: -10  },
        { type: "enemy", x: 2000, y: groundY - 50, speed: -2, image: 'img/b2BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.25, damage: -10  },
        { type: "enemy", x: 2200, y: groundY - 50, speed: -2, image: 'img/b2BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.4, damage: -20  },
        { type: "reward", x: 500, y: groundY - 100, speed: -2, image: 'img/lightsaber.png', offsetX: -30, offsetY: -30, scale: .25 },
        { type: "reward", x: 900, y: groundY - 100, speed: -2, image: 'img/republic.png', offsetX: -30, offsetY: -30, scale: .25 },
        { type: "reward", x: 1300, y: groundY - 100, speed: -2, image: 'img/republicCredit.png', offsetX: -30, offsetY: -30, scale: .25 },
        { type: "reward", x: 1700, y: groundY - 100, speed: -2, image: 'img/republic.png', offsetX: -30, offsetY: -30, scale: .25 },
        { type: "reward", x: 2100, y: groundY - 100, speed: -2, image: 'img/republic.png', offsetX: -30, offsetY: -30, scale: .25 },
        { type: "marker", x: 3000, y: groundY - 75, speed: -2, image: 'img/kyber.png', offsetX: -30, offsetY: -30, scale: .25 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
        { type: "sawblade", x: 500, y: groundY - 10, damage: 10 },
        { type: "sawblade", x: 800, y: groundY - 125, damage: 10 },
        { type: "sawblade", x: 1000, y: groundY - 10, damage: 10 },
        { type: "sawblade", x: 1200, y: groundY - 125, damage: 10 },
        { type: "sawblade", x: 1400, y: groundY - 125, damage: 10 },
        { type: "sawblade", x: 1600, y: groundY - 10, damage: 10 },
        { type: "sawblade", x: 1800, y: groundY - 125, damage: 10 }, 
        { type: "sawblade", x: 2000, y: groundY - 10, damage: 10 }, 
        { type: "enemy", x: 400, y: groundY - 50, speed: -3, image: 'img/b1BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.25, damage: -10  },
        { type: "enemy", x: 600, y: groundY - 50, speed: -3, image: 'img/b1BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.25, damage: -10  },
        { type: "enemy", x: 800, y: groundY - 50, speed: -3, image: 'img/b2BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.4, damage: -10  },
        { type: "enemy", x: 1600, y: groundY - 50, speed: -3, image: 'img/b2BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.4, damage: -10  }, 
        { type: "enemy", x: 1800, y: groundY - 50, speed: -3, image: 'img/b2BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.4, damage: -20  }, 
        { type: "enemy", x: 2000, y: groundY - 50, speed: -3, image: 'img/droideka.png', offsetX: -30, offsetY: -90, scale: 0.15, damage: -50  }, 
        { type: "reward", x: 700, y: groundY - 100, speed: -3, image: 'img/republicCredit.png', offsetX: -30, offsetY: -30, scale: .25 },
        { type: "reward", x: 1500, y: groundY - 100, speed: -3, image: 'img/republic.png', offsetX: -30, offsetY: -30, scale: .25 },
        { type: "reward", x: 2100, y: groundY - 100, speed: -3, image: 'img/lightsaber.png', offsetX: -30, offsetY: -10, scale: .25},
        { type: "marker", x: 3000, y: groundY - 75, speed: -3, image: 'img/kyber.png', offsetX: -30, offsetY: -30, scale: .25 },
        ],
      },
      {
        name: "empire",
        number: 3,
        speed: -5,
        gameItems: [
        { type: "sawblade", x: 500, y: groundY - 125, damage: 10 },
        { type: "sawblade", x: 800, y: groundY - 10, damage: 10 },
        { type: "sawblade", x: 1000, y: groundY - 125, damage: 10 },
        { type: "sawblade", x: 1200, y: groundY - 10, damage: 10 },
        { type: "sawblade", x: 1400, y: groundY - 125, damage: 10 },
        { type: "sawblade", x: 1600, y: groundY - 10, damage: 10 },

        { type: "enemy", x: 400, y: groundY - 50, speed: -4, image: 'img/b2BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.4, damage: -20 },
        { type: "enemy", x: 600, y: groundY - 50, speed: -4, image: 'img/b2BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.4, damage: -20  },
        { type: "enemy", x: 800, y: groundY - 50, speed: -4, image: 'img/b2BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.4 , damage: -20 },
        { type: "enemy", x: 1000, y: groundY - 50, speed: -4, image: 'img/b2BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.4, damage: -20  },
        { type: "enemy", x: 1600, y: groundY - 50, speed: -4, image: 'img/b2BattleDroid.png', offsetX: -30, offsetY: -90, scale: 0.4, damage: -20  }, 
        { type: "enemy", x: 1800, y: groundY - 50, speed: -4, image: 'img/droideka.png', offsetX: -30, offsetY: -90, scale: 0.15, damage: -50  },
        { type: "enemy", x: 2000, y: groundY - 50, speed: -4, image: 'img/droideka.png', offsetX: -30, offsetY: -90, scale: 0.15, damage: -50  }, 
        { type: "reward", x: 900, y: groundY - 100, speed: -4, image: 'img/republic.png', offsetX: -30, offsetY: -30, scale: .25 },
        { type: "reward", x: 1500, y: groundY - 100, speed: -4, image: 'img/republic.png', offsetX: -30, offsetY: -30, scale: .25 },
        { type: "reward", x: 1700, y: groundY - 100, speed: -4, image: 'img/republic.png', offsetX: -30, offsetY: -30, scale: .25 },
        { type: "reward", x: 2300, y: groundY - 100, speed: -4, image: 'img/republic.png', offsetX: -30, offsetY: -30, scale: .25 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
