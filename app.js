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
            break;
        default:
            alert("Please Enter any number between 1 to 7")
        break;
    }

}
let task5 = () => {
    let day = +prompt("Enter the day(1-31):");
    let month = +prompt("Enter the month (1-12):");
    let year = +prompt("Enter the year:");

    let inputDate = new Date(year, month - 1, day); 
    let dayCheck = inputDate.getDay();

    if (dayCheck === 0 || dayCheck === 6) {
        alert("The provided date is a weekend.");
    } else {
        alert("The provided date is not a weekend.");
    }

}
let task6 = () => {
    let r = +prompt("Enter the value of r");
    let h = +prompt("Enter the value of h");

    let formula = 3.142 * r * r * h ;
    let result =  Math.round(formula).toFixed(4);
    alert(result);
    
}
let task7 = () => {
   let arr = [40, 100, 1, 5, 25, 10]
   alert( 'Old Array\n'+arr)
   let result = arr.sort(function(a, b){
        return a-b
   })
   alert( 'Sorted Array\n'+result)
    
}
let task8 = () => {
   let num = [21, 3, 50, -2, -1, 10];
   let index = num.indexOf(-1);
    alert('Old Array\n'+num);

    num[index] = 0;
    alert('Modified Array\n'+num);
}
let task9 = () => {
    let library = [{
        author:'Bill Gates',
        title: 'The Road Ahead',
        libraryId: 1254
    },{
        author:'Steve Jobs',
        title: 'Walter Isaacson',
        libraryId: 4264
    },{
        author:'Suzzane Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryId: 3245
    }]

    library.sort((a, b) => a.title.localeCompare(b.title))
    alert(library)
    console.log(library);
    // alert('Sorted Object\n'+sortedLibrary.title)
 
    
}
let task10 = () => {
    let library = [{
        author:'Bill Gates',
        title: 'The Road Ahead',
        libraryId: 1254
    },{
        author:'Steve Jobs',
        title: 'Walter Isaacson',
        libraryId: 4264
    },{
        author:'Suzzane Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryId: 3245
    }]


    let bookName = prompt('Enter the Book Name that You want to Search')

    let book = library.find(  (e)=> {
    //    return e.title === 'The Road Ahead';
       return e.title.toLowerCase().split(' ').join('') === bookName.toLowerCase().split(' ').join('');
    })
    alert('You Searched book has been Found!\n\n' + book.title+'\n' + book.author+'\n' + book.libraryId)
}