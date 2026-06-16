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
const fetchArticles = async () => {
  try {
  const response = await fetch(
  'https://vxxgrhjxusksqbpuuttf.supabase.co/rest/v1/article', {
  headers: {
  apiKey: 'sb_publishable_QSeaMOUEJS4aYo4PE1XVRg_cgGDQGu3',
  },
  });
  const data = await response.json();
  console.log(data);
  return data;
  } catch (error) {
  console.error('Fetch error:', error);
  }
 };
fetchArticles().then(data => {
  const table_body = document.getElementById("table_body")
  for (const row in data){
    const tr = document.createElement("tr")
    const row_data = data[row]
    const id = document.createElement("td")
    id.innerHTML = row_data.id
    const author = document.createElement("td")
    author.innerHTML = row_data.author
    const content = document.createElement("td")
    content.innerHTML = row_data.content
    const created_at = document.createElement("td")
    created_at.innerHTML = row_data.created_at
    const subtitle = document.createElement("td")
    subtitle.innerHTML = row_data.subtitle
    const title = document.createElement("td")
    title.innerHTML = row_data.title
    tr.append(id,author,content,created_at,subtitle,title)
    table_body.append(tr)
  }
  
});
const createNewArticle = async (data) => {
  try {
  const response = await fetch('https://vxxgrhjxusksqbpuuttf.supabase.co/rest/v1/article', {
  method: 'POST',
  headers: {
  apiKey: 'sb_publishable_QSeaMOUEJS4aYo4PE1XVRg_cgGDQGu3',
  'Content-Type' : 'application/json' ,
  },
  body: JSON.stringify(data),
  });
 
  if (response.status !== 201) {
  throw new Error(`Status: ${response.status}`);
  }
  } catch (error) {
  console.error('Fetch error:' , error);
  }
 };
 const form_add = document.getElementById("new_article")
 form_add.addEventListener("submit", (e)=>{
  e.preventDefault()  
  const data_pack = {
    author:form_add.author.value,
    title:form_add.title.value,
    subtitle:form_add.subtitle.value,
    content:form_add.content.value
  }
  createNewArticle(data_pack).then(data => {
    console.log(data_pack)
  })
  
 })