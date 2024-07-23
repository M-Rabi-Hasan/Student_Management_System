class Student {
    name;
    static idCounter = 0;
    studentID;
    courses = [];
    balance = 0;
    constructor(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
    }
    generateStudentID() {
        Student.idCounter += 1;
        return Student.idCounter.toString().padStart(5, '0');
    }
    enroll(course) {
        this.courses.push(course);
        this.balance += 1000; // Assume each course costs $1000
    }
    viewBalance() {
        return this.balance;
    }
    payTuition(amount) {
        this.balance -= amount;
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.studentID}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: ${this.balance}`);
    }
}
export { Student };
