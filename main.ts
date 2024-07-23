#! /usr/bin/env node

import { Student } from './Student.js';
import readlineSync from 'readline-sync';

const students: Student[] = [];

function addStudent() {
  const name = readlineSync.question('Enter student name: ');
  const student = new Student(name);
  students.push(student);
  console.log(`Student added with ID: ${student['studentID']}`);
}

function enrollStudent() {
  const id = readlineSync.question('Enter student ID: ');
  const student = students.find(s => s['studentID'] === id);
  if (!student) {
    console.log('Student not found!');
    return;
  }
  const course = readlineSync.question('Enter course to enroll: ');
  student.enroll(course);
  console.log(`Enrolled in course: ${course}`);
}

function payTuition() {
  const id = readlineSync.question('Enter student ID: ');
  const student = students.find(s => s['studentID'] === id);
  if (!student) {
    console.log('Student not found!');
    return;
  }
  const amount = parseFloat(readlineSync.question('Enter amount to pay: '));
  student.payTuition(amount);
  console.log(`Paid amount: ${amount}`);
}

function viewStatus() {
  const id = readlineSync.question('Enter student ID: ');
  const student = students.find(s => s['studentID'] === id);
  if (!student) {
    console.log('Student not found!');
    return;
  }
  student.showStatus();
}

function main() {
  while (true) {
    console.log('\n1. Add Student');
    console.log('2. Enroll Student in Course');
    console.log('3. Pay Tuition');
    console.log('4. View Student Status');
    console.log('5. Exit');
    const choice = readlineSync.question('Enter your choice: ');

    switch (choice) {
      case '1':
        addStudent();
        break;
      case '2':
        enrollStudent();
        break;
      case '3':
        payTuition();
        break;
      case '4':
        viewStatus();
        break;
      case '5':
        return;
      default:
        console.log('Invalid choice!');
    }
  }
}

main();
