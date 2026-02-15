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
