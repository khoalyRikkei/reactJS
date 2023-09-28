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
          <div className="card-header">
            <div className="row">
              <div className="col-3">
                <button type="button" className="btn btn-primary btn-icon-text">
                  Thêm mới sinh viên
                </button>
              </div>
              <div className="col-6">
                <form className="search-form" action="#">
                  <i className="icon-search" />
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Here"
                    title="Search here"
                  />
                  <button className="btn btn-primary btn-icon-text">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="col-3 d-flex align-items-center">
                <select className="form-control">
                  <option value="">Sắp xếp</option>
                  <option value="">ABC def</option>
                  <option value="">ABC def</option>
                  <option value="">ABC def</option>
                </select>
              </div>
            </div>
          </div>
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>SV1</td>
                    <td>Nguyên Văn A</td>
                    <td>20</td>
                    <td>male</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="idStudent"
                    disable
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="name" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="age" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select name="gender" className="form-control">
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input className="form-control" placeholder="dd/mm/yyyy" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select className="form-control" name="poB">
                    <option value="29">Hà Nội</option>
                    <option value="59">TP. Hồ Chí Minh</option>
                    <option value="43">Đà Nẵng</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea className="form-control" />
                </div>
              </div>

              <button type="submit" className="btn btn-primary me-2">
                Add new student
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* END FORM SINH VIÊN */}
    </div>
  );
}

export default App;
