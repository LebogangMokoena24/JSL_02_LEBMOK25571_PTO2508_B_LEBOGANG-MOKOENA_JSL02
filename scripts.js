// JSL02 - Task Input and Status Validation System

// Function to repeatedly prompt user until a valid status is entered
function getValidStatus(taskNumber) {
    let status;

    while (true) {
        status = prompt(`Enter status for Task ${taskNumber} (todo, doing, done):`);

        // Prevent null error if user clicks Cancel
        if (status === null) {
            alert("Status is required!");
            continue;
        }

        // Convert input to lowercase and remove extra spaces
        status = status.toLowerCase().trim();

        // Validate allowed statuses
        if (status === "todo" || status === "doing" || status === "done") {
            return status;
        } else {
            alert("Invalid status! Please enter 'todo', 'doing', or 'done'.");
        }
    }
}
// -------- TASK 1 --------
let task1Title = prompt("Enter title for Task 1:");
let task1Description = prompt("Enter description for Task 1:");
let task1Status = getValidStatus(1);
// -------- TASK 2 --------
let task2Title = prompt("Enter title for Task 2:");
let task2Description = prompt("Enter description for Task 2:");
let task2Status = getValidStatus(2);
// -------- CHECK COMPLETED TASKS --------
let hasCompletedTask = false;

// Check Task 1
if (task1Status === "done") {
    console.log(`Title: "${task1Title}", Status: "${task1Status}"`);
    hasCompletedTask = true;
}

// Check Task 2
if (task2Status === "done") {
    console.log(`Title: "${task2Title}", Status: "${task2Status}"`);
    hasCompletedTask = true;
}

// If no tasks are completed
if (!hasCompletedTask) {
    console.log("No tasks completed, let's get to work!");
}
