import "./SignUp.css";
import React, { useState } from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { CloseOutlined } from "@ant-design/icons";

function SignUp(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // eslint-disable-next-line
  const handleShow = () => setShow(true);

  return (
    <div className="signin-container">
      <Nav.Link onClick={handleShow}>Créer un compte</Nav.Link>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title to="/Connexion" id="example-modal-sizes-title-lg">
            Créer un compte
          </Modal.Title>
          <CloseOutlined onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <div className="modalContainer">
            <img src="/SIGNUP.png" alt="signUp avatar" className="img" />
            <Grid container direction={"row"} spacing={5} className="modalItem">
              <Grid item>
                <TextField id="standard-basic" label="Nom" />
              </Grid>
              <Grid item>
                <TextField id="standard-basic" label="Prénom " />
              </Grid>
              <Grid item>
                <TextField id="standard-basic" label="Email " />
              </Grid>
              <Grid item>
                <TextField id="standard-basic" label="Adresse " />
              </Grid>
              <Grid item>
                <TextField id="standard-basic" label="Mot de passe " />
              </Grid>
              <Grid item>
                <TextField
                  id="standard-basic"
                  label="Confirmer mot de passe "
                />
              </Grid>
              <Grid item>
                <TextField id="standard-basic" label="Mobile " />
              </Grid>
            </Grid>
          </div>
          <Button
            className="signIn-btn"
            variant="warning"
            onClick={handleClose}
          >
            {" "}
            Enregister
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignUp;
