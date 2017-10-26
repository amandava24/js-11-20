/**
 * Javascript problems 11-20 were created by Amanda Van Sickle on 10/10/17.
 */

// 11. firstLast6
function firstLast6(int){
    if(int[0] == 6){
        return true;
    }
    if(int[int.length-1] == 6){
        return true;
    }else{
        return false;
    }
}


// 12. has23
function has23(int){
    for(var i = 0; i < int.length; i++){
        if(int[i] == 2 || int[i] == 3){
            return true;
        }
        if(int[i+1] == 2 || int[i+1] == 3){
            return true;
        }
        return false;
    }
}

// 13. fix23
function fix23(int){
    for(var i = 0; i < int.length; i++){
        if(int[i + 1] == 2 && int[i+1] == 3){
            int[i + 1] = 0;
        }
    }
    for(var i = 0; i < int.length; i++){
        if(int[i] == 2 && int[i + 1] == 3){
            int[i + 1] = 0;
        }
    }
    return int;
}


// 14. Count YZ
function countYZ(str){
    var lowerCase = str.toLowerCase();
    var total = 0;
    for(var i = 0; i < lowerCase.length; i++){
        if(lowerCase[i] == 'y' || lowerCase[i] == 'z'){
            if(lowerCase[i + 1] == ' ') {
                total = total + 1;
            }
        }
    }
    if(lowerCase[lowerCase.length-1] == 'y' || lowerCase[lowerCase.length-1] == 'z') {
        total++;
    }
    return total;
}



// 15. endOther
function endOther(one, two) {
    var oneLC = one.toLowerCase();
    var twoLC = two.toLowerCase();
    var total = 0;
    if(oneLC.length >= twoLC.length) {
        if (oneLC.endsWith(twoLC)) {
            return true;
        }
        return false;
    }
    if(twoLC.length >= oneLC.length) {
        if (twoLC.endsWith(oneLC)) {
            return true;
        }
        return false;
    }
}

// 16. starOut
function starOut(string){
    var newS= "";
    for(var i = 0; i < string.length; i++){
        if(string[i] != "*"){
            if(string[i+1] != "*"){
                if(string[i-1] != "*"){
                    newS += string[i];
                }
            }
        }
    }
    return newS;
}

// 17. getSandwich
function getSandwich(string){
    var start = string.indexOf("bread");
    var end = string.lastIndexOf("bread");
    var middle = end-start;
    var meat = string.substring(middle);
    if (start == end){
        return "";
    }
    return string.substring(start+5, end);
}


//18. Can Balance
function canBalance(array){
    var arrayLength = array.length;
    for(var i = 0; i < arrayLength; i++){
        var firstHalf = array.slice(0, i);
        var secondHalf = array.slice(i);
        var one = 0;
        var two = 0;
        for(var a = 0; a < firstHalf.length; a++){
            var one = one + firstHalf[a];
        }
        for(var v = 0; v < secondHalf.length; v++){
            var two = two + secondHalf[v];
        }
        if(two == one){
            return true;
        }
    }
    return false;
}

// 19. Count Clumps
function countClumps(nums) {
    var match = false;
    var count = 0;
    for(var i = 0; i < nums.length-1; i++){
        if(nums[i] == nums[i+1] && !match){
            match = true;
            count++;
        }
        else if(nums[i] != nums[i+1]){
            match = false;
        }
    }
    return count;
}

// 20. Evenly Spaced
function evenlySpaced(a, b, c){
    if(a==b && b==c){
        return true;
    }
    if(a==b || a==c || b==c){
        return false;
    }
    return ((a+b) == 2*c) || ((a+c) == 2*b) || ((b+c) == 2*a);
}









function tester(){

    document.getElementById("output11").innerHTML = firstLast6([1,2,6]);
    document.getElementById("output12").innerHTML = has23([3,5]);
    document.getElementById("output13").innerHTML = fix23([1,2,3]);
    document.getElementById("output14").innerHTML = countYZ("y2bz");
    document.getElementById("output15").innerHTML = endOther("Hiabc", "abc");
    document.getElementById("output16").innerHTML = starOut("ab*cd");
    document.getElementById("output17").innerHTML = getSandwich("breadjambread");
    document.getElementById("output18").innerHTML = canBalance([2, 1, 1, 2, 1]);
    document.getElementById("output19").innerHTML = countClumps([1,2,2,3,4,4]);
    document.getElementById("output20").innerHTML = evenlySpaced([2,4,6]);
}
