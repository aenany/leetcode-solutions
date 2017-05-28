/**
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    var copy = nums.slice();
    var player1Picks = [];
    var player2Picks = [];
    var playerPick;
    for(var i=1; i<nums.length+1; i++){
        if(i % 2 == 0){ //player2 turn
            playerPick = copy[0] > copy[copy.length - 1] ? copy.splice(0,1) : copy.splice(copy.length-1, 1);
            player2Picks.push(playerPick[0]);
        } else { //player1 turn
            playerPick = copy[0] > copy[copy.length - 1] ? copy.splice(0,1) : copy.splice(copy.length-1, 1);
            player1Picks.push(playerPick[0]);
        }        
    }
    var result;
    result = player1Picks.reduce(function(a,b){return a+b}, 0) > player2Picks.reduce(function(a,b){return a+b}, 0) ? true : false;
    result = player1Picks.reduce(function(a,b){return a+b}, 0) = player2Picks.reduce(function(a,b){return a+b}, 0) ? true : result;
    return result;
};