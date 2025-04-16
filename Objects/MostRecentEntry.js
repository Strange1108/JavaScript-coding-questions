/*Write a function that takes an array of objects, where each object contains a group, price, and date.
The function should return a new array that includes only the most recent entry for each group based on the 
date Each group should appear only once in the output.

For each unique group, find the object with the latest date.
The output should not contain duplicate group entries

[
    {group: 'A', price 100, date: 2024-5-25},
    {group: 'A', price: 50, date: 2024-12-25},
    {group: 'A', price:20, date: 2022-12-31},
    {group: 'B' price 200, date: 2019-1-31},
    {group: 'B', price 100, date: 2020-10-15},
    {group: 'B', price: 100, date: 2020-2-201}, 
    {group: 'C'. price:50, date: '2021-1-10},
]

Output has to be -
[
    {group: 'A', price 50, date: 2021-12-25'},
    {group: 'B', price: 100, date: 2020-10-15'}, 
    {group: 'C', price:50, date: 2021-1-10},
]

Or:
[
    {group: 'A', price: 50},
    {group: 'B', price: 100},
    {group: 'C' price:50},
]
*/

function getMostRecentEntry(arr){
    arr.sort((a,b) => new Date(b.date) - new Date(a.date));
    const result = {};
    arr.forEach(item => {
        if(!result[item.group]){
            result[item.group] = item;
        }
    });

    return result;
}



let arr = [
    {group: 'A', price:100, date:'2024-5-25'},
    {group: 'A', price:50, date:'2024-12-25'},
    {group: 'A', price:20, date:'2022-12-31'},
    {group: 'B', price:200, date:'2019-1-31'},
    {group: 'B', price:100, date:'2020-10-15'},
    {group: 'B', price:100, date:'2020-2-20'},
    {group: 'C', price:50, date:'2021-1-10'}
  ]
  
  console.log(getMostRecentEntry(arr));