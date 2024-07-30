function findStudentById(students, id) {
  // Your code here
  let result = null;
  const n = students.length;

  for (let i = 0; i < n; i++) {
    if (students[i].id === id) {
      result = students[i];
    }
  }

  return result;
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null
