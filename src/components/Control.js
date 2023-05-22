import { Button, Container, Form, InputGroup } from "react-bootstrap";

function Control(props) {
  return (
    <Container fluid className="control-group">
      {/* Mở form để điền */}
      <Button onClick={() => props.onToggleModal(true, "add")}>
        Add to do
      </Button>
      <InputGroup>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </Container>
  );
}
export default Control;
