/*
===============================================================================
ENGR 13300 Fall 2022

Program Description
    The user enters at least 1 description into the textarea fields and this
    program redirects the user to a new page with the correct answers for each
    of them

Assignment Information
    Assignment:     Individual project
    Author:         Stanley So, sos@purdue.edu
    Team ID:        LC4 - 12

Contributor:    Name, login@purdue [repeat for each]
    My contributor(s) helped me:
    [ ] understand the assignment expectations without
        telling me how they will approach it.
    [ ] understand different ways to think about a solution
        without helping me plan my solution.
    [ ] think through the meaning of a specific error or
        bug present in my code without looking at my code.
    Note that if you helped somebody else with their code, you
    have to list that person as a contributor here as well.
    
ACADEMIC INTEGRITY STATEMENT
I have not used source code obtained from any other unauthorized
source, either modified or unmodified. Neither have I provided
access to my code to another. The project I am submitting
is my own original work.
===============================================================================
*/

function onButtonClick() {
    const descriptions = [
        document.getElementById("d1").value,
        document.getElementById("d2").value,
        document.getElementById("d3").value
    ];

    // Remove blank strings
    let i = 0;
    while (i < descriptions.length) {
        if (descriptions[i] == '') {
            descriptions.splice(i, 1);
        } else {
            i++;
        }
    }

    // Check if the user entered at least 1 description
    if (descriptions.length == 0) {
        alert('Please enther at least 1 description');
        return
    }

    // Get the answers
    answers = calculateAnswers(descriptions);

    // Save the answers
    localStorage.setItem('answers', JSON.stringify(answers));

    // Redirect to the results page
    window.location.href = 'answers.html';
}