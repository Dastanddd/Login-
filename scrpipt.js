// fetch
// async

let avatar = document.getElementById('avatar')
let login = document.getElementById('login')
let user = document.getElementById('user_id') 
let inp = document.getElementById('poisk')
let btn = document.getElementById('btn')

const getGitHubUser = async () =>{ 
    let respouns = await fetch(`https://api.github.com/search/users?q=${inp.value}`)
    let data = await respouns.json()
    login.innerHTML =data.items[0].login
    avatar.src = data.items[0].avatar_url
    user_id.innerHTML = data.items[0].id
}


btn.addEventListener('click', getGitHubUser)
