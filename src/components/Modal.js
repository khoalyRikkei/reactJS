import { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalForm(props) {
  const [formData, setFormData] = useState({});
  const type = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Truyền dữ liệu cho app
    props.onAddEditForm({ ...formData, type: type.current.value });

    //   Đóng modal cho app
    props.onToggleModal(false);

    //   Xóa dữ liệu trong form
    setFormData({});

    //   Xóa hành động
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setFormData(props.dataItem);
  }, [props.dataItem]);

  return (
    <Modal
      show={props.toggleModal}
      onHide={() => props.onToggleModal(false)}
      backdrop="static"
      keyboard={false}
    >
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.dataItem?.id ? "Edit nhiệm vụ" : "Tạo mới nhiệm vụ"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Nhập tên công việc"
              name="id"
              id="id"
              value={formData?.id}
              hidden
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Tên công việc</Form.Label>
            <Form.Control
              placeholder="Nhập tên công việc"
              name="name"
              id="name"
              value={formData?.name}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="type">Loại công việc</Form.Label>
            <Form.Select
              name="type"
              id="type"
              value={formData?.type ? formData?.type : "home"}
              onChange={handleOnChange}
              ref={type}
            >
              <option value="company">In Company</option>
              <option value="home">In Home</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData?.date}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nội dung công việc</Form.Label>
            <Form.Control
              placeholder="Nhập nội dung công việc"
              as="textarea"
              name="content"
              value={formData?.content}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Trạng thái</Form.Label>
            <Form.Select
              name="status"
              value={formData?.status}
              onChange={handleOnChange}
            >
              <option value={false}>Chưa hoàn thành</option>
              <option value={true}>Hoàn thành</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => props.onToggleModal(false)}
          >
            Close
          </Button>
          <Button variant="primary" type="submit">
            {props.dataItem?.id ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalForm;
