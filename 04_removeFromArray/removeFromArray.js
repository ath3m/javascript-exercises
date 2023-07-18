const removeFromArray = function(arr, ...args) {
    new_arr = []
    for (num in arr){
        if (args.includes(arr[num])){
            continue
        }
        else {
            new_arr.push(arr[num])
        }
    }
    return new_arr
};

// Do not edit below this line
module.exports = removeFromArray;
