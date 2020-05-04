const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const allEmployees = [];


// Write code to use inquirer to gather information about the development team members, 
managerInformation();



// Using inquirer prompts to gather team information, starting with the manager
function managerInformation() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the full name of the manager?"

        },

        {
            type: "input",
            name: "id",
            message: "What is the manager's id number?"

        },

        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?"
        },

        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Include area code)",
        },

    ]).then(answers => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber)

        allEmployees.push(manager);
        engineerInformation()
    })
};


// Using inquirer prompts to gather engineer information
function engineerInformation() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's full name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is the engineer's id number?",

        },

        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
        },

        {
            type: "input",
            name: "github",
            message: "What is the engineer's github name?",
        },
        {
            type: "confirm",
            name: "addEngineer",
            message: "Would you like to add another engineer to the team roster?"
        }

    ]).then(answers => {
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github)

        allEmployees.push(engineer);
        answers.addEngineer ? (
            engineerInformation()
        ) :
            (
                internInformation())

    }
    )
};
// Using inquirer to gather intern information

function internInformation() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is the intern's id?"
        },

        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
        },

        {
            type: "input",
            name: "school",
            message: "What school does the intern attend?",
        },

        {
            type: "confirm",
            name: "addIntern",
            message: "Would you like to add another intern to the team roster?"
        },

    ]).then(answers => {
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        )

        allEmployees.push(intern)
        answers.addIntern ? (
            internInformation()
        ) :
            (
                console.log('Your team roster is complete!'));
        const teamPage = render(allEmployees);
        fs.mkdirSync('output');
        fs.writeFileSync(outputPath, teamPage);
    }
    )

}









// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required

// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ``
