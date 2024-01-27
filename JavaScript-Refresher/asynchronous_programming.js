// const getUser = username => {
//     const API_URL = `https://api.github.com/users/${username}`;
//     return fetch(API_URL).then((val)=>val.json());
// }

// getUser('openai').then((val)=>console.log(val));


// const getUser = async username => {
//     const API_URL = `https://api.github.com/users/${username}`;
//     const response = await fetch(API_URL);
//     return response.json();
// }

// getUser('openai').then((val)=>console.log(val));

const getGithubUser = (username) => {
    return new Promise((resolve, reject) => {
        fetch (`https://api.github.com/users/${username}`).then((response) => response.json()).then(
            (data) => {
                if(data.message === "Not Found") {
                    reject('User not found');
                } else {
                    resolve(data);
                }
            }
        ).catch(err => reject(err));
    })
}

getGithubUser("johndoedafsfsdfsdfdsfsdf").then((val) => console.log(val)).catch((err) => console.log('error', err));