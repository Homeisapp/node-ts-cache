"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RedisStorage_1 = require("./storages/RedisStorage");
exports.RedisStorage = RedisStorage_1.RedisStorage;
var FsJsonStorage_1 = require("./storages/FsJsonStorage");
exports.FsJsonStorage = FsJsonStorage_1.FsJsonStorage;
var MemoryStorage_1 = require("./storages/MemoryStorage");
exports.MemoryStorage = MemoryStorage_1.MemoryStorage;
var ExpirationStrategy_1 = require("./strategies/ExpirationStrategy");
exports.ExpirationStrategy = ExpirationStrategy_1.ExpirationStrategy;
var CacheDecorator_1 = require("./CacheDecorator");
exports.Cache = CacheDecorator_1.Cache;
//# sourceMappingURL=index.js.map