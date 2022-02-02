class Color {
    static Black = "black";
    static Red = "red";
    static Blue = "blue";
    static Yellow = "yellow";
    static Green = "green";
    static Gray = "gray";
    static White = "white";

    /**
     * 
     * @param {number} r (0 to 255)
     * @param {number} g (0 to 255)
     * @param {number} b (0 to 255)
     * @param {number} transparenty (0 to 1) 
     * @returns 
     */
    static RGB = (r,g,b,transparenty = 1) =>{
        r %= 256;
        g %= 256;
        b %= 256;
        return `rgb(${r},${g},${b},${transparenty})`;
    }
}
