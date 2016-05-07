/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    var row =  dungeon.length;
    var column = dungeon[0].length;
    var ans = [];
    for(m = 0; m < row;++m){
        ans.push([]);
        for(n = 0; n < column ; ++n){
            ans[m].push(0);
        }
    }
    var infinity = Number.MAX_SAFE_INTEGER;
    
    for(i = row - 1; i >= 0; --i){
        for(j = column - 1; j >= 0; --j){
            var candidateR, candidateD;
            if(j == column -1 && i == row -1){
                ans[i][j] = (1 - dungeon[i][j] > 0)? 1 - dungeon[i][j]:1;
                continue;
            }
            else if(j == column - 1){
                candidateR = infinity;
                candidateD = ans[i+1][j];
            }
            else if(i == row - 1){
                candidateD = infinity;
                candidateR = ans[i][j + 1];
            }
            else{
                candidateR = ans[i][j + 1];
                candidateD = ans[i+1][j];
            }
            
            var possibleR = (candidateR - dungeon[i][j] > 0)? candidateR - dungeon[i][j]:1;
            var possibleD = (candidateD - dungeon[i][j] > 0)? candidateD - dungeon[i][j]:1;
            
            ans[i][j] = Math.min(possibleR, possibleD);
        }
    }
    
    return ans[0][0];

    
};