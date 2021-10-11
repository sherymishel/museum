let sub1 = document.querySelectorAll('.minus1')
let sub2 = document.querySelectorAll('.minus2')
let add1 = document.querySelectorAll('.plus1')
console.log(add1)
let add2 = document.querySelectorAll('.plus2')
let num1 = document.querySelectorAll('.counter_text1')
console.log(num1)
let num2 = document.querySelectorAll('.counter_text2')
let total =  document.querySelectorAll('.total')
let buyBtn = document.querySelector('.buy_btn')

total.innerHTML = 0
let number1 = 0;
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
let currentDate = y + "-" + m + "-" + d;

let calendar = document.querySelector('.calendar')
calendar.min = currentDate
calendar.value = currentDate

calendar.onchange = function() {
    document.querySelector('.booking_date').innerHTML = this.value
}


let time = document.querySelector('.time')
time.onchange = function() {
    document.querySelector('.booking_time').innerHTML = this.value
}
    for (let k = 9; k < 19; k++) {
            let optionZ = document.createElement('option')
            let optionH = document.createElement('option')
            optionZ.innerHTML = k + ':' + '00'
            optionH.innerHTML = k + ':' + '30'
            time.append(optionZ)
            time.append(optionH)
}



for (let i = 0; i < add1.length; i++) {
    add1[i].addEventListener('click', () => {
        sub1[i].disabled = false;
        number1 += 1;
        num1[i].innerHTML = number1;
        for (let t of total) {
            t.innerHTML =  +t.innerHTML + ticPrice
           }
    })
}
for (let i = 0; i < add1.length; i++) {
    sub1[i].disabled = true;
    
    sub1[i].addEventListener('click', () => {
        number1 -= 1;
        if (number1 >= 0) {
            num1[i].innerHTML = number1;
        }
        if (number1 == 0) {
            sub1[i].disabled = true;
        }
        for (let t of total) {
            t.innerHTML = +t.innerHTML - ticPrice
           }
    })
}
   
let number2 = 0;
for (let k = 0;  k < add2.length; k++) {
   add2[k].addEventListener('click', () => {
    sub2[k].disabled = false;
    number2 += 1;
    num2[k].innerHTML = number2;
    let n = number1 + number2
    for (let t of total) {
        t.innerHTML = +t.innerHTML + ticPrice/2
       }
}) 
}

for (let k = 0; k < sub2.length; k++) {
    sub2[k].disabled = true;
    sub2[k].addEventListener('click', () => {
        number2 -= 1;
        if (number2 >= 0) {
        num2[k].innerHTML = number2;
        let n = number1 + number2
        for (let t of total) {
            t.innerHTML = +t.innerHTML + ticPrice/2
        }
        }
        if (number2 == 0) {
            sub2[k].disabled = true;
        }
    })
}

let buyDiv = document.querySelector('.buy')
let bookingDiv  = document.querySelector('.booking')

buyBtn.onclick = function() {
    num1[1].innerHTML = num1[0].innerHTML
    num2[1].innerHTML = num2[0].innerHTML
    bookingDiv.style.visibility = 'visible'
}


let close = document.querySelector('.close')
close.onclick = function() {
    bookingDiv.style.visibility = 'hidden'
}


let ticPrice = 20;
let exType = document.querySelector('.ex-type')
exType.onchange = function() {
    //for (let option of exType) {
        
        
        document.querySelector('.exType').innerHTML = this.value
        if (this.value == 'Permanent Exhibition') {
            ticPrice = 20;
        }
        if (this.value == 'Temporary Exhibition') {
         ticPrice = 25;
        }
        if (this.value == 'Combined Admission') {
            ticPrice = 40;
        }
        total[0].innerHTML = (+num1[1].innerHTML + +num2[1].innerHTML/2)*ticPrice;
        // let sp = document.createElement('span')
        // sp.innerHTML = (+num1[1].innerHTML + +num2[1].innerHTML)*ticPrice
        // total = sp
     //}
     console.log(ticPrice, total)
}

let exOption = document.querySelectorAll('.ex-opt')


// console.log(exOption, 1111111111111111111111)
// for (let option of exOption) {

//    option.onclick = function() {
//         document.querySelector('.total').innerHTML = +document.querySelector('.total').innerHTML  + 2
//         console.log(document.querySelector('.total').innerHTML)
//        }
//    }

// console.log(document.querySelector('.total').innerHTML)



// let play = document.querySelector('.play-big')
// let video = document.querySelector('.main-video')
// play.addEventListener('click', () => {
//     video.play()
// })

let squares = document.querySelectorAll('.sq')
console.log(squares)
let arLeft = document.querySelector(".ar-left")
let arRight = document.querySelector(".ar-right")

