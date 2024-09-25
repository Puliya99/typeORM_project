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
const DataSource_1 = require("./DataSource");
function initialize() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield DataSource_1.AppDataSource.initialize();
            yield DataSource_1.AppDataSource.runMigrations();
            console.log('Migrations have been executed.');
        }
        catch (error) {
            console.error('Error during Data Source initialization or migrations execution:', error);
        }
        finally {
            yield DataSource_1.AppDataSource.destroy();
        }
    });
}
initialize().catch((error) => console.error("Initialization Error:", error));
//# sourceMappingURL=index.js.map