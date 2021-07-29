import "./Signin.css";
import React, { useState } from "react";
import { Modal, Nav, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { CloseOutlined } from "@ant-design/icons";
// import { UserOutlined } from "@ant-design/icons";

function SignIn(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // eslint-disable-next-line
  const handleShow = () => setShow(true);

  return (
    <div className="signin-container">
      <Nav.Link onClick={handleShow}> Se connecter </Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header n>
          <Modal.Title id="example-modal-sizes-title-lg">
            Se connecter
          </Modal.Title>
          <CloseOutlined onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <div className="modalContainer">
            <img src="/sign.png" alt="signIn avatar" className="img-fluid" />
            <Grid
              container
              direction={"column"}
              spacing={5}
              className="modalItem"
            >
              <Grid item>
                <TextField id="standard-basic" label="Email" />
              </Grid>
              <Grid item>
                <TextField id="standard-basic" label="mot de passe " />
              </Grid>
            </Grid>
          </div>
          <Button
            className="signIn-btn"
            variant="warning"
            onClick={handleClose}
          >
            {" "}
            Se connecter
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignIn;
