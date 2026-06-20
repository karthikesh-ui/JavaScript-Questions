/*
Bonus Challenge

Company Employee Analytics

Perform the following tasks:

1. Create a new array containing only employee names.
2. Find the employee earning ₹50,000.
3. Calculate the total salary of all employees.
4. Arrange employees in ascending order of salary.
*/

const employees = [
    { name: "Rahul", salary: 30000 },
    { name: "Priya", salary: 45000 },
    { name: "Kiran", salary: 25000 },
    { name: "Sneha", salary: 50000 }
];

const employeeNames = employees.map(function(employee) {
    return employee.name;
});

const highestPaidEmployee = employees.find(function(employee) {
    return employee.salary === 50000;
});

const totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

const sortedEmployees = [...employees].sort(function(a, b) {
    return a.salary - b.salary;
});

console.log(employeeNames);
console.log(highestPaidEmployee);
console.log(totalSalary);
console.log(sortedEmployees);

/*
Output:

["Rahul", "Priya", "Kiran", "Sneha"]

{ name: "Sneha", salary: 50000 }

150000

[
 { name: "Kiran", salary: 25000 },
 { name: "Rahul", salary: 30000 },
 { name: "Priya", salary: 45000 },
 { name: "Sneha", salary: 50000 }
]
*/