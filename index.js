let christmasList = ['candy', 'that one game you want', 'artwork', 'cool shirt', 'fancy shirt', 'cool computer stuff', 'that one game you heard was good', 'that one game you want to play but dont want to pay for', 'fruit', 'league skins', 'gamer gear', 'poems', 'hipster clothes','new shoes', 'owo']

function numberOfGifts(num) {
  for (let i = 1; i <= num; i++) {
    let random = Math.floor(Math.random() * christmasList.length)
    console.log(i,christmasList[random])
    christmasList.splice(random, 1)
  }
}

numberOfGifts(5)