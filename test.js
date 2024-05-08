const keyize = require('keyize');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(obj => {
            Object.entries(obj).forEach(([key, value]) => {
                console.log(`${keyize(key)}: ${value}`);
            });
        }); 
    })
    .catch(error => {
        console.error(error);
    });