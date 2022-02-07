class Pix{
    constructor(pixMatrix, pixLength = 1){
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