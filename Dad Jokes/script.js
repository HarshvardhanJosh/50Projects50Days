const joke = document.getElementById('joke');   
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

// Using ASYNC AND AWAIT
async function generateJoke(){

    const config = {
    headers:{
            'Accept': 'application/json'
        },
    }
    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();

    joke.innerHTML = data.joke;

}
generateJoke();

// Using .then()
// function generateJoke(){

//     // const config = {
//     //     headers:{
//     //         'Accept': 'application/json'
//     //     }
//     // }

//     // fetch('https://icanhazdadjoke.com', config)
//     // .then(res =>res.json())
//     // .then(data => {
//     //     joke.innerHTML = data.joke;
//     // })

// }


