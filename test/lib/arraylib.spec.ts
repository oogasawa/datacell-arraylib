
import { isSubset } from "../../src/lib/arraylib";

import * as log4js from "log4js";
const logger = log4js.getLogger();


describe('arraylib', () => {

    describe("#isSubset", () => {
        it('should return true, if a1 is a subset of a2.', () => {
            const a1 = ["A001", "A002"];
            const a2 = ["A001", "A002"];
            expect(isSubset(a1, a2)).toBeTruthy;
            expect(isSubset(a2, a1)).toBeTruthy;
        });

        it('should return false, if a1 is not a subset of a2.', () => {
            const a1 = ["A001", "A002", "A003"];
            const a2 = ["A001", "A002"];
            expect(isSubset(a1, a2)).toBeFalsy;
            expect(isSubset(a2, a1)).toBeTruthy;
        });


    });

});
