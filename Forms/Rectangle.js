
/**
@class Rectangle
@constructor (double)x, (double)y, (double)width, (double)height, (String)color
 */
class Rectangle extends Form{
    constructor(x = 0, y = 0, width = 10, height = 20, color = "black") {
        super(x,y,color);
        this.width = width;
        this.height = height;
    }

    /**
     * @description Füllt ein Rechteck im Canvas
     */
    fill = () => {
        if(this.visible){
            g.fillStyle = this.color;
            g.fillRect(this.x,this.y,this.width,this.height);
        }
    }
    stroke = () => {
        if(this.visible){
            g.strokeStyle = this.color;
            g.strokeRect(this.x,this.y,this.width,this.height);
            
        }
    }
    getAverage = () => {this.width * this.height;}

}

