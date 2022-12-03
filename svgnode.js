class SVGNode {
    constructor(obj) {
        if (obj.selector) {
            this.node = document.querySelector(obj.selector);
        } else if (obj.domNode) {
            this.node = obj.domNode;
        }
    }

    getStringAttr(attrName) {
        return this.node.getAttribute(attrName);
    }

    get(attrName) {
        return Number(this.getStringAttr(attrName));
    }

    set(attrName, value) {
        return this.node.setAttribute(attrName, value);
    }

    collidesWith(svg) {
        return (
            this.x + svg.width >= svg.x && // left-edge
            this.x <= svg.x + svg.width && // right-edge
            this.y + this.height >= svg.y && // top-edge
            this.y <= svg.y + svg.height // bottom-edge
        );
    }

    get x() {
        return this.get("x");
    }

    set x(value) {
        this.set("x", value);
    }

    get y() {
        return this.get("y");
    }

    set y(value) {
        this.set("y", value);
    }

    get width() {
        return this.get("width");
    }

    set width(value) {
        this.set("width", value);
    }

    get height() {
        return this.get("height");
    }

    set height(value) {
        this.set("height", value);
    }
}
