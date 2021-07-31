import React from "react";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";
// import { ReactScrollableList } from "react-scrollable-list";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";

function Bid({ auction }) {
  // const difference = +new Date(`${auction.endDate}`) - +new Date();

  // if (difference > 0) {

  return (
    <div>
      <Card>
        <Card.Body>Prix Initial : {auction.startingPrice}</Card.Body>
        <Card.Body>Enchère actuelle : </Card.Body>
        <InputGroup className="mb-3">
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Text>dt</InputGroup.Text>
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
      </Card>
      <div className="bidList">
        <Paper style={{ maxHeight: "100px", overflow: "auto" }}>
          <List>
            {auction.proposedBid.map((bid, index) => (
              <p>{auction.proposedBid[index]}</p>
            ))}
          </List>
        </Paper>
      </div>
    </div>
  );
}

export default Bid;
