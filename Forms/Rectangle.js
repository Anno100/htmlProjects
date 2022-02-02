/**
 * @class
 * Create a new Rectangle
 * @extends Form
 */
class Rectangle extends Form {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @param {Color} color 
     * @param {boolean} visible
     * 
     */
    constructor(x = 0, y = 0, width = 10, height = 20, color = Color.Black, visible = true) {
        super(x, y, color, visible);
        this.width = width;
        this.height = height;
    }


    getWidth = () => this.width;
    getHeight = () => this.height;

    setWidth = (width) => {this.width = width};
    setHeight = (height) => {this.height = height};

    /**
     * @method
     * @returns {number}
     */
    getAverage = () => this.width * this.height;

    /**
     * @method
     * @returns {number}
     */
    getScope = () => 2*(this.width + this.height);

    /**
     * @method 
     * @public
     * */
    fill = () => {
        if (this.visible) {
            g.fillStyle = this.color;
            g.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    /**
     * @method
     * @public
     */
    stroke = () => {
        if (this.visible) {
            g.strokeStyle = this.color;
            g.strokeRect(this.x, this.y, this.width, this.height);

        }
    }


}

