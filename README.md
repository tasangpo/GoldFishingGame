# GoldFishing:
Javascript Project

This is a 2D game in which a boat is casting its line to grab gold at the bottom of the ocean. The issue is that the ocean is infested with sharks!! 
Game will be developed using canvas, with some CSS for additional styling. It will allow user to move the boat horizontally across the water and hit a button to cast the fishing line. The sharks will move in a horziontal pattern and the speed of the fishing line will remain constant going down. The sharks will have their own random speed respectively. Once all of the gold has been retrieved, user will advance to the next level where the number of sharks will increase with each level. 

Please click on the link : [Gold Fishing Game](https://tasangpo.github.io/GoldFishingGame/).

# Functionality and MVPs:
In "Gold Fishing", users will be able to:

- Move in a 2d space horizontally using the "A" key to move left or "D" key to move right
- Cast a line by hitting the "space" key.
- Advance to the next level once all gold on the level has been collected.

In addition, this project will include:

- use of canvas, CSS
- javascript logic to detect collision
- implement logic to determine if player has advanced to the next level or lost

# Screenshot:

![alt text](https://github.com/tasangpo/GoldFishingGame/blob/main/game_screenshot.png)

# Technology:
- HTML
- CSS
- Javascript
- Canvas
- Webpack

# Code Snippets:

``` JS
sharkCollision() {
        if (this.lines.length) {
            const lines = this.lines;
            const line = lines[0];
            const lineMid = line.pos[0] + 25;

            this.sharks.forEach(function(shark) {
                if ((line.height > shark.pos[1] - line.pos[1] + 20) && (lineMid > shark.pos[0] && lineMid < shark.pos[0] + shark.width)){
                    lines.shift();
                    shark.img.src = "src/images/shark_vertical.png"
                    shark.vel = [0, -5]
                }
            })
        }
    }
```

# Implementation Timeline
- Friday Afternoon & Weekend: Work on creating all classes and canvas
- Monday: Implement logic to check for collisions and track of lives
- Tuesday: Add background and additional CSS
- Wednesday: Work on adding new levels
- Thursday Morning: Final prep for presentations and complete anything left 
