let x = 25;
for(let i = 0; i < 10; i++){
    console.log(`loop running`);
    process.nextTick(() => {
        console.log(`i is ${i}`);
    });
}
console.log("This is synchronous");
console.log(x / 12);
console.log(`x / 2 is ${x / 2}`);
//console.log(process); process.nextTick 加入轮询队列, 先执行后面的 或者新的请求,然后执行里面内容
console.log(`x / 2 is ` ${x / 2});
 