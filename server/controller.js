const podcasts = [
" Happier with Gretchen Rubin ",
" The Tim Ferriss Show ",
" Good Life Project ",
" The Happy Lab with Dr. Laurie Santos ",
" Beyond the To-Do List "]

let books = [
    "The Mountain is You, by Brianna Wiest",
    "How to Think Like a Millionaire, by Dr. Boyce Watkins",
    "Finding Me, by Viola Davis",
    "48 Laws of Power, by Robert Greene",
    "You Owe You, by Eric Thomas Phd, Chris Paul"
]

let videoLinks = [
    "https://www.youtube.com/watch?v=o4HeKwCbreg",
    "https://www.youtube.com/watch?v=k-Lwg8CVcjs",
    "https://www.youtube.com/watch?v=lnFNxRRyRuw",
    "https://www.youtube.com/watch?v=60PbNFY2NHw",
    "https://www.youtube.com/watch?v=eCIHmghtLXw"

]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['Bide your time, for success is near.', 'A fresh start will put you on your way.', 'An acquaintance of the past will affect you in the near future.', 'Do not let ambitions overshadow small success.', 'Believe it can be done.']

        let randomI = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomI];
        

        res.status(200).send(randomFortune);
    },
    getPodcast: (req, res) =>{
        
        res.status(200).send(podcasts)
    }, 
    getBooks: (req, res) =>{
        res.status(200).send(books)
    },
    getVideo: (req, res)  =>{
        res.status(200).send(videoLinks)
    },

    makeGoal: (req, res) =>{
        console.log(req)
        res.status(200).send(`This month I will ${res.body}`)
    }
}