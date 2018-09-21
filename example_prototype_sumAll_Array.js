//prototype to sum all elements until remain only one decimal place

Array.prototype.sumAll = function() {
    var sum = 0;

    for (i = 0; i < this.length; i++) {
        //it will sum one by one the numbers in the Array
        sum += this[i];
    }

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

var arr = [1, 2, 3, 4, 5];

console.log(arr.sumAll());