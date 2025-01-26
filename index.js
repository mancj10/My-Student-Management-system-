// Define a Student class to store student info
class Student {
    constructor(name, id, grades) {
        this.name = name;
        this.id = id;
        this.grades = grades;  // grades will be an array of numbers
    }

    // Method to calculate the average grade
    calculateAverage() {
        let total = 0;
        for (let i = 0; i < this.grades.length; i++) {
            total += this.grades[i];
        }
        return total / this.grades.length;
    }

    // Method to display the student's details
    displayDetails() {
        console.log("Name:", this.name);
        console.log("ID:", this.id);
        console.log("Grades:", this.grades.join(", "));
        console.log("Average Grade:", this.calculateAverage().toFixed(2));
        console.log("----------------------------");
    }
}

// Define a class to manage the students
class StudentManagementSystem {
    constructor() {
        this.students = [];  // Store the students in an array
    }

    // Method to add a new student
    addStudent(name, id, grades) {
        const newStudent = new Student(name, id, grades);
        this.students.push(newStudent);
    }

    // Method to view all students
    viewAllStudents() {
        if (this.students.length === 0) {
            console.log("No students available.");
            return;
        }
        
        this.students.forEach(student => student.displayDetails());
    }

    // Method to view a specific student by their ID
    viewStudentById(id) {
        const student = this.students.find(s => s.id === id);
        if (student) {
            student.displayDetails();
        } else {
            console.log("Student not found.");
        }
    }
}

// Create an instance of the Student Management System
const system = new StudentManagementSystem();

// Add some students to the system
system.addStudent("Chijioke Egenwe", "S001", [85, 90, 78]);
system.addStudent("Onyedikachi Eneh", "S002", [92, 88, 95]);

// View all students
system.viewAllStudents();

// View a specific student by their ID
system.viewStudentById("S001");

// Calculate the average grade for a student manually
const Chijioke = system.students.find(s => s.id === "S001");
if (Chijioke) {
    console.log(`Chijioke's average grade: ${Chijioke.calculateAverage().toFixed(2)}`);
}