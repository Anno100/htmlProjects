class Pix extends Form{
    /**
     * 
     * @param {Number[][]} pixMatrix 
     * @param {Number} pixLength 
     */
    constructor(pixMatrix, pixLength = 1){
        super();
        this.x = 0;
        this.y = 0;
        this.pixMatrix = pixMatrix;
        this.pixLength = pixLength;
        this.colorSettings = (number) => {
            switch(number){
                case 1: g.fillStyle = Color.Black;
                break;
                case 2: g.fillStyle = Color.Red;
                break;
                case 3: g.fillStyle = Color.Yellow;
                break;
            }
        };
    }

    setColorSettings = (newColorSettings) =>{
        this.colorSettings = newColorSettings;
    }
    
    draw = (X = undefined, Y = undefined) => {
        if(Y != undefined && Y != undefined){
            this.x = X;
            this.y = Y;
        }
        let x = 0;
        let y = 0;
        this.pixMatrix.forEach(pixArray => {
            pixArray.forEach(pix => {
                this.colorSettings(pix);
                if(pix != 0) g.fillRect(this.x + x * this.pixLength, this.y + y * this.pixLength, this.pixLength,this.pixLength);
                x++;
            });
            x = 0;
            y++;
        });
    }
}

class PixSet{
    /**
     * 
     * @param {Pix[]} pixArray 
     * @param {number} frames 
     */
    constructor(pixArray, frames = 1000){

        this.pixArray = pixArray;
        this.x = 0;
        this.y = 0;
        this.currentPix = 0;
        this.run = false;

        this.maxCounter = frames;
        this.speed = frames;

        
    }



    draw = (x,y,length) =>{
        this.pixArray[this.currentPix].pixLength = length;
        this.pixArray[this.currentPix].draw(x,y);
        if(this.run){
            this.speed--;
            if(this.speed == 0){
                this.speed = this.maxCounter;
                this.currentPix++;
                this.currentPix %= this.pixArray.length;
            }
        }
        else this.speed = this.maxCounter;
    }
}