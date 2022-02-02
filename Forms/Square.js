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
     * @param {String} color
     */
    constructor(x = 0, y = 0, length = 10, color = "black"){
        super(x,y,length,length,color);
    }

    getLength = () => this.getWidth();
    setLength = (length) => {this.setWidth(length);this.setHeight(length);}
}