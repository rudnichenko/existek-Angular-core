var FileCache = /** @class */ (function () {
    function FileCache() {
        this.store = new Map();
    }
    FileCache.prototype.set = function (key, value) {
        this.store.set(key, value);
    };
    FileCache.prototype.get = function (key) {
        return this.store.get(key);
    };
    return FileCache;
}());
var cache1 = {};
cache1.mtime = 32;
cache1.content = 'string32';
var fileCache1 = new FileCache();
fileCache1.set('1', cache1);
console.log(fileCache1);
