class Student {
  private static idCounter = 0;
  private studentID: string;
  private courses: string[] = [];
  private balance: number = 0;

  constructor(private name: string) {
    this.studentID = this.generateStudentID();
  }

  private generateStudentID(): string {
    Student.idCounter += 1;
    return Student.idCounter.toString().padStart(5, '0');
  }

  enroll(course: string) {
    this.courses.push(course);
    this.balance += 1000; // Assume each course costs $1000
  }

  viewBalance(): number {
    return this.balance;
  }

  payTuition(amount: number) {
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
