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
  );
}

export default ListStudent;
