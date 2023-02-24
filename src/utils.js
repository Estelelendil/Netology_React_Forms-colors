export function hex2rgb(c) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return result ? `rgb(${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)
        })`
        //  {
        //     r: parseInt(result[1], 16),
        //     g: parseInt(result[2], 16),
        //     b: parseInt(result[3], 16)
        // } 
        : null;
}

export default function checkHex(str) {
    // if (value.length === 7 && value[0] === '#') {
    //     return true
    // } else { return false }
    const hexColor = /#([a-f0-9]{6}|[a-f0-9]{3})\b/gi;
    return hexColor.test(str);
}