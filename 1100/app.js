console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(''); }).map(function(e, i) { return e.map(function(f, j) { if((i + j) % 2 === 0 && f === 'F') { return 1; } else { return 0; } }).reduce(function(prev, curr) { return prev + curr; }); }).reduce(function(prev, curr) { return prev + curr; }));
