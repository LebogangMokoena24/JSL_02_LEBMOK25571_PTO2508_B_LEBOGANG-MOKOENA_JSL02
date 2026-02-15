# JSL_02_LEBMOK25571_PTO2508_B_LEBOGANG-MOKOENA_JSL02
# Kanban Task Management Project

## Project Description
This is a simple web-based Kanban task system where users can input two tasks with titles, descriptions, and statuses. The system validates task statuses and logs completed tasks to the console, helping users manage and prioritize work efficiently.

## Technologies Used
- HTML
- CSS
- JavaScript (ES6)

## Features
- Prompt user to input **two tasks** with title, description, and status
- Automatically converts status input to **lowercase** for consistency
- **Validates status**: only accepts "todo", "doing", or "done"
- Keeps prompting the user until a valid status is entered
- Logs tasks marked as **done** to the console
- Shows motivational message if no tasks are done:  
  `"No tasks completed, let's get to work!"`
- Responsive layout for desktop, tablet, and mobile
- Clean, maintainable, and commented code

## Usage Example
1. Open `index.html` → browser prompts appear for Task 1 & Task 2
2. Enter **title**, **description**, and **status** for each task
3. Console displays tasks marked as `done` or a motivational message if none

## Interaction
- Status input is **case-insensitive** (`TODO`, `Done`, `doing` all work)
- If user cancels or leaves input blank, prompt alerts to fill the required field
