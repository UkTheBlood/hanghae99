const car = {
    name: 'KIA',
    getName: function() {
        console.log('car getName', this)
    }
}

car.getName();      //A.b (A가 b를 부른 형태)
// => {name: 'KIA', getName: function} this가 function이 됨

const globalCar = car.getName
globalCar();    //b (밖에서 b가 호출된 것)

const car2 = {
    name : 'hyundai',
    getName: car.getName
}
car2.getName(); // => {name: 'hyundai', getName: function}
// car2 안에 this이기 때문에 car2의 name의 value인 hyundai가 결과값으로 나온다.


const btn = document.getElementById('button')
btn.addEventListener()('click', car.getName)

// => <button id="button">this는 누굴까</button>
// btn이라는 함수가 호출했기 때문에 위의 결과가 나옴

const bindGetname = car2.getName.bind(car)
bindGetname();
// => {name: 'KIA', getName: function}

const testCar = {
    name: 'benz',
    getName: function() {
        console.log("getname", this)
        const innerFunc = function() {
            console.log("innerFunc", this)
        }
        innerFunc();
    }
}

testCar.getName()

// => {name: 'benz', getName: function}
// => window... (윈도우 객체) 
//innerFunc 앞에 무언가가 없기 때문에 윈도우 객체가 만들어짐

//같게 만드는 방법

const testCar2 = {
    name: 'benz',
    getName: function() {
        console.log("getname", this)
        const innerFunc = () => {
            console.log("innerFunc", this)
        }
        innerFunc();
    }
}