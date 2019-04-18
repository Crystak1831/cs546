(function(){
    isPrime = (num) =>{
        num = Number(num);
        if(!Number.isInteger(num) || num < 2)
            alert("Please input a positive integer greater than 2");
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i == 0)
                return false;
        }
        return true;
    };
    const myForm = document.getElementById("myForm");
    if(myForm){
        const textInput = document.getElementById("inputNum");
        myForm.addEventListener("submit",event=>{
            event.preventDefault();
            // alert(typeof textInput.value);
            if(isPrime(textInput.value)){
                $("ol#attempts").append(`<li class="is-prime">` + Number(textInput.value).toString() +` is a prime number</li>`);
            }else{
                $("ol#attempts").append(`<li class="not-prime">` + Number(textInput.value).toString() +` is NOT a prime number</li>`);
            }
        });
    }
})();
