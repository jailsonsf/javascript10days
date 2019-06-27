class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.Area = function() {
    return this.w * this.h;
}

class Square extends Rectangle {
    constructor(w) {
        super(w, w);
    }
}
