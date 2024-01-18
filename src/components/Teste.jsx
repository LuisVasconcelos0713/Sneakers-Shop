import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/material/ShoppingCart";
import Button from "@mui/material/Button";
import AddIcon from "@mui/material/Add";
import RemoveIcon from "@mui/material/Remove";

export default function Teste() {
  const [itemCount, setItemCount] = React.useState(1);

  return (
    <div style={{ display: "block", padding: 30 }}>
      <h4>How to create ShoppingCart Button in ReactJS?</h4>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
