console.log(parseInt(require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return e.split('').reverse().join(''); }).map(function(e) { return parseInt(e); }).reduce(function(p, c) { return (p + c); }).toString().split('').reverse().join('')));