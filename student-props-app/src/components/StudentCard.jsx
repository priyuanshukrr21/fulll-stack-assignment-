function StudentCard({ student }) {
  return (
    <div className="student-card">
      <div className="avatar">
        {student.name.charAt(0)}
      </div>

      <h2>{student.name}</h2>
      <p><strong>Roll No:</strong> {student.rollNo}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Semester:</strong> {student.semester}</p>

      <span className="badge">{student.status}</span>
    </div>
  );
}

export default StudentCard;