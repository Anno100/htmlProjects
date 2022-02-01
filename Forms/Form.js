class Form{
    constructor(x = 0, y = 0, color = "black"){
        this.x = x;
        this.y = y;
        this.color = color;
        this.visible = true;
        
        try {
            c;
        } catch (err) {
            console.error(err +
                "\nCanvas Objekt wurde nie initialisiert." +

                "\n\nFügen sie am Anfang des Codes folgendes hinzu:" +
                "\nvar c = document.getElementById(\"myCanvas\")" +

                "\n\nFalls diese Meldung immernoch angezeigt wird fügen sie im body-Tag ein Canvas-Tag mit der id \"myCanvas\" hinzu!!!"

            );

        }

        try {
            g;
        } catch (err) {
            console.error(err +
                "\nGraphics Objekt wurde nie initialisiert." +

                "\n\nFügen sie am Anfang des Codes folgendes hinzu:" +
                "\nvar g = c.getContext(\"2d\")");

        }
    }
    
    setVisability = (visable) => {
        this.visable = visable;
    }
}