// for (let square of squares) {
//     square.addEventListener('click', () => {
//         if (!squares.includes(square.styl))
//         square.classList.add('sq-big')
//     })
// }
let images = ['img/monalisa.png', 'img/place.png', 'img/vids/y1.png', 'img/vids/y2.png', 'img/vids/y3.png']
let slide = document.querySelector('.slide')
let i = 0;
//squares[0].classList.add('sq-big')
let welcome = document.querySelector('.welcome')
    arRight.addEventListener('click', () => {
        if (i < 5) {
            i += 1;
        }
        else {
            i = 1;
        }
        welcome.style.backgroundImage = `url('${images[i - 1]}')`
            slide.innerHTML = i;
            if (i - 2 < 0) {
                squares.forEach(square => square.classList.remove('sq-big'))
             }
             else {
                squares[i - 2].classList.remove('sq-big')
             }
            squares[i - 1].classList.add('sq-big')
       
    })

    //let k = 5;
    arLeft.addEventListener('click', () => {
        if (i > 1) {
            i -= 1;
        }
        else {
            i = 5;
        }
        welcome.style.backgroundImage = `url('${images[i - 1]}')`
            slide.innerHTML = i;
            squares.forEach(square => square.classList.remove('sq-big'))
            squares[i - 1].classList.add('sq-big')
       
    })

let body = document.querySelector('body')
let burger = document.querySelector('.buger-menu')
 let list = document.querySelector('#navigation')
 console.log(burger, list)
 let st = burger.innerHTML
 console.log(st)
burger.addEventListener('click', () => {
    if (burger.innerHTML == 'X') {
        list.style.display = 'none'
        burger.innerHTML = st
    }
    else {
    list.style.display = 'block'
    list.classList.add('ul-cover')
    burger.innerHTML = 'X';
    console.log(burger.innerHTML)
    }
})


let play = document.querySelectorAll('.play')
let video = document.querySelectorAll('video')
console.log(play, video)
for (let i = 0; i < play.length; i++) {
    play[i].addEventListener('click', () => {
        if (play[i].innerHTML == 'pause') {
            video[i].pause();
            play[i].innerHTML = 'play';
        }
        else {
            video[i].play()
            play[i].innerHTML = 'pause'
        }
    })
}

console.log(video[0].poster)

let bullets = document.querySelectorAll('.bullet')
let strokeLeft = document.querySelector('.stroke-left')
let strokeRight = document.querySelector('.stroke-right')
bullets[0] = bullets[1]
console.log(bullets[0])
let c = 0
for (let i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener('click', () => {
        bullets.forEach(bullet => bullet.innerHTML = `<img class="bullet-dark" src="img/Ellipse 5.svg" alt="">`)
        bullets[i].innerHTML = `<img class="bullet-dark" src="img/Ellipse 4.svg" alt="">`
        c = i
    })
}
strokeRight.addEventListener('click', () => {
    c++
    if (c >= bullets.length) {
        c = 0;
        bullets.forEach(bullet => bullet.innerHTML = `<img class="bullet-dark" src="img/Ellipse 5.svg" alt="">`)
        bullets[c].innerHTML = `<img class="bullet-dark" src="img/Ellipse 4.svg" alt="">`
    }
    else {
        bullets[c - 1].innerHTML = `<img class="bullet-dark" src="img/Ellipse 5.svg" alt="">`
          bullets[c].innerHTML = `<img class="bullet-dark" src="img/Ellipse 4.svg" alt="">`
    }
})

strokeLeft.addEventListener('click', () => {
    c--
    if (c < 0) {
        c = bullets.length - 1;
        bullets.forEach(bullet => bullet.innerHTML = `<img class="bullet-dark" src="img/Ellipse 5.svg" alt="">`)
        bullets[c].innerHTML = `<img class="bullet-dark" src="img/Ellipse 4.svg" alt="">`
    }
    else {
        bullets[c + 1].innerHTML = `<img class="bullet-dark" src="img/Ellipse 5.svg" alt="">`
          bullets[c].innerHTML = `<img class="bullet-dark" src="img/Ellipse 4.svg" alt="">`
    }
})






// body.addEventListener('click', () => {
//     console.log(1)
//     if (list.style.display = 'none') {
//         list.style.display = 'none'

//     }
// })
// let sub = document.querySelector('.minus')
// let add = document.querySelector('.plus')
// let quant = document.querySelector('.counter_text')
// console.log(quant.closest('div'))

// let number = 0;
// console.log(sub, add, quant)
// sub.addEventListener('click', () => {
//     number -= 1;
//     if (number >= 0) {
       
//     quant.innerHTML = number;
//     }
// })
// add.addEventListener('click', () => {
//     number += 1;
//     quant.innerHTML = number;
// })

// let subs = document.querySelectorAll('.minus')
// let adds = document.querySelectorAll('.plus')
// let quants = document.querySelectorAll('.counter_text')
// let number = 0
// let counters = document.querySelectorAll('.counter')
// for (let counter of counters) {
//     for (let add of adds) {
//         add.addEventListener('click', () => {
//             for (let quant of quants) {
//                 if (quant.closest('div') == add.closest('div')) {
//                     number += 1
//                     console.log(number)
//                     quant.innerHTML = number - 1;
//                     break;
//                 }
//             }
//         })
//     }
// }