import logo from "./logo.svg";
import "./App.css";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";
import Control from "./components/Control";
import { useState } from "react";
const data = [
  {
    idStudent: "SV1",
    name: "Nguyễn Văn A",
    age: 18,
    gender: "male",
    doB: "2000-01-01",
    poB: "Hà Nội",
    address: "Từ Liêm",
  },
  {
    idStudent: "SV2",
    name: "Nguyễn Văn B",
    age: 18,
    gender: "male",
    doB: "2000-01-01",
    poB: "Hồ Chí Minh",
    address: "Từ Liêm",
  },
];

function App() {
  const [toggleForm, setToggleForm] = useState(false);
  const [dataStudent, setDatataStudent] = useState(data);
  const [student, setStudent] = useState({
    idStudent: "",
    name: "",
    age: "",
    gender: "",
    doB: "",
    poB: "",
    address: "",
  });

  const [action, setAction] = useState();
  const handleToggleForm = (student, action) => {
    // Truyền action vào form để nhận biết nên xem hay sửa hay add
    setAction(action);
    setToggleForm(true);
    setStudent(student);
  };

  // Có 2 trường hợp submit hoặc là add hoặc là sửa

  const handleAddEdit = (student, action) => {
    setToggleForm(false);
    if (action === "edit") {
      const newListStudent = dataStudent.map((item) => {
        if (item.idStudent === student.idStudent) {
          return {
            ...item,
            ...student,
          };
        }
        return item;
      });
      return setDatataStudent(newListStudent);
    }

    if (dataStudent[0].idStudent) {
      // Tạo id mới cho sv
      student.idStudent =
        "SV" +
        (Number(dataStudent[dataStudent.length - 1].idStudent.slice(2)) + 1);
    } else {
      student.idStudent = "SV1";
    }
    setDatataStudent([...dataStudent, student]);
  };
  const handleDelete = (idStudent) => {
    const newListStudent = dataStudent.filter(
      (item) => item.idStudent !== idStudent
    );
    setDatataStudent(newListStudent);
  };
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          {/* START CONTROL */}
          <Control onToggle={handleToggleForm} />
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          <ListStudent
            dataStudent={dataStudent}
            onToggle={handleToggleForm}
            onDelete={handleDelete}
          />
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      {toggleForm && (
        <Form student={student} action={action} onSubmit={handleAddEdit} />
      )}
      {/* END FORM SINH VIÊN */}
    </div>
  );
}

export default App;
