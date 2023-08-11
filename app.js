let task1 = () => {
    let num = [1,2,3,4,6,8,9];
    let result = num.filter( function(e){
        return e % 2 === 0;
    });
    alert( "Even Numbers are " + result + " In this Array");
}
let task2 = () => {
    let students = ["salman" , "hassan" , "kamran" , "rizwan" , "moiz", "jawwad"];
    let filteredArray = [];
    students.forEach( function(e){
        e.includes("an") ? filteredArray.push(e) : false;
    })  
    alert(filteredArray);
}
let task3 = () => {
    let num = [1, 2, 3, 4, 5, 6, 5, 8, 2, 9, 1, 7, 7];
    alert("Array which has duplicate numbers "+num);
    let filteredArray = [];
    num.forEach(function (item) {
        filteredArray.includes(item) ? true : filteredArray.push(item);
    }); 
    alert(filteredArray);
}


let task4 = () => {
    let day = +prompt("Enter any number to check the exact day" );
    switch ( day ) {
        case 0:
            day = "Sunday";
            alert("Today is " + day);
            break;
        case 1:
            day = "Monday";
            alert("Today is " + day);
          break;
        case 2:
            day = "Tuesday";
            alert("Today is " + day);
          break;
        case 3:
            day = "Wednesday";
            alert("Today is " + day);
          break;
        case 4:
            day = "Thursday";
            alert("Today is " + day);
          break;
        case 5:
            day = "Friday";
            alert("Today is " + day);
          break;
        case 6:
            day = "Saturday";
            alert("Today is " + day);
        default:
            alert("Please Enter any number between 1 to 7")
        break;
    }

}
let task5 = () => {
    alert("Task task5 ")
    
}
let task6 = () => {
    alert("Task task6 ")
    
}
let task7 = () => {
    alert("Task task7 ")
    
}
let task8 = () => {
    alert("Task task8 ")
    
}
let task9 = () => {
    alert("Task task9 ")
    
}
let task10 = () => {
    alert("Task task10")
    
}