
const btn = document.querySelector('button');
const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if (elRight + amount > bodyBoundary) {
                reject({ bodyBoundary, elRight, amount });
            } else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        }, delay);
    })
};

moveX(btn, 300, 1000)
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .catch(({ bodyBoundary, elRight, amount }) => {
        console.log(`You are short ${(Math.round(elRight + amount) - bodyBoundary)} pixels of space`);
    });

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

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     setTimeout(() => {
//         const bodyBoundary = document.body.clientWidth;
//         const elRight = element.getBoundingClientRect().right;
//         const currLeft = element.getBoundingClientRect().left;
//         if (elRight + amount > bodyBoundary) {
//             onFailure();
//         } else {
//             element.style.transform = `translateX(${currLeft + amount}px)`;
//             onSuccess();
//         }
//     }, delay);
// };


// moveX(btn, 100, 1000, () => {
//     moveX(btn,100,1000, () => {
//         moveX(btn,100,1000, () => {
//             moveX(btn,100,1000, () => {
//                 moveX(btn,100,1000);
//             });
//         });
//     });
// });

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 400, 1000, () => {
//         moveX(btn, 700, 1000, () => {
//             console.log('REALLY, WE STILL HAVE SCREEN LEFT?');
//         },
//         () => {
//             alert('CANNOT MOVE FURTHER FROM THE TRUTH');
//         })
//     }, () => {
//         alert('CANNOT MOVE FURTHER');
//     })
// }, () => {
//     alert('CANNOT MOVE FURTHER');
// })