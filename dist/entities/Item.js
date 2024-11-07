"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const typeorm_1 = require("typeorm");
let Item = class Item {
    constructor() {
        this.hideAt = null;
    }
    get itemName() {
        return this.name;
    }
};
exports.Item = Item;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Item.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Item.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Item.prototype, "itemCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "keyCode", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        precision: 20,
        scale: 4,
        default: 0,
    }),
    __metadata("design:type", Number)
], Item.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "numeric" }),
    __metadata("design:type", Number)
], Item.prototype, "buyingPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "sellingPriceRetail", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "sellingPriceWholesale", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "minimumStockLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "maxStockLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "point", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 2 }),
    __metadata("design:type", Number)
], Item.prototype, "cashScoreForRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Item.prototype, "creditScoreForRef", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "itemPic", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "sellingPriceLoose", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "deception", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "otherItemName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], Item.prototype, "retailSpecialDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], Item.prototype, "wholesaleSpecialDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "date", default: null }),
    __metadata("design:type", Object)
], Item.prototype, "hideAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "boolean",
        default: false,
    }),
    __metadata("design:type", Boolean)
], Item.prototype, "vatEnabled", void 0);
exports.Item = Item = __decorate([
    (0, typeorm_1.Entity)({ name: "item" })
], Item);
//# sourceMappingURL=Item.js.map