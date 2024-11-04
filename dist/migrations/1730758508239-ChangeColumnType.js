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
exports.ChangeColumnType1730758508239 = void 0;
class ChangeColumnType1730758508239 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
            ALTER TABLE client
            ALTER COLUMN balance TYPE integer USING balance::integer
        `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
            ALTER TABLE client
            ALTER COLUMN balance TYPE numeric USING balance::numeric
        `);
        });
    }
}
exports.ChangeColumnType1730758508239 = ChangeColumnType1730758508239;
//# sourceMappingURL=1730758508239-ChangeColumnType.js.map