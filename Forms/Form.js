/**
 * @class 
 */
class Form{

    /**
     * 
     * @param {number} x Set x-coordinate 
     * @param {number} y Set y-coordinate
     * @param {string} color Set Color
     * @param {boolean} visible Set Visability with setVisability()
     * 
     */
    constructor(x = 0, y = 0, color = "black", visible = true) {

        this.x = x;
        this.y = y;
        this.color = color;

        this.visible = visible;

        Form.try_catch();

    }

    getX = () => this.x;
    setX = (x) => { this.x = x; }

    getY = () => this.y;
    setY = (y) => { this.y = y; }

    getColor = () => this.color;
    setColor = (color) => { this.color = color; }

    getVisable = () => this.visible;
    setVisable = (visible) => { this.visible = visible; }

    /**
     * @static
     * @public
     * @method
     */
    static try_catch = () =>{
        try { c } 
        catch (err) {
            console.error(err +
                "\nCanvas Objekt wurde nie initialisiert." +

                "\n\nFügen sie am Anfang des Codes folgendes hinzu:" +
                "\nvar c = document.getElementById(\"myCanvas\")" + 

                "\n\nFalls diese Meldung immernoch angezeigt wird fügen sie im body-Tag ein Canvas-Tag mit der id \"myCanvas\" hinzu!!!");
        }try { g } 
        catch (err) {
            console.error(
                "\nGraphics Objekt wurde nie initialisiert." +

                "\n\nFügen sie am Anfang des Codes folgendes hinzu:" +
                "\nvar g = c.getContext(\"2d\")");

        }
    }


}
