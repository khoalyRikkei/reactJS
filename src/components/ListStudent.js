function ListStudent(props) {
  console.log(props);
  return (
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
            {props?.dataStudent.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.idStudent}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.gender === "male" ? "Nam" : "Nữ"}</td>
                <td>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-text"
                      onClick={() => props.onToggle(student, "view")}
                    >
                      Xem
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-icon-text"
                      onClick={() => props.onToggle(student, "edit")}
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-icon-text"
                      onClick={() => props.onDelete(student.idStudent)}
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudent;
