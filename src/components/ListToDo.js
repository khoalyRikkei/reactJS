import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";

function ListToDo(props) {
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Tên công việc</th>
          <th>Nội dung</th>
          <th>Trạng thái</th>
          <th>Deadline</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.listToDo &&
          props.listToDo.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.content}</td>
              <td>{item.status ? "Đã hoàn thành" : "Chưa hoàn thành"}</td>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>
                <Button
                  className="me-1 btn-primary"
                  onClick={() => props.onToggleModal(true, "edit", item.id)}
                >
                  Edit
                </Button>{" "}
                <Button
                  className="btn-danger"
                  onClick={() => props.onDeleteData(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default ListToDo;
