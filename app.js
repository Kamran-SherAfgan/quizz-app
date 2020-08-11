var score = 0

function submit(){
    var rightAnswer1 = document.getElementById('right-ans1');
    var rightAnswer2 = document.getElementById('right-ans2');
    var rightAnswer3 = document.getElementById('right-ans3');
    var rightAnswer4 = document.getElementById('right-ans4');
    var rightAnswer5 = document.getElementById('right-ans5');


    if(rightAnswer1.checked == true){
        console.log(score++)
        alert('Question 1 answer is right')
    }
    else{
        alert('Question 1 answer is wrong')

    }

    if(rightAnswer2.checked == true){
        console.log(score++)
        alert('Question 2 answer is right')
    }
    else{
        alert('Question 2 answer is wrong')

    }

    if(rightAnswer3.checked == true){
        console.log(score++)
        alert('Question 3 answer is right')
    }
    else{
        alert('Question 3 answer is wrong')

    }

    
    if(rightAnswer4.checked == true){
        console.log(score++)
        alert('Question 4 answer is right')
    }
    else{
        alert('Question 4 answer is wrong')

    }

    if(rightAnswer5.checked == true){
        console.log(score++)
        alert('Question 5 answer is right')
    }
    else{
        alert('Question 5 answer is wrong')

    }

    alert('You got '+ score + " score")


}


