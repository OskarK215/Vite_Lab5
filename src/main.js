import dayjs from 'dayjs';
const dateObject = document.getElementById('dataUrodzenia');
const form = document.getElementById("formId")
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  console.log(form.dataUrodzenia.value)
  const dateOfB = form.dataUrodzenia.value
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
  dialog.setAttribute("class", "bg-gray-200 text-red-600");
  body.append(dialog);
});
