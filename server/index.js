const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getPodcast } = require('./controller')
const { getBooks } = require('./controller')
const { getVideo } = require('./controller')
const { makeGoal } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get('/api/podcast', getPodcast)
app.get('/api/books', getBooks)
app.get('/api/videos', getVideo)
app.post('/api/goals', makeGoal)


app.listen(4000, () => console.log("Server running on 4000"));
