// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
function remove(people, name) {
    let newname = []
    for (let i = 0; i < people.length; i++) {
        if (people[i] !== name) {
            newname.push(people[i])
        }
    }
    return newname
}

// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
function sum(numbers) {
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    return sum
}




// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(numbers) {
    let average = undefined
    if (numbers.length > 0) {
        average = sum(numbers) / numbers.length
    }
    return average
}
// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(array) {
    let smallest = undefined
    for (let item of array)
        if (smallest === undefined || smallest < item) {

        }
    return minimum
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
// function removeOnce(array, itemToRemove) {
//     let idx = array.indexOf(itemToRemove)
//     if (idx !== -1) {
//         array.sp
//     }
// }





// function selectionSort(array) {
//     let arrayCopy = array.slice
//     let sortedArray = []

//     while (arrayCopy.length > 0) {
//         let minVal = minimum(arrayCopy)
//         sortedArray.push(minVal)

//         let minVal = arrayCopy.indexOf(minVal)
//         arrayCopy.splice(minValIdx, 1)

//     }
//     return sortedArray
// }

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
