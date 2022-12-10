const monthEl = document.querySelector('.month-text');
const dateEl = document.querySelector('.date-text');
const daysEl = document.querySelector('.days');
const prevEl = document.querySelector('.prev');
const nextEl = document.querySelector('.next');
const clickDayEl = document.querySelector('.click-day');

const today = new Date();
const date = new Date();
const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

const renderCalendar = () => {
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = new Date(
    `${date.getFullYear()}/${date.getMonth() + 1}/01`
  ).getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  monthEl.innerHTML = months[date.getMonth()];
  dateEl.innerHTML = today.toLocaleDateString();

  let days = [];

  for (let i = firstDayIndex; i > 0; i--) {
    days.push(`<div class="pre-date">${prevLastDay - i + 1}</div>`);
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days.push(`<div class="today">${i}</div>`);
    } else {
      days.push(`<div>${i}</div>`);
    }
  }

  for (let i = 1; i <= nextDays; i++) {
    days.push(`<div class="next-date">${i}</div>`);
  }

  daysEl.innerHTML = days.join('');
};

prevEl.addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
nextEl.addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
monthEl.addEventListener('click', () => {
  date.setFullYear(today.getFullYear());
  date.setMonth(today.getMonth());
  renderCalendar();
});
daysEl.addEventListener('click', (e) => {
  clickDayEl.innerText = `${date.getFullYear()}/${String(
    date.getMonth() + 1
  ).padStart(2, 0)}/${String(e.target.innerText).padStart(2, 0)}`;
});

renderCalendar();
