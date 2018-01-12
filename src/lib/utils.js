export const partial = (fn, ...args) => fn.bind(null, ...args);

const _pipe = (f, g) => (...args) => g(f(...args))

export const pipe = (...fns) => fns.reduce(_pipe)

// pipe executes functions from left to right
// compose executes them from right to left.
// Two ways of applying functional programming to this problem
function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

function compose(...fns) {
    return __pipe(...fns.reverse());
}

function __pipe(...fns) { 
    return function piped(result) {
        for (var i = 0; i < fns.length; i++) {
            result = fns[i]( result );
        }
        return result;
    }
}

var f = compose(decrement, double, increment, half);
var p = __pipe(half, increment, double, decrement);