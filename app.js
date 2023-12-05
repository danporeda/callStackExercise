// const repeat = (str, times) => {
//     let result = '';
//     for (let i = 0; i < times; i++) {
//         result += str;
//     }
//     return result;
// };

// const scream = (str) => {
//     return str.toUpperCase() + '!!!';
// };

// const getRantText = (phrase) => {
//     let text = scream(phrase);
//     let rant = repeat(text, 8);
//     return rant;
// };

// const makeRant = (phrase, el) => {
//     const h1 = document.createElement('h1');
//     h1.innerText = getRantText(phrase);
//     el.appendChild(h1);
// };

// makeRant('I love mayonnaise', document.body);
// makeRant('if you have to cough, please cover your mouth', document.body);

const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`;
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`;
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

const moveX = (element, amount, delay, callback) => {
    const clientWidth = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;

    setTimeout(() => {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        if (callback) callback();
    }, delay);
}

moveX(btn, 100, 1000, () => {
    moveX(btn,100,1000, () => {
        moveX(btn,100,1000, () => {
            moveX(btn,100,1000, () => {
                moveX(btn,100,1000);
            });
        });
    });
});