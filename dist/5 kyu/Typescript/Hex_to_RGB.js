"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexStringToRGB = hexStringToRGB;
function hexStringToRGB(hexString) {
    if (hexString.length === 0)
        return { r: 0, g: 0, b: 0 };
    const hex = hexString.slice(1).toLowerCase().match(/.{1,2}/g)?.map(el => parseInt(el, 16)) || [];
    return { r: hex[0], g: hex[1], b: hex[2] };
}
//# sourceMappingURL=Hex_to_RGB.js.map