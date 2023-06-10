import { Button } from "@mui/material";
import React from "react";

const Header = ({ direction, setDirection }) => {
  return (
    <div>
      <Button onClick={() => setDirection(direction === "rtl" ? "lrt" : "rtl")}>
        Change Direction
      </Button>
    </div>
  );
};

export default Header;
