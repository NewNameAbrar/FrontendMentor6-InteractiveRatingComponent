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
