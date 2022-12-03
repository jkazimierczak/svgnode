// MIT License

// Copyright (c) 2022 jkazimierczak

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
            this.x + this.width >= svg.x && // left-edge
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
