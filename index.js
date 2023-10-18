const candidate = document.querySelectorAll('.candidate');
const ballotBox = document.querySelectorAll('.count');
const btn = document.querySelector('button');
const candidateName = document.querySelectorAll('.candidate-name');
const resultDisplay = document.querySelector('.winner-container');
const president = document.querySelector('.president');
const winnerImage = document.querySelectorAll('img');


// Function for removing extension name
function deleteRestOfWord(imageName, targetString) {
    imageName = imageName.toUpperCase()
    const index = imageName.indexOf(targetString);

    if (index !== -1) {
        return imageName.slice(0, index);
    } else {
        return imageName;
    }
}

// Making image name tally with id name
for (let i = 0; i < candidateName.length; i++) {
    let imageName = winnerImage[i].id
    candidateName[i].innerText = deleteRestOfWord(imageName, '.')
}


// FOR VOTING
let totalVote = [0, 0, 0, 0, 0]

for (let i = 0; i < candidate.length; i++) {

    candidate[i].onclick = function () {
        if (candidate[i].style.scale === '1.09') {
            candidate[i].style.scale = '0.95'

            totalVote[i]++
            ballotBox[i].innerText = totalVote[i]
        } else {
            alert('You have voted')
            ballotBox[i].innerText = totalVote[i]
        }
    }

    candidate[i].onmouseover = () => {
        candidate[i].style.scale = '1.09'
    }
    candidate[i].onmouseout = () => {
        candidate[i].style.scale = '1'
    }
}

// FOR RESULT CHECKING
btn.onclick = function () {
    let highestVote = Math.max(...totalVote)


    for (let i = 0; i < ballotBox.length; i++) {
        let winner = document.createElement("div");

        
        if (highestVote === totalVote[i]) {
            // Getting the image url from the id names
            let url = `url(./images/${winnerImage[i].id})`

            //WINNER OF THE ELLECTION
            resultDisplay.style.display = 'flex';
            winner.innerText = `${candidate[i].innerText} is the winner`.toUpperCase()

            president.style.backgroundImage = url
            president.appendChild(winner)
            
            console.log(url.length)
        }

        //Designing the apended child
        winner.style.width = '100%';
        winner.style.fontSize = 'clamp(1.2rem, 5vw, 3.5rem)';
        winner.style.display = 'flex';
        winner.style.flexDirection = 'column';
        winner.style.justifyContent = 'center';
        winner.style.backgroundColor = '#000';
        winner.style.color = 'white';
        winner.style.padding = '1em 0';
        winner.style.textAlign = 'center';
    }
}

// IN CASE OF MORE THAN ONE WINNER