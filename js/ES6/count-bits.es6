/**
 * @param {number} num
 * @return {number[]}
 */

const countBits = num => {
    const r = [];
    for (let i=0, c=0; i <= num; c=0, i++) {        
        ((i >>> 0).toString(2).split('').forEach(e => { e == '1' ? c += 1 : c }));
        r.push(c);
    }
    return r;
};