"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeTypeItemSellingPriceIntegerToNumeric1730961665937 = void 0;
class ChangeTypeItemSellingPriceIntegerToNumeric1730961665937 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
            ALTER TABLE item
            ALTER COLUMN "sellingPriceRetail" TYPE numeric USING "sellingPriceRetail"::numeric
        `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
            ALTER TABLE item
            ALTER COLUMN "sellingPriceRetail" TYPE integer USING "sellingPriceRetail"::integer
        `);
        });
    }
}
exports.ChangeTypeItemSellingPriceIntegerToNumeric1730961665937 = ChangeTypeItemSellingPriceIntegerToNumeric1730961665937;
//# sourceMappingURL=1730961665937-changeTypeItemSellingPriceIntegerToNumeric.js.map