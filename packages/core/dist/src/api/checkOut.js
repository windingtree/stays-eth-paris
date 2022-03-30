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
exports.checkOut = void 0;
const sendHelper_1 = require("../utils/sendHelper");
// Check out
const checkOut = (contract, tokenId, overrides, transactionHashCb, confirmations = 1) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    overrides = overrides ? overrides : {};
    const receipt = yield (0, sendHelper_1.sendHelper)(contract, 'checkOut', [
        tokenId
    ], undefined, // use already connected signer,
    overrides, transactionHashCb, confirmations);
    const event = (_a = receipt.events) === null || _a === void 0 ? void 0 : _a.find(e => e.event == 'CheckOut');
    const checkedOutTokenId = (_b = event === null || event === void 0 ? void 0 : event.args) === null || _b === void 0 ? void 0 : _b.tokenId;
    if (!tokenId === checkedOutTokenId.toString()) {
        throw new Error('Unable to find information about checked-out token');
    }
});
exports.checkOut = checkOut;
//# sourceMappingURL=checkOut.js.map