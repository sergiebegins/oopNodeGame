export class scene {
    createCanvas(){
        this.canvas = document.createElement("canvas");
        this.canvas.width = 512;
        this.canvas.height = 480;
        document.body.appendChild(this.canvas);
        return this.canvas;
    }
    createCtx(){
        this.ctx = this.canvas.getContext("2d");
        return this.ctx;
    }
    createImg(src){
        this.img = new Image();
        this.img.src = src;
        return this.img;
    }
}