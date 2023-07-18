const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR"
    }
    final_str = ""
    while (num > 0){
        final_str = final_str + string
        num--
    }
    return final_str
};

// Do not edit below this line
module.exports = repeatString;
