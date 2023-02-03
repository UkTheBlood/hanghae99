function outer() {
    let a = 1;
    let b = 'B';
    
    function inner() {
        let a = 2;
        console.log(b);
    }
    return inner();
}

outer();

let someFun = outer();  //outer에 있는 inner을 받는다.
someFun();