// https://leetcode.com/problems/find-median-from-data-stream/

var MedianFinder = function() {
    this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.nums.length === 0) {
        this.nums.push(num)
        return;
    }
    let low = 0;
    let hight = this.nums.length;
    while (low < hight) {
        const mid = Math.floor((low + hight) / 2);
        if(this.nums[mid] < num) {
            low = mid + 1;
        } else {
            hight = mid;
        }
    }
    this.nums.splice(low, 0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const mid = Math.floor(this.nums.length / 2);
    if (this.nums.length % 2 === 0) {
        return (this.nums[mid-1] + this.nums[mid]) / 2
    } else {
        return this.nums[mid]
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */