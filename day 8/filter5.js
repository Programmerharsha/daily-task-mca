// 5. Extract objects from an array based on a age property value greater than 18.
// Input:
// [
//     { name: "Alice", age: 12 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 22 }
// ];
// Output:
// {name: 'Bob', age: 30}
// {name: 'Charlie', age: 22}

const arr = [
    { name: "Alice", age: 12 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

const result = arr.filter(person => person.age > 18);
result.forEach(person => console.log(person));