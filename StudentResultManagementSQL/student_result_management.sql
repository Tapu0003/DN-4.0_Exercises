-- Student Result Management System SQL Script

CREATE DATABASE StudentDB;
USE StudentDB;

CREATE TABLE Students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    department VARCHAR(50),
    year INT
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(50),
    credits INT
);

CREATE TABLE Results (
    result_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    marks INT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

INSERT INTO Students (name, department, year) VALUES
('Amit Kumar', 'CSE', 3),
('Priya Sharma', 'ECE', 2),
('Ravi Das', 'ME', 4);

INSERT INTO Courses (course_name, credits) VALUES
('Database Systems', 4),
('Data Structures', 3),
('Operating Systems', 4);

INSERT INTO Results (student_id, course_id, marks) VALUES
(1, 1, 85),
(1, 2, 78),
(2, 1, 92),
(3, 3, 66);

-- Query to fetch student results with course names
SELECT s.name, c.course_name, r.marks
FROM Results r
JOIN Students s ON r.student_id = s.student_id
JOIN Courses c ON r.course_id = c.course_id;
