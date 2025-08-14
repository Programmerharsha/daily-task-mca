// 3. Change Grade property value using forEach:
// Input:
// students = [
//     { name: "Alice", grade: "A" },
//     { name: "Bob", grade: "B" },
//     { name: "Charlie", grade: "C" }
// ];
// Output:
// {name: 'Alice', grade: 'A+'} 
// {name: 'Bob', grade: 'A+'}
// {name: 'Charlie', grade: 'A+'}

let students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "C" }
];

students.forEach(student => {
    student.grade = "A+";
    console.log(student);
});