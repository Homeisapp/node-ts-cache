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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var MemoryStorage_1 = require("./storages/MemoryStorage");
var ExpirationStrategy_1 = require("./strategies/ExpirationStrategy");
var Assert = require("assert");
var CacheDecorator_1 = require("./CacheDecorator");
var strategy = new ExpirationStrategy_1.ExpirationStrategy(new MemoryStorage_1.MemoryStorage());
var data = ['user', 'max', 'test'];
var TestClassOne = /** @class */ (function () {
    function TestClassOne() {
    }
    TestClassOne.prototype.getUsers = function () {
        return data;
    };
    TestClassOne.prototype.getUsersPromise = function () {
        return Promise.resolve(data);
    };
    __decorate([
        CacheDecorator_1.Cache(strategy, { ttl: 1000 }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Array)
    ], TestClassOne.prototype, "getUsers", null);
    __decorate([
        CacheDecorator_1.Cache(strategy, { ttl: 1000 }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TestClassOne.prototype, "getUsersPromise", null);
    return TestClassOne;
}());
var TestClassTwo = /** @class */ (function () {
    function TestClassTwo() {
    }
    TestClassTwo.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () { return resolve(data); }, 500);
                    })];
            });
        });
    };
    __decorate([
        CacheDecorator_1.Cache(strategy, { ttl: 20000 }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TestClassTwo.prototype, "getUsers", null);
    return TestClassTwo;
}());
describe('CacheDecorator', function () {
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, strategy.clear()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should decorate function with ExpirationStrategy correctly', function () { return __awaiter(_this, void 0, void 0, function () {
        var myClass;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    myClass = new TestClassOne();
                    return [4 /*yield*/, myClass.getUsersPromise()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should cache function call correctly', function () { return __awaiter(_this, void 0, void 0, function () {
        var myClass, users, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    myClass = new TestClassOne();
                    return [4 /*yield*/, myClass.getUsers()];
                case 1:
                    users = _c.sent();
                    Assert.strictEqual(data, users);
                    _b = (_a = Assert).strictEqual;
                    return [4 /*yield*/, strategy.getItem('TestClassOne:getUsers:[]')];
                case 2:
                    _b.apply(_a, [_c.sent(), data]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should cache Promise response correctly', function () { return __awaiter(_this, void 0, void 0, function () {
        var myClass;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    myClass = new TestClassOne();
                    return [4 /*yield*/, myClass.getUsersPromise().then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        Assert.strictEqual(data, response);
                                        _b = (_a = Assert).strictEqual;
                                        return [4 /*yield*/, strategy.getItem('TestClassOne:getUsersPromise:[]')];
                                    case 1:
                                        _b.apply(_a, [_c.sent(), data]);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should cache async response correctly', function () { return __awaiter(_this, void 0, void 0, function () {
        var myClass, users, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    myClass = new TestClassTwo();
                    return [4 /*yield*/, myClass.getUsers()];
                case 1:
                    users = _c.sent();
                    Assert.strictEqual(data, users);
                    _b = (_a = Assert).strictEqual;
                    return [4 /*yield*/, strategy.getItem('TestClassTwo:getUsers:[]')];
                case 2:
                    _b.apply(_a, [_c.sent(), data]);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=CacheDecorator.spec.js.map