import {scene} from "./scene.js";

export class Initial extends scene{
    constructor(){
        super();
            this.hero = {speed:256};
            this.monster = {};
            this.monstersCaught = 0;
            this.keysDown = {};

        this.bgImage = this.createImg("images/background.png");
        this.heroImage = this.createImg("images/hero.png");
        this.monsterImage = this.createImg("images/monster.png");
    }

    reset(){
        this.hero.x = this.canvas.width / 2;
        this.hero.y = this.canvas.height / 2;

        // Throw the monster somewhere on the screen randomly
        this.monster.x = 32 + (Math.random() * (this.canvas.width - 64));
        this.monster.y = 32 + (Math.random() * (this.canvas.height - 64));
    }

    update(modifier){
        if (38 in this.keysDown) { // Player holding up
            this.hero.y -= this.hero.speed * modifier;
        }
        if (40 in this.keysDown) { // Player holding down
            this.hero.y += this.hero.speed * modifier;
        }
        if (37 in this.keysDown) { // Player holding left
            this.hero.x -= this.hero.speed * modifier;
        }
        if (39 in this.keysDown) { // Player holding right
            this.hero.x += this.hero.speed * modifier;
        }

        // Are they touching?
        if (
            this.hero.x <= (this.monster.x + 32)
            && this.monster.x <= (this.hero.x + 32)
            && this.hero.y <= (this.monster.y + 32)
            && this.monster.y <= (this.hero.y + 32)
        ) {
            ++this.monstersCaught;
            this.reset();
        }
    }

    render(){
        this.ctx.drawImage(this.bgImage, 0, 0);
        this.ctx.drawImage(this.heroImage, this.hero.x, this.hero.y);
        this.ctx.drawImage(this.monsterImage, this.monster.x, this.monster.y);


        // Score
        this.ctx.fillStyle = "rgb(250, 250, 250)";
        this.ctx.font = "24px Helvetica";
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "top";
        this.ctx.fillText("Goblins caught: " + this.monstersCaught, 32, 32);
    }

}