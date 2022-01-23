function memoize(func){
let cachedValue;
let isCached = false;

return function(){
if(isCached){
return cachedValue;
}
cachedValue = myFunc();
isCached= true;
return cachedValue;
}
}

function getValue(){}

const memoizedGetValue = memoize(getValue)


memoizedGetValue(); //calculated
memoizedGetValue(); //cached
memoizedGetValue(); //cached

