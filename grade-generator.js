// lets the user input the marks
let marks =  prompt('Enter Student Marks: ')

//checks if prompted marks is a number between 0 and 100
if (!isNaN(marks)) {
    parseInt(marks);

    if (marks >= 0 && marks <= 100) {
        marks = parseInt(marks);
    } 
    
    else {
        alert("Input an number between 0 and 100");
        marks = prompt('Enter Student Marks: ')
    }    
} 

else {
    alert("Invalid input. Enter a valid number!")

}

//function to calculate the Grade
function calcGrade() {
    if (marks >= 79) {
        console.log("grade is A ");
    } 
    
    else if (marks >=60 && marks > 79 ) {
        console.log("grade is A ");
        
    } 
    
    else if (marks >=59 && marks > 60 ) {
        console.log("grade is B ");
        
    } 
    
    else if (marks >=40 && marks > 49 ) {
        console.log("grade is B ");
        
    } 
    
    else {
        console.log("grade is E ");
    }
}

calcGrade();