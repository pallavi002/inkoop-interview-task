const button = document.getElementById("button1");
button.addEventListener("click",startGame);

function startGame() {
    //generate random petrol pumps
    var arr = [];
    while (arr.length < 6) {
        let r = Math.floor(Math.random() * 100) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    // console.log(arr);
    const para = document.createElement("p");
    const node = document.createTextNode(`Game Started \u000a Petrol pumps generater at ${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]}, ${arr[4]}, ${arr[5]}.`);
    para.appendChild(node);
    const element = document.getElementById("div1");
    element.appendChild(para);
    //initialize petrol 
    let petrol = 50;
    let count = 0;
    let move = 0;

    while (petrol > 0) {
        //random move points from 1-6
        let randompoint = Math.floor(Math.random() * 6) + 1;
        count = count + randompoint;
        if (count < 100) {
            petrol = petrol - (2 * randompoint);
            for (let i = 0; i < arr.length; i++) {
                if (randompoint == arr[i]) {
                    petrol = petrol + 30;
                }
            }
            if (petrol > 0) {
                const para = document.createElement("p");
                const node = document.createTextNode("Move " + move + " - Car at " + count + ", petrol remaining " + petrol);
                para.appendChild(node);
                const element = document.getElementById("div1");
                element.appendChild(para);
            } else {
                const para = document.createElement("p");
                const node = document.createTextNode("Move " + move + " - Car at " + count + ", petrol remaining 0, Game Over!");
                para.appendChild(node);
                const element = document.getElementById("div1");
                element.appendChild(para);
            }
        }
        move += 1;
    }
    button.addEventListener("click", () => window.location.reload())
}

