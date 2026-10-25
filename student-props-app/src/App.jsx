import Header from "./components/Header";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const students = [
    {
      id: 1,
      name: "Rahul Kumar",
      rollNo: "101",
      course: "B.Tech CSE",
      semester: "5th",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Singh",
      rollNo: "102",
      course: "B.Tech IT",
      semester: "3rd",
      status: "Active",
    },
    {
      id: 3,
      name: "Amit Sharma",
      rollNo: "103",
      course: "B.Tech CSE",
      semester: "5th",
      status: "Active",
    },
  ];

  return (
    <div>
      <Header
        title="Student Management System"
        subtitle="Student Profiles using React Props"
      />

      <main className="container">
        <h2>Our Students</h2>
        <StudentList students={students} />
      </main>

      <footer>
        <p>Built with React Functional Components</p>
      </footer>
    </div>
  );
}

export default App;