require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
    "login": "lugona261202",
    "id": 144421058,
    "node_id": "U_kgDOCJuwwg",
    "avatar_url": "https://avatars.githubusercontent.com/u/144421058?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lugona261202",
    "html_url": "https://github.com/lugona261202",
    "followers_url": "https://api.github.com/users/lugona261202/followers",
    "following_url": "https://api.github.com/users/lugona261202/following{/other_user}",
    "gists_url": "https://api.github.com/users/lugona261202/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lugona261202/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lugona261202/subscriptions",
    "organizations_url": "https://api.github.com/users/lugona261202/orgs",
    "repos_url": "https://api.github.com/users/lugona261202/repos",
    "events_url": "https://api.github.com/users/lugona261202/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lugona261202/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-09-08T06:32:12Z",
    "updated_at": "2024-06-14T14:16:55Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1> please login at chai aur code </h1>')
})
app.get('/github', (req,res)=>{
    res.json(githubData)
})
app.get('/youtube',(req,res)=>{
    res.send('<h2> chai aur code <h2/>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})