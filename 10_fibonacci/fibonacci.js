const fibonacci = function(count) {
    if(count < 0) return "OOPS"
    if(count==0) return 0
    first = 1
    second = 0
    for(i = 2; i <= count; i++){
        let newfirst = first + second
        second = first
        first = newfirst
    }
    return first

};

// Do not edit below this line
module.exports = fibonacci;
