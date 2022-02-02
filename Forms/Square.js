/**
 * @class
 * @extends Rectangle
 */
class Square extends Rectangle{
    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} length
     * @param {Color} color
     */
    constructor(x = 0, y = 0, length = 10, color = Color.Black){
        super(x,y,length,length,color);
    }

    getLength = () => this.getWidth();
    setLength = (length) => {this.setWidth(length);this.setHeight(length);}
}