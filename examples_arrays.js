function getSecondLargest(nums) {
    let len = nums.length;

    // Complete the function
    nums.sort((x, y) => x > y);

    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] != nums[len - 1]) {
            return nums[i];
        }
    }
}

function minimumSwaps(arr) { //not finished
    let total = 0, temp = 0;

    for (let i = 0; i <= arr.length;) {
        if (arr[i] != i + 1) {
            temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
            total++;
        }
        else {
            i++;
        }
    }

    console.log('final array ' + arr);
    console.log('Total ' + total);
    return total;
}

function repeatedString(s, n) {
    let arr = s.split('a');
    let t = Math.trunc(n / s.length);
    let rest = n % s.length;
    let out = (arr.length - 1) * t;

    if (rest) {
        let aux = s.slice(0, rest).split('a').length;
        out += aux - 1;
    }

    return out;
}

function hourglassSum(arr) {
    let count = -100;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

            if(sum > count){
                count = sum;
            }
        }
    }

    return count;
}