import { logDOM } from "@testing-library/react";
import { useEffect, useRef, useState } from "react";

function Form(props) {
  const [dataForm, setDataForm] = useState();
  const gender = useRef();
  const poB = useRef();

  useEffect(() => {
    setDataForm(props.student);
  }, [props.student]);

  const handleOnChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dataForm.gender = gender.current.value;
    dataForm.poB = poB.current.value;

    props.onSubmit(dataForm, props.action);
  };
  console.log(dataForm);
  return (
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
                  value={dataForm?.idStudent}
                  disable
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={dataForm?.name}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={dataForm?.age}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  name="gender"
                  className="form-control"
                  defaultValue={dataForm?.gender ? dataForm.gender : " male"}
                  ref={gender}
                >
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  value={dataForm?.doB}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  value={dataForm?.poB}
                  ref={poB}
                  name="poB"
                  onChange={handleOnChange}
                >
                  <option value="29">Hà Nội</option>
                  <option value="59">TP. Hồ Chí Minh</option>
                  <option value="43">Đà Nẵng</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  defaultValue={dataForm?.address}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            {props.action !== "view" && (
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={(e) => handleSubmit(e)}
              >
                {props.action === "add" ? "Add new student" : "Update student"}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
