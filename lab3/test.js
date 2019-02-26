let itemCount = 0;
let items = [
    {id: itemCount++, item: "item001"},
    {id: itemCount++, item: "item002"},
    {id: itemCount++, item: "item003"},
];
getItem = () => {
    return new Promise((fulfill, reject) =>{
        setTimeout(() => {
            // console.log(items);
            if(items.length > 0) fulfill(items.shift());
            reject("No items left!");
        },750);
    });

}
getItem().then((firstItem) =>{
    console.log(firstItem);
});
