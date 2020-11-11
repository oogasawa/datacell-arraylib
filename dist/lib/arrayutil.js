"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSubset = void 0;
/** Check if an array a1 is a subset of an array a2, compared as unordered sets.
 *
 * @param a1
 * @param a2
 */
function isSubset(a1, a2) {
    const s2 = new Set();
    for (let i = 0; i < a2.length; i++) {
        s2.add(a2[i]);
    }
    for (let i = 0; i < a1.length; i++) {
        if (!s2.has(a1[i])) {
            return false;
        }
    }
    return true;
}
exports.isSubset = isSubset;
