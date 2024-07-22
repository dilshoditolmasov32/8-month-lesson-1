const Index = () => {
//  1-MASALA

// const n = 2
// const obj = {a:2, b:3, c: 4}
// for(let key in obj){
//     obj[key] *= n
// }

// console.log(obj);



//  2-MASALA

// function countWordA(str){
//     let words = str.split(' ')
//     let count = 0
//     for(let word of words ){
//         if(word.includes("a")  word.includes("A")){
//             count++
//         }

//     }
//     return count
// }
// let text = "Ali vali okan "
// console.log(countWordA(text));



//  3-MASALA

// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       read: false
//     },
//     {
//       title: "Dunyoning ishlari",
//       author: "O'tkir Hoshimov",
//       read: true
//     },
//     {
//       title: "Iymon",
//       author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//       read: true
//     }
//   ];
  
//   function checkBooksReadStatus(books) {
//     books.forEach((book, index) => {
//       let status = book.read ? "o'qilgan" : "o'qilmagan";
//       console.log(`${index + 1}. ${book.author} ning "${book.title}" kitobi ${status}`);
//     });
//   }
  
//   checkBooksReadStatus(books);
  


//  4-MASALA

// function arrayToLengthObject(arr) {
//     let result = {};
//     arr.forEach(str => {
//       result[str] = str.length;
//     });
//     return result;
//   }

//   let input = ["text", "world", "laptop"];
//   let output = arrayToLengthObject(input);
//   console.log(output); 
  


//  5-MASALA

// function countWords(arr) {
//     let result = {};
//     arr.forEach(word => {
//       if (result[word]) {
//         result[word]++;
//       } else {
//         result[word] = 1;
//       }
//     });
//     return result;
//   }

//   const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
//   let output = countWords(animals);
//   console.log(output); 
  


//  6-MASALA

// function ageDifference(people) {
//     people.sort((a, b) => a.age - b.age);
    
//     let youngest = people[0].age;
//     let oldest = people[people.length - 1].age;
    
//     return oldest - youngest;
//   }
  
//   const people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ];
  
//   let output = ageDifference(people);
//   console.log(output); 
  


//  7-MASALA

// function getTruthyFalsy(arr) {
//     let truthy = arr.filter(element => Boolean(element));
//     let falsy = arr.filter(element => !Boolean(element));
    
//     return {
//       truthy: truthy,
//       falsy: falsy
//     };
//   }
  
//   const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
//   const output = getTruthyFalsy(input);
//   console.log(output); 



// 8-MASALA

// function minMaxWord(sentence) {
//     let words = sentence.split(' ');
  
//     let minWord = words[0];
//     let maxWord = words[0];
  
//     words.forEach(word => {
//       if (word.length < minWord.length) {
//         minWord = word;
//       }
//       if (word.length > maxWord.length) {
//         maxWord = word;
//       }
//     });
  
//     return {
//       minWord: minWord,
//       maxWord: maxWord
//     };
//   }
  
//   const input = "Men dasturlash kursida o'qiyman";
//   const output = minMaxWord(input);
//   console.log(output); 
  
  

// 9-MASALA

// function extractMessage(input) {
//     let message = input[29] + input[30] + input[31] + input[32] + input[33] + ' ' + 
//                   input[34] + input[35] + "'" + input[36] + input[37] + input[38] + input[39] + ' ' + 
//                   input[47] + input[48] + ' ' + 
//                   input[56] + input[57] + input[58] + ' ' + 
//                   input[62] + input[63] + input[64] + input[65];
//     return message;
//   }
  
//   const input = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
//   const output = extractMessage(input);
//   console.log(output);
  


//  10-MASALA

// var searchMatrix = function(matrix, target) {
//     if (matrix.length === 0  matrix[0].length === 0) {
//       return false;
//     }

//     let rows = matrix.length;
//     let cols = matrix[0].length;
  
//     let left = 0;
//     let right = rows * cols - 1;
  
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       let midValue = matrix[Math.floor(mid / cols)][mid % cols];
  
//       if (midValue === target) {
//         return true;
//       } else if (midValue < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
  
//     return false;
//   };
  
//   let matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//   let target1 = 3;
//   console.log(searchMatrix(matrix1, target1)); 
  
//   let matrix2 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//   let target2 = 13;
//   console.log(searchMatrix(matrix2, target2)); 
  


//  11-MASALA

// var rotate = function(matrix) {
//     const n = matrix.length;  
//     for (let i = 0; i < n; i++) {
//       for (let j = i; j < n; j++) {
//         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//       }
//     }
  
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < Math.floor(n / 2); j++) {
//         [matrix[i][j], matrix[i][n - j - 1]] = [matrix[i][n - j - 1], matrix[i][j]];
//       }
//     }
  
//     return matrix;
//   };
  
//   let matrix1 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
//   let output1 = rotate(matrix1);
//   console.log(output1); 
  
//   let matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//   let output2 = rotate(matrix2);
//   console.log(output2); 
  


//  12-MASALA

// function lengthOfLastWord(s) {
//     let words = s.trim().split(' ');
  
//     let lastWord = words[words.length - 1];
//     return lastWord.length;
//   }
  
//   let input = "Men dasturlash kursida o’qiyman";
//   let output = lengthOfLastWord(input);
//   console.log(output); 
  
//   let input2 = "Hello world";
//   let output2 = lengthOfLastWord(input2);
//   console.log(output2);
  
  

//  13-MASALA

// function keyValueConcat(obj) {
//     return Object.entries(obj).map(entry => entry.join(''));
//   }
  
//   let input = {a: 2, b: 5, c: 7};
//   let output = keyValueConcat(input);
//   console.log(output); 
  


//  14-MASALA

// var findMedianSortedArrays = function(nums1, nums2) {
//     let merged = nums1.concat(nums2);
    
//     merged.sort((a, b) => a - b);
    
//     let n = merged.length;
//     if (n % 2 === 0) {
//       return (merged[n / 2 - 1] + merged[n / 2]) / 2;
//     } else {
//       return merged[Math.floor(n / 2)];
//     }
//   };
  
//   let nums1 = [1, 2];
//   let nums2 = [3, 4];
//   let result = findMedianSortedArrays(nums1, nums2);
//   console.log(result);
  


//  15-MASALA

// function moveDuplicates(arr) {
//     let seen = {};
//     let uniqueItems = [];
    
//     for (let item of arr) {
//       if (!seen[item]) {
//         seen[item] = true;
//         uniqueItems.push(item);
//       }
//     }
    
//     return uniqueItems;
//   }
  
//   let array = [1, 2, 3, 4, 2, 5, 3, 6, 7, 1];
//   let result = moveDuplicates(array);
//   console.log(result);



//  16-MASALA

// let products = [
//     {id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
//   ];
  
//   function deleteProductById(products, idToDelete) {
//     return products.filter(product => product.id !== idToDelete);
//   }
  
//   let updatedProducts = deleteProductById(products, 4);
//   console.log(updatedProducts);
  
  


//  17-MASALA

// function findAgeDifference(people) {
//     let youngest = Math.min(...people.map(person => person.age));
//     let oldest = Math.max(...people.map(person => person.age));
  
//     let difference = oldest - youngest;
  
//     return difference;
//   }
  
//   let people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ];
  
//   let ageDifference = findAgeDifference(people);
//   console.log(ageDifference); 
  


// 18-MASALA

// function minMaxWord(sentence) {
//     let words = sentence.split(' ');
  
//     let minWord = words[0];
//     let maxWord = words[0];
  
//     words.forEach(word => {
//       if (word.length < minWord.length) {
//         minWord = word;
//       }
//       if (word.length > maxWord.length) {
//         maxWord = word;
//       }
//     });
  
//     return {
//       minWord: minWord,
//       maxWord: maxWord
//     };
//   }
  
//   const input = "Men dasturlash kursida o'qiyman";
//   const output = minMaxWord(input);
//   console.log(output); 
  
  

//  19-MASALA

// function arrayToLengthObject(arr) {
//     let result = {};
//     arr.forEach(str => {
//       result[str] = str.length;
//     });
//     return result;
//   }

//   let input = ["text", "world", "laptop"];
//   let output = arrayToLengthObject(input);
//   console.log(output);

  return <div>APP COMPONENT</div>;
};

export default Index;
