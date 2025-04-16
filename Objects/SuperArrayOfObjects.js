/*  Create a function named countBy that takes an array of objects and a key (string) as input
 and returns an object where the keys are unique values of the given key from the array, 
 and the values are the number of occurrences of each unique value.
 
    countBy([
            {branch: 'audi', model: 'q8'}, 
            {branch: 'audi', model 'rs7'}, 
            {branch "ford', model 'mustang'}, 
            {branch 'ford", model 'explorer'},
            {branch. 'bmw', model: 'x7'},
        ], 'branch');
 
    Output: {'audi': 2, 'ford": 2, "bmw: 1) 
 */


    function countBy(arr, key){
        let result = {};
        arr.forEach(element => {

            if(result[element.branch]){
                result[element.branch] +=1;
            }
            else{
                result[element.branch]=1;
            }
        });
        return result;
    }

    let arr = [
        { branch: 'audi', model: 'q8' },
        { branch: 'audi', model: 'rs7' },
        { branch: 'ford', model: 'mustang' },
        { branch: 'ford', model: 'explorer' },
        { branch: 'bmw', model: 'x7' }
      ];
      
      console.log(countBy(arr, 'branch')); 
      console.log(countBy(arr, 'model'));
      
      