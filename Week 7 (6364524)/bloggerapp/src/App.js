import './App.css';
import { books } from './data/books';
import { blogs } from './data/blogs';
import { courses } from './data/courses';
import BookList from './components/BookList';
import BlogList from './components/BlogList';
import CourseList from './components/CourseList';

function App() {
  return (
    <div className="container">
      <div className="column">
        <h1>Course Details</h1>
        <CourseList courses={courses} />
      </div>
      <div className="column">
        <h1>Book Details</h1>
        <BookList books={books} />
      </div>
      <div className="column">
        <h1>Blog Details</h1>
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}

export default App;

