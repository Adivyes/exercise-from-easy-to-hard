// class Movie{
// Movie_Name;
// rating;

// constructor(Movie_Name,rating){
//     this.Movie_Name = Movie_Name;
//     this.rating = rating;
// }
// mergingWords(){
//     return `made the movie ${this.Movie_Name}'s rating stand on ${this.rating  }` 
    
// }
// get nameAndrating(){
//    return  this.mergingWords()
// }

// }

// class Comedy extends Movie{
//     comedian;
//     constructor(comedian,Movie_Name,rating){
//         super(Movie_Name,rating);
//         this.comedian = comedian;
//     }
//     getNameAndComedian(){
//         return `the comedian ${this.comedian} ${super.mergingWords()}`
//     }
// }

// class Ection extends Movie{
//     director;
//     constructor(director,Movie_Name,rating){
//         super(Movie_Name,rating);
//         this.director = director
//     }
//     getNameAndDirector(){
//         return `<br>the director ${this.director} ${super.mergingWords()}`
//     }
// }

// let newComedy = new Comedy ("Jackie Chan","rush hour",7.5)
// let newDrama = new Ection ("Christopher Nolan","Tent",8.0)
// console.log(newComedy);
// console.log(newDrama);
// exerciseOne.innerHTML += newComedy.getNameAndComedian()
// exerciseOne.innerHTML += newDrama.getNameAndDirector()
// =============================================

// let numArray = [1,2,3,4,5]

// function getNumAndArray(arrayNum,justNum){
// for (let i = 0; i < arrayNum.length; i++) {
//     if(arrayNum[i] == justNum){
//         exerciseOne.innerHTML = `the number ${justNum} is in the array`
//       return  
//     }
// }
// return exerciseOne.innerHTML = 'number not found';
// }

// let bill = getNumAndArray(numArray,3)
// =============================


// const ranArrayNum = [];
// function makeNumberToComper(num1){
// for (let i = 0; i < 17; i++) {
//     let ranNum = Math.floor((Math.random() * 10) + 1);
//     ranArrayNum.push(ranNum);

//     if (num1 == ranArrayNum[i]) {
//     exerciseOne.innerHTML = `the number ${num1} is in the array`
//     console.log(ranArrayNum); 
//     return
//     }
// }
// return exerciseOne.innerHTML = 'number not found';
// }
// makeNumberToComper (4)

// ================================

