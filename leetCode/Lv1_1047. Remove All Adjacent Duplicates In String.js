// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let str = s;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i+1]){
        	str = str.slice(0,i) + str.slice(i+2);
            i = i - 2 < 0 ? -1 : i - 2;
        }
    }
    return str;
};
