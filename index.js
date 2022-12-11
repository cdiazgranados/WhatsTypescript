// Import stylesheets
// import './style.css';
console.log(window);
var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
var form = document.querySelector('#defineform');
form.onsubmit = function (event) {
    console.log(event);
    var formData = new FormData(form);
    console.log(formData);
    var text = formData.get('defineword');
    console.log(text);
    //fetch returns a promise and .then executes when the promise is fulfilled 
    //sets data in arrow function
    //data is a response object
    //response object has a method called .json() which returns a promise
    //we called .then on .json() promise and logged the resulting value from the dictionary api
    fetch(url + text).then(function (data) {
        data.json().then(function (definition) {
            console.log(definition);
            var define = document.getElementById("definition");
            define.innerHTML = definition[0].meanings[0].definitions[0].definition;
        });
    });
    return false; // prevent reload
};
