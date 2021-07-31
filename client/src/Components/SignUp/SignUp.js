import "./SignUp.css";
import React, { useState } from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/userAction";


function SignUp(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // eslint-disable-next-line
  const handleShow = () => setShow(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  
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
        <Modal.Header n>
          <Modal.Title id="example-modal-sizes-title-lg">
            Créer un compte
          </Modal.Title>
          <CloseOutlined onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <div className="modalContainer">
            <img src="/SIGNUP.png" alt="signUp avatar" className="img" />
            <Grid container direction={"row"} spacing={5} className="modalItem">
              <Grid item>
                <TextField name="firstName" label="Nom" onChange={(e) => setFirstName(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField name="lastName" label="Prénom " onChange={(e) => setLastName(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField name="userName" label="Nom d'utilisateur " onChange={(e) => setUserName(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField name="email" label="Email " onChange={(e) => setEmail(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField name="password" label="Mot de passe " onChange={(e) => setPassword(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField
                  name="confirmPassword"
                  label="Confirmer mot de passe "
                  onChange={(e) => setConfirmPassword(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField name="phoneNumber" label="Mobile " onChange={(e) => setPhoneNumber(e.target.value)} />
              </Grid>
            </Grid>
          </div>
          <Button
            className="signIn-btn"
            variant="warning"
            onClick={() => {
              if (password !== confirmPassword) {
                dispatch((alert("wrong password")));
              } else {
                dispatch(
                  registerUser({ firstName, lastName, userName, email, password, confirmPassword, phoneNumber }),
                  alert("registred successfully") 
                  
                )
              };
              handleClose();
            }}
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
