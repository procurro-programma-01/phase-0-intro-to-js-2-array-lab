// Write your solution here!
const cats = [`Milo`,`Otis`,`Garfield`]

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);

}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    const Copyofcats = [...cats];
    Copyofcats.push(name);
    return Copyofcats;

}
function prependCat(name){
    const Copyofcats = [...cats];
    Copyofcats.unshift(name);
    return Copyofcats;
}
function removeLastCat(name){
    const Copyofcats = [...cats];
    Copyofcats.pop(name);
    return Copyofcats;
}
function removeFirstCat(name){
    const Copyofcats = [...cats];
    Copyofcats.shift(name);
    return Copyofcats;
}