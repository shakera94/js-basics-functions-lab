// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
    return blockNumber - 42}
    else (blockNumber < 42) 
    return 42 - blockNumber    
    }
function distanceFromHqInFeet(blockNumber){
  let block;
    block = distanceFromHqInBlocks(blockNumber)
    return block *264
}
function distanceTravelledInFeet(beginning, destination) {
    if (beginning > destination) {
        return (beginning - destination) * 264}
        else { 
        return (destination - beginning) * 264}
}
function calculatesFarePrice(beginning, destination) {
    let distance = distanceTravelledInFeet (beginning, destination)
    if (distance < 400) {
        return 0 ;}
    else if (distance > 400 && distance < 2000)
    return .02 * (distance-400);
    else if (distance > 2000 && distance < 2500) {
     return 25
    }
    else (distance > 2500) ;
        return 'cannot travel that far'
}