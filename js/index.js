let form = document.querySelector("#github-form")

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let search = document.getElementById('search').value 

    var originalName = search.split(' ').join('')
   
    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json)
    .then((data) => {
        document.getElementById('github-container').innerHTML = `<a target="_blank href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}/>`
    })
})


