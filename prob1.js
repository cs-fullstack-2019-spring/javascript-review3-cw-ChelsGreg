



//Put the start of your program in a main function.
// Create a loop that takes user input and put it in an array.
// Once the user quits, print all items in the array.
// DO NOT print the array, print the items/elements in the array.

//
// function main()
// {
// // problem1();
// // problem2();
// //problem3();
////problem4();
// }



// function problem1()
//
// {
//
//     let userInput = [];
//
//     var expr = prompt("Enter an item");
//
//     while (expr !== "q")
//     {
//
//
//         switch (expr)
//         {
//             default:
//                 userInput.push(expr);
//         }
//
//
//     expr = prompt("Enter another item, or q");
//     }
//
//     for(var i = 0; i <userInput.length; i++)
//     {
//         console.log(userInput[i]);
//     }
//
//
// }
// problem1();
//




// function problem2()
// {
//     var engSpanish = prompt("Write any number 1-5, to translate");
//
//     switch (engSpanish)
//     {
//         case "1":
//         case "one":
//             console.log("uno");
//             break;
//         case "2":
//         case "two":
//             console.log("dos");
//             break;
//         case "3":
//         case "three":
//             console.log("tres");
//             break;
//         case "4":
//         case "four":
//             console.log("cuatros");
//             break;
//         case "5":
//         case "five":
//             console.log("cinco");
//             break;
//         default:
//             console.log("Error!")
//
//
//
//     }
//
// }
//  problem2();






// function problem3()
// {
//
//     let userNum = [];
//
//     var expr = parseInt(prompt("Enter a number"));
//
//     while (expr !== "q")
//     {
//
//
//         switch (expr)
//         {
//             default:
//                 userNum.push(expr);
//         }
//
//
//         expr = prompt("Enter another number, or q");
//     }
//
//     for(var i = 0; i <userNum.length; i++)
//     {
//         console.log(userNum[i]);
//     }
//
//
//     function callBack(total, num)
//     {
//         return(total + num);
//     }
//
//     console.log(userNum.reduce(callBack));
//
//
//
//
//
// }
// problem3();





function problem4()
{
    class Books


    {
        constructor(name, rating, genre, author)
        {
            this.name = name;
            this.rating = rating;
            this.genre = genre;
            this.author = author;

        }

        changeRating(newRating)
        {
            this.rating = newRating;
        }



    }

    var newBooks = new Books
        [{"Life", 100, "Horror", "C Gregory" },
            {"Tomorrow", 80, "Action", "Robertson"},
        {"Forever", 70, "Spirituality", "Osho"}];


    function bookName(booksOnly)
    {
        return (booksOnly === this.name);
    }





}
problem4();