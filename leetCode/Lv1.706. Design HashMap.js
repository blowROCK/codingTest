// https://leetcode.com/problems/design-hashmap/


var MyHashMap = function() {    
    this.map = new Map()
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.map.set(key, value)
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.map.has(key) ? this.map.get(key) : -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    this.map.delete(key)
};
