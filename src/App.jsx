import './App.css'
import Student from './Student'

function App() {
  return (
    <div className="container-hocsinh">
      <Student  name="Thái Phạm Hương Giang" age={17} className="26.SP.IT3"/>
      <Student name="Lê Thành Được" age={20} className="24CDTKW01"/>
      <Student name="Trịnh Thái Nguyên" age={19} className="26.SP.IT3" />
    </div>
  )
}

export default App