function showName() {
    var msg, x, x2, x3;
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    x = document.getElementById("fname").value;
    x2 = document.getElementById("lname").value;
    x3 = document.getElementById("subject").value;
    msg = document.getElementById("p01");
    msg.innerHTML = "";
    try {
        if (x == "") throw "First Name is empty!";
        if(!isNaN(x)) throw "First Name is not a number!";
        if (x2 == "") throw "Last Name is empty!";
        if(!isNaN(x2)) throw "Last Name is not a number!";
        if (x3 == "") throw "Message box is empty!";
        else {
            alert(`Thanks for signing up, ${fname.value} ${lname.value}!`);
        }
    }
    catch(err) {
        msg.innerHTML = "Input for " + err;
    }
}

//Function showAnswer takes in user input, parses it into an int & displays answer to p id=answer//
function showAnswer() {
                let numOne = document.getElementById("numOne").value,
                numTwo = document.getElementById("numTwo").value;
                document.getElementById("answer").innerHTML = parseInt(numOne) + parseInt(numTwo);
            }

function movieCheck(movie) {
    if (movie == "m1") {
        alert(`Nice try, but this isn't it`);
    }
    else if (movie == "m2") {
        alert(`You've guessed correctly!!!`);
    }
    else if (movie == "m3") {
        alert(`This is wrong, I haven't even seen this movie.`);
    }
    else if (movie == "m4") {
        alert(`Hilarious movie, but this isn't my favorite.`);
    }
    else {
        alert(`Giving up already huh?`);
    }
}

// Function to calculate elapsed time of day, month and year based on user input
function elapsedTime() {
    let userDay = document.getElementById("userDay").value,
    userMonth = document.getElementById("userMonth").value,
    userYear = document.getElementById("userYear").value;

    let d = new Date(userDay);
    m = new Date(userMonth);
    y = new Date(userYear);

    let dayRef = d.getDay();
    let monRef = m.getMonth();
    let yrRef = y.getFullYear();

    document.getElementById("answer").innerHTML = console.log(userDay - dayRef);
    document.getElementById("answer").innerHTML = console.log(userMonth - monRef);
    document.getElementById("answer").innerHTML = console.log(userYear - yrRef);
  }

// This function is for Individual Project 7
function stringConversion() {
    // initialize empty array
    let feedback = [];

    let fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    eAddress = document.getElementById("eAddress").value,
    subject = document.getElementById("subject").value;

    // push user input into feedback array
    feedback.push(fname);
    feedback.push(lname);
    feedback.push(eAddress);
    feedback.push(subject);

    // Convert array into a string
    let feedbackString = feedback.join();
    //alert(feedbackString);

    alert(`Thank you! Your feedback has been submitted, ${fname}.`);
}