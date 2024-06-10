/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const smap = {};
    const tmap = {};

    for(var i = 0; i < s.length; i++) {
        smap[s[i]] = smap[s[i]] ? smap[s[i]] + 1 : 1;
        smap[t[i]] = smap[t[i]] ? smap[t[i]] - 1 : -1;
    }

    for (let key in smap) {
        if (smap.hasOwnProperty(key) && smap[key] === 0) {
            delete smap[key];
        }
    }

    return Object.keys(smap).length === 0;
};
