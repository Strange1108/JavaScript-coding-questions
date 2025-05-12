
function deepFreeze(obj) 
{
    Object.keys(obj).forEach((key) => 
    {
        const value = obj[key];
        if (value && typeof value === 'object') {
            deepFreeze(value);
        }
    }
    );
    return Object.freeze(obj);
}
const person = { name: 'Mahendra', details: { age: 23, job: 'Developer'}};
deepFreeze (person);
person.details.age = 33;
console.log(person);