// class Person{
//     name;
//     age;
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     checkAgeAndName(){
//         if (this.age >= 18){
//             return `${this.age},${this.name}`
//         }
//         else{
//             return `${this.name} - you are too young`
//         }
//     }
//     get funcResult(){
//         return this.checkAgeAndName
//     }
// }
// let newPerson = new Person ('Adiv',5);
// exerciseOne.innerHTML += newPerson.funcResult()
// ===================================


// let counter = 0
// function addValInp(){
//     let inpVal = document.getElementById('input').value
//     ulst.innerHTML += `<li class="listColor" onclick="changeColor(${counter})">${inpVal}</li>`
//     counter++;
// }
// function clearLast(){
//     if(counter == 0){
//         return
//     }
//     ulst.lastChild.remove()
//     counter--;
//     if(counter < 0){
//         counter = 0
//     }
// }
// function changeColor(numOfclass){
//     document.getElementsByClassName('listColor')[numOfclass].style.color = 'red'
// }

// ========================================

// let numArray = []
// function insertFunc(){
    
//     let inpVal = document.getElementById('inputId').value
//     numArray.push(parseFloat(inpVal));
//     console.log(numArray)
//     let pushVal = ""
//     for (let i = 0; i < numArray.length; i++) {
//         pushVal = pushVal + numArray[i] + "<br/>";
//         inputId.value = '';
//     }
//     console.log(pushVal);
//     document.getElementById('displayArray').innerHTML = [numArray];
// }

// function keyCode(event){
//     let inpVal = document.getElementById('inputId').value
//    let w = event.keyCode
//    if(w == 13){
//     numArray.push(parseFloat(inpVal));
//     console.log(numArray)
//     let pushVal = ""
//     for (let i = 0; i < numArray.length; i++) {
//         pushVal = pushVal + numArray[i] + "<br/>";
//     }
//     console.log(pushVal);
//     document.getElementById('displayArray').innerHTML = [numArray];
//     inputId.value = '';
//    } 
// }

// function sortFunc(){
//     numArray.sort(function(a, b){return a-b});
//     document.getElementById("displayArray").innerHTML = numArray;
// }

// ===================================
// let pai = 3.14;
// class Circle{
//     radios;
//     constructor(radios){
//         this.radios = radios;
//     }
//     calcuCircel(){
//         let space = pai * (this.radios * this.radios)
//         let scope = pai * (this.radios * 2)
//         return `the space of te circel is ${space} and his scope is ${scope}`

//     }
// get resultCircel (){
//     return this.calcuCircel
// }
// }

// let newCircel = new Circle(10) 
// displayArray.innerHTML = newCircel.resultCircel()
// =========================================


// let strArrayNum = prompt();
// let arrayNum = strArrayNum.split(",");
// console.log(arrayNum);
// for (let i = 0; i < arrayNum.length; i++) {
//     arrayNum[i] = parseFloat(arrayNum[i]);
   
// }

// console.log(arrayNum);

// ===========================================



// function keyCode(event){
//     let playName = document.getElementById('inputPlayerName').value
//     let playAge = document.getElementById('inputPlayerAge').value

//     let w = event.keyCode
//        if(w == 13){
//          num1 = playName
//          num2 = parseFloat(playAge) 
        
//         console.log(num1); 
// console.log(num2);

//        }
// }
// =============================================


// let num1 = prompt();
// let num2 = prompt();

// function ofNumbers(){
// //     num1 = parseFloat(num1);
// //    num2 = parseFloat(num2);
//     num1 = parseInt(num1);
// }
// ofNumbers()
// console.log(num1 , num2);
// ===============================================

// let numArray = [];
// for (let i = 1; i < 51; i++) {
//     numArray.push(i)
// }
// console.log(numArray);

// function myArray(){
//     for (let i = 0; i < numArray.length; i++) {
//         if (numArray[i]%2 !==1) {
//             console.log(numArray[i])
//         } 
//     }
     
//     }
    
//     myArray()

// ==============================================
// let numarray = []

//     for (let i = 0; i < 5; i++) {
//         let promptNum = prompt('pick a number');
//         numarray.push(parseFloat(promptNum));
//     }
//     function numbersFormUser(){
//     let max = 0;
//         while (numarray[i] > max) {
//             max = numarray[i]
//             console.log(max)
//         }
// console.log(numarray);
// }
// let numarray = []
// let max = 1;
// //let promptNum = prompt('pick a number');
// while (max<promptNum) {
//     numarray.push(parseFloat(max))
//     ++max
// }



// console.log(numarray);
// for (let i = 0; i < numarray.length; i++) {
//     if (numarray[i]%2 !==1 ) {
//         console.log(numarray[i])
//         thirdDiv.innerHTML +=  `<br>${numarray[i]}`
//     }
    
//}
// =================================
// let numArray = []
// let maxNum = 1
// let numPrompt = parseFloat(prompt('enter a number')) 
// let multiply = 1;
// while (maxNum <= numPrompt) {
//     numArray.push(maxNum)
//     multiply *= maxNum
//     maxNum++
// }

// thirdDiv.innerHTML += `the factorial of ${numArray} is ${multiply}`
// console.log(multiply);
// ===================================


// console.log(numArray);
// //let bigger = 0;
// let bigger = numArray[0];
//     let plusOne = 1;
//     for (let i = 0; i < numArray.length; i++) {
       
//         plusOne = 1;
//          for (let index = 1; index <= numArray[i]; index++) {
             
//             plusOne *= index;
//          }
//          //console.log(plusOne);
//          if(numArray[i] > bigger){
//             bigger =  numArray[i] 
//          }
//     }

//  console.log(bigger);
// //  console.log();
// //     thirdDiv.innerHTML += `the factorial of ${numArray} is ${plusOne}`
// ============================================================
// function biggerSmaller (){
//     let numArray = [];
//     let counter = 0;
//     let biggerNum = Number.MIN_SAFE_INTEGER;
// let smallerNum = Number.MAX_SAFE_INTEGER;
// while (counter < 5) {
//     let numFromPrompt = parseFloat(prompt('pleas enter number'));

//     numArray.push(numFromPrompt)
//     if(numFromPrompt > biggerNum){
//         biggerNum = numFromPrompt
//     }
    
// if(numFromPrompt < smallerNum){
//     smallerNum = numFromPrompt
// }
//     counter++
// }

// console.log(...numArray);
// console.log(Math.max(...numArray));
// console.log(Math.min(...numArray));
// }
// biggerSmaller ()


// ============================================================

// function TicTacToe() {
//     this.size = 0;
//     this.board = [];
//     this.nextMoveIsX = true;

//     this.init = function(size) {
//         for (let i = 0; i < size; i++) {
//             this.board.push(Array(size).fill(""));
//         }

//         this.size = size;
//     }

    /*
    this.play = function (row, col) {
        if (this.board[row][col] !== "") {
            return false;   // This cell is already occupied
        }

        this.board[row][col] = this.nextMoveIsX ? "X" : "O";
        this.nextMoveIsX = !this.nextMoveIsX;
    }
    */

    // this.printBoard = function () {
    //     for (let row = 0; row < this.size; row++) {
    //         console.log("row" + row + ": " + this.board[row].join())
    //     }
    // }


    //         this.render = function () {
    //             const container = document.getElementById('grid-container')
    //             container.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`
    //             container.style.gridTemplateRows = `repeat(${this.size}, 1fr)`
        
    //             for (let row = 0; row < this.size; row++) {
    //                 for (let col = 0; col < this.size; col++) {
                        
    //                     var div = document.createElement('div');
    //                     div.id = 'container';
    //                     div.className = 'border pad';
    //                     div.style.gridRowStart = row; 
    //                     div.style.gridColumn = col; 
    //                     container.appendChild(div);
    //                 }
    //             }
    //         }
    //     }
        
    //     TicTacToe.prototype.play = function (row, col) {
    //         if (this.board[row][col] !== "") {
    //             return false;   // This cell is already occupied
    //         }
        
    //         this.board[row][col] = this.nextMoveIsX ? "X" : "O";
    //         this.nextMoveIsX = !this.nextMoveIsX;
    //     }
        
    //     let ticTacToe = new TicTacToe();
    //     ticTacToe.init(3);
    //     ticTacToe.play(0,0);
    //     ticTacToe.play(0,1);
    //   ====================================  
   
    // let moveCounter = 500;
    // function getSmaller(){
    //     moveCounter--;
    //     square.style.width = moveCounter + 'px';
    //     square.style.height = moveCounter + 'px';
    // if(moveCounter == 50 ){
    //     clearInterval(setintervalTimer)
    // }
    // }
    // let setintervalTimer = setInterval(getSmaller,50);

    // function squareStopBtn(){
    //     clearInterval(setintervalTimer)
    // }
// ===================================================
// function multiAndSum(num){
//     let sumUp = 0;
// for (let i = 3; i < num; i++) {
    
//     if(i%3 === 0 || i%5 === 0){
//         sumUp += i
//         console.log(i);
//     }
    
// }
// console.log(sumUp)
// return sumUp
// }
// multiAndSum(10)
    // ======================================================


    // let string = "how can mirrors be real if our eyes aren't real";
    // let arr = string.split(" ");
    // console.log(arr);
    // function capitaliz(str){

    //     let transfered = "";
    //     str.forEach(element => {
            
    //         transfered += element[0].toUpperCase()+element.slice(1) + " "
    //     });
    //     console.log(transfered)
    // }
    // capitaliz(arr)
//   ===============================================

// let password = "1dfhbsgdfh453763657234sdgsfdgsfdhbsfd56789"




// function mascking(str){
//     let sliceFour = str.slice(-4) 
//    let redyPass = "";
// for (let i = 4; i < str.length; i++) {
//     redyPass += "#"
    
// }

//   return   redyPass + sliceFour

// }
// console.log(mascking(password));
// ==============================================

// let alphabetPosition = "The sunset sets at twelve o' clock"
// let alfaBat = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// function returnNumToAlfa(string){
//     string = string.toLowerCase()
//  let emptyLior = "";
//     for (let i = 0; i < string.length; i++) {
         
//        if(alfaBat.indexOf(string[i]) !== -1){
//         emptyLior += alfaBat.indexOf(string[i])+1 + " "
//        }
//     }
//     return emptyLior.slice(0,-1);
// }
// console.log(returnNumToAlfa(alphabetPosition));
// ===================================================

// let string = "This website is for losers LOL!"
// // let bill = string.toLowerCase()
// // console.log(bill);
// function stringDelite(str) {
//     let newString = "";
//     for (let i = 0; i < str.length; i++) {
        
//         if (str[i] === "e" || str[i] === "i" || str[i] === "o"|| str[i] === "O") {
            
//             continue
//         }
        
//         else{
//             newString += str[i]
//         }
        
//     }
//     return newString;
// }
// stringDelite(string)
// ================================================

// let numArray = [1,2,3,"a","b","c",4];

// function filterList(l){
// let newArry = [];

// for (let i = 0; i < l.length; i++) {
   
//     if(l[i]/1 === l[i]){
//         newArry.push(l[i])
//     }
// }

// return newArry;
// }
// filterList(numArray)

// ==================================================

