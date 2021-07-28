import "./SignUp.css";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Nav } from "react-bootstrap";

function SignUp(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // eslint-disable-next-line
  const handleShow = () => setShow(true);

  return (
    <div className="signin-container">
      <Nav.Link onClick={handleShow}>Créer un compte</Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header n>
          <Modal.Title id="example-modal-sizes-title-lg">
            Créer un compte
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
            variant="primary"
            onClick={handleClose}
          >
            Se connecter
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignUp;
