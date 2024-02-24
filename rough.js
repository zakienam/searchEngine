const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';

const callingApi = fetch(url).then((response)=>{
    return response
}).then((data)=>{
    const newData = data.json();
    console.log(newData);
})