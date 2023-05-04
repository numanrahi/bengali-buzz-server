const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefMarquee.json')

const chef = require('./data/chef.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('chef is running')
})

app.get('/chefs-marquee', (req, res) => {
    res.send(chefs)
})

app.get('/chef', (req, res) => {
    res.send(chef);
})

// app.get('/chef/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedChef = chef.find(n => n.id === id);
//     res.send(selectedChef);
// })

// app.get('/categories/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     if (id === 0) {
//         res.send(news)
//     }
//     else {
//         const categoryNews = news.filter(n => parseInt(n.category_id) === id)
//         res.send(categoryNews)
//     }
// })

app.listen(port, () => {
    console.log(`Chef is running on port: ${port}`);
})