console.log("start");
let itemSet = () => {
    let itemCount = 0;
    let items = [
        {id: itemCount++, item: "item001"},
        {id: itemCount++, item: "item002"},
        {id: itemCount++, item: "item003"},
    ];
    return {
        addItem: (item) =>{
            return new Promise((fulfill, reject) => {
                if(!item) reject("not provide an item");

                fulfill(items.push({id : itemCount++, itme: item}));
            });
        },
        getItem: () =>{
            return new Promise((fulfill, reject) =>{
                setTimeout(() => {
                    // console.log(items);
                    if(items.length > 0) fulfill(items.shift());
                    reject("No items left!");
                },750);
            });
        }
    }
}
let firstItemSet = itemSet();
let firstChain = firstItemSet.getItem().then((firstItem) =>{
    console.log("Got a new item");
    console.log(firstItem);
    return firstItemSet.getItem().then((secondItem) =>{
        console.log("Got aa new item");
        console.log(secondItem);
        return firstItemSet.getItem().then((thirdItem) =>{
            console.log("Got aaa new item");
            console.log(thirdItem);
            return firstItemSet.getItem().then((fourthItem) =>{
                return [firstItem, secondItem, thirdItem, fourthItem];
            }).catch(() =>{
                console.log("no fourth Item");
                return [firstItem, secondItem, thirdItem];
            });
        });
    });
});

let secondItemSet = itemSet();
console.log(firstItemSet === secondItemSet);
let secondChain = firstChain.then(() => {
    console.log("\n\n starting second chain");
    return secondItemSet.getItem().then((firstItem) => {
        console.log(firstItem);
        return [firstItem];
    });
}).then((itemsSofar) => {
    return secondItemSet.getItem().then((secondItem)=> {
        return itemsSofar.concat([secondItem]);
    });
}).then((itemsSofar) => {
    return secondItemSet.getItem().then((thirdItem) =>{
        return itemsSofar.concat([thirdItem]);
    });
}).then((items) => {
    console.log("all the items in chain 2 were : ");
    console.log(items);
    return items;
}) ;
