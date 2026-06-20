/*
Q3. Employee Salary Report

Find the total amount the company
spends on salaries every month.
*/

const salaries = [25000, 30000, 45000, 50000, 35000];

const totalSalary = salaries.reduce(function(total, salary) {
    return total + salary;
}, 0);

console.log(totalSalary);

/*
Output:

185000
*/