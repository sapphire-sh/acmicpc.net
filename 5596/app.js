console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }).reduce(function(p, c) { return (p + c); }); }).sort(function(a, b) { return (b - a); })[0]);
