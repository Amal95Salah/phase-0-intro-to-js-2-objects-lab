// Write your solution in this file!
let employee = { name: "name", streetAddress: "street" };
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const emplyee_new = { ...employee, [key]: value };
    return emplyee_new;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employee_new = { ...employee };
    delete employee_new[key];
    return employee_new;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}