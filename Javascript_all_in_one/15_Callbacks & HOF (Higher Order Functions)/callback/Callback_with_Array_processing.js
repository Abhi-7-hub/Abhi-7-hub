function first(item){
    console.log('Item:' +item);
}

function processArray(arr,callback){
    for(let i=0; i<arr.length; i++){
        callback(arr[i]);
    }
}
processArray(["apple", "banana", "mango"], first);