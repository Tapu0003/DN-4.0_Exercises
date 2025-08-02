function CourseList({ courses }) {
  return (
    <div>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.cname}</h3>
          <h4>{course.cdate}</h4>
        </div>
      ))}
    </div>
  );
}
export default CourseList;
