const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const podcastBtn = document.getElementById('podcastBtn')
const bookBtn = document.getElementById('bookBtn')
const dataSection = document.getElementById('listSection')
const inputGoal =document.getElementById("inputGoal")
const submitBtn = document.getElementById("submitBtn")
const goalSection = document.getElementById('goals')
const getMotivationBtn = document.getElementById('motivationBtn')



function addNewGoal(){
    let p = document.createElement('p')
    p.textContent= inputGoal.value

    goalSection.appendChild(p)

    inputGoal.value = ''
}


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune')
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getPodcast = () => {
    axios.get('http://localhost:4000/api/podcast')
        .then(res => postBtn(res.data))
}

const getBooks = () => {
    axios.get('http://localhost:4000/api/books')
    .then(res => postBtn(res.data))
}

const getMotivation = () => {
    axios.get('http://localhost:4000/api/videos')
    .then(res => postBtn(res.data))
    
}

const createGoal = (newGoal) => {
    axios.post("http://localhost:4000/api/goals", newGoal)
        .then(res => {
            console.log(res.data)
        })
}



function postBtn(dataArr) {
    dataSection.innerHTML = null;

    if (dataArr.length === 0) {
        const h3 = document.createElement('h3');
        const t = document.createTextNode("Response came back with no results!");
        h3.appendChild(t);

        dataSection.appendChild(h3)
    } else {
        dataArr.forEach(item => {
            const h3 = document.createElement('h3');
            const t = document.createTextNode(item)
            h3.appendChild(t);
    
            dataSection.appendChild(h3)
        })
    }
}








complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
podcastBtn.addEventListener('click', getPodcast)
bookBtn.addEventListener('click', getBooks)
getMotivationBtn.addEventListener('click', getMotivation)
submitBtn.addEventListener("click", addNewGoal)