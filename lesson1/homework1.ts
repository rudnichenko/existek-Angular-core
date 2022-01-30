interface ICacheItem {
	mtime: number;
	content: string;
}

interface IFileCache {
	set: (key: string, value: ICacheItem) => void;
	get: (key: string) => ICacheItem;
}

class FileCache implements IFileCache {
	private store = new Map<string, ICacheItem>();

	set(key: string, value: ICacheItem): void {
		this.store.set(key, value);
	}

	get(key: string): ICacheItem {
		return this.store.get(key);
	}
}

let cache1 = <ICacheItem>{};
cache1.mtime = 32;
cache1.content = 'string32';

let fileCache1 = new FileCache();
fileCache1.set('1', cache1);

console.log(fileCache1);