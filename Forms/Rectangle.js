class Rectangle extends Form{
    constructor(x = 0, y = 0, width = 10, height = 20, color = "Black") {
        super(x,y,color);
        this.width = width;
        this.height = height;
    }
    fill = () => {
        if(this.visible){
            g.fillStyle = this.color;
            g.fillRect(this.x,this.y,this.width,this.height);
        }
    }

}

