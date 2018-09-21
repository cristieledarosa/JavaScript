//prototype to sum all elements until remain only one decimal place

Number.prototype.sumAll = function() {
    var sum = this;

    //will check if it has more than one decimal place
    while (sum > 9) {
        var splitNumber = sum.toString();

        //split and sum again
        for (i = 0, sum = 0; i < splitNumber.length; i++) {
            sum += parseInt(splitNumber.charAt(i));
        }
    }

    return sum;
};

var n = 12345;

console.log(n.sumAll());