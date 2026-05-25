import dayjs from 'dayjs';
const dateObject = document.getElementById('dataUrodzenia');
dateObject.addEventListener('input', (e) => {
  console.log(e.target.value);
  const dateOfB = e.target.value;
  const dateOfBjs = dayjs(dateOfB);
  const output = dayjs().diff(dateOfBjs, 'days');
  console.log(output);
  const dialog = document.createElement('dialog');
  console.log(
    dateOfBjs.month() == dayjs().month(),
    dateOfBjs.date() == dayjs().date()
  );
  if (
    (dateOfBjs.month() == dayjs().month(), dateOfBjs.date() == dayjs().date())
  ) {
    dialog.innerHTML = 'wszystkiego najlepszego';
  } else {
    dialog.innerHTML = output;
  }

  const formButton = document.createElement('form');
  formButton.setAttribute('method', 'dialog');
  const dialogButton = document.createElement('button');
  dialogButton.innerHTML = 'OK';
  formButton.append(dialogButton);
  dialog.append(formButton);
  const body = document.getElementById('returnBox');
  dialog.setAttribute('open', true);
  body.innerHTML = '';

  body.append(dialog);
  dialog.classList.add('bg-gray-200 text-red-600');
});
