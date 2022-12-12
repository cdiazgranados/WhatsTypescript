// Import stylesheets
// import './style.css';
console.log(window);
const url: string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const form: HTMLFormElement = document.querySelector('#defineform');


form.onsubmit = (event) => {
  console.log(event);
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  //fetch returns a promise and .then executes when the promise is fulfilled (by the api)
  //sets data in arrow function
  //data is a response object
  //response object has a method called .json() which returns a promise
  //we called .then on .json() promise and logged the resulting value from the dictionary api
  fetch(url + text).then(data =>
     {
  
      data.json().then(definition =>
         {
          console.log(definition)
          let defineTitle: HTMLElement = document.getElementById("definitionTitle");
          defineTitle.innerHTML = text;
          let define: HTMLElement = document.getElementById("definition");
          define.innerHTML = definition[0].meanings[0].definitions[0].definition;
          // let partOf: HTMLElement = document.getElementById("partOfSpeech");
          // partOf.innerHTML = definition[0].meanings[0].partOfSpeech;
        })
      });
  

  return false; // prevent reload
};

