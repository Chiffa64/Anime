const mainData = () => {
    fetch('https://animedb-c4b88-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
}

mainData()