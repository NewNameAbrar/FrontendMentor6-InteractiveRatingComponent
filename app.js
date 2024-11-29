// const btns = document.querySelectorAll('.eachRating');

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     btns.forEach(b => {
//       b.style.color = 'white';
//       b.style.backgroundColor = 'hsl(216, 12%, 23%)';
//     });
//     btn.style.color = 'black';
//     btn.style.backgroundColor = 'white';
//   });
// });

const btns = document.querySelectorAll('.eachRating');
const submit = document.querySelector('.submit');
const main = document.querySelector('#main');
let btnNmb;

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    btns.forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');
    btnNmb = btn.innerHTML;
  });
});

submit.addEventListener('click', () => {
  if (btnNmb) {
    main.innerHTML = `
      <div class='duplicate'>
        <div class='imgDiv'>
          <img src='/images/illustration-thank-you.svg' class='outputImg'>
        </div>

        <p class='ratingOutput'>
          You selected ${btnNmb} out of 5
        </p>

        <h2>
          Thank you!
        </h2>

        <p class="thanksText">
          We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!
        </p>
      </div>
    `;
  }
});

/* 
la
la
la
la
la 
*/

// const btns = document.querySelectorAll('.eachRating');

// const makeWhite = b => {
//   b.style.color = 'black';
//   b.style.backgroundColor = 'white';
// };

// const makeDefault = b => {
//   b.style.color = 'white';
//   b.style.backgroundColor = 'hsl(216, 12%, 23%)';
// };

// btns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     btns.forEach((otherBtn, otherIndex) => {
//       if (index === otherIndex) {
//         makeWhite(btn);
//       } else {
//         makeDefault(otherBtn);
//         otherBtns.push(otherBtn);
//       }
//     });
//   });
// });

/* 
la
la
la
la
la 
*/

// const btns = document.querySelectorAll('.eachRating');

// const btn1 = document.querySelector('.btn1');
// const btn2 = document.querySelector('.btn2');
// const btn3 = document.querySelector('.btn3');
// const btn4 = document.querySelector('.btn4');
// const btn5 = document.querySelector('.btn5');

// const makeWhite = function (btn) {
//   btn.style.color = 'black';
//   btn.style.backgroundColor = 'white';
// };

// const makeDefault = function (btn) {
//   btn.style.color = 'white';
//   btn.style.backgroundColor = 'hsl(216, 12%, 23%)';
//   // btn.addEventListener('mouseenter', () => {
//   //   btn.style.color = 'black';
//   //   btn.style.backgroundColor = 'hsl(25, 97%, 53%)';
//   // });
//   // btn.addEventListener('mouseleave', () => {
//   //   btn.style.color = 'white';
//   //   btn.style.backgroundColor = 'hsl(216, 12%, 23%)';
//   // });
// };

// btn1.addEventListener('click', () => {
//   makeWhite(btn1);
//   makeDefault(btn2);
//   makeDefault(btn3);
//   makeDefault(btn4);
//   makeDefault(btn5);
// });

// btn2.addEventListener('click', () => {
//   makeWhite(btn2);
//   makeDefault(btn1);
//   makeDefault(btn3);
//   makeDefault(btn4);
//   makeDefault(btn5);
// });

// btn3.addEventListener('click', () => {
//   makeWhite(btn3);
//   makeDefault(btn1);
//   makeDefault(btn2);
//   makeDefault(btn4);
//   makeDefault(btn5);
// });

// btn4.addEventListener('click', () => {
//   makeWhite(btn4);
//   makeDefault(btn1);
//   makeDefault(btn2);
//   makeDefault(btn3);
//   makeDefault(btn5);
// });

// btn5.addEventListener('click', () => {
//   makeWhite(btn5);
//   makeDefault(btn1);
//   makeDefault(btn2);
//   makeDefault(btn3);
//   makeDefault(btn4);
// });
