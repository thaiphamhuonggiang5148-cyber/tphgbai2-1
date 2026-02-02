import './Student.css';
function Student(props) {
  return (
    <div className="student-card">
      <h3>Học sinh: {props.name}</h3>
      <p>Tuổi: {props.age}</p>
      <p>Lớp: {props.className}</p>
    </div>
  );
}

export default Student;