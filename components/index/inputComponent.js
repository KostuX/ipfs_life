import {
  Button,
  Input,
  Image,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Spinner,
  Select,
  SelectItem,
  Progress,
} from "@nextui-org/react";

import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
export const InputComponent = () => {
  let searchCID = "";
  const [input, setInput] = useState(searchCID);
 

  function cidInput() {
    return (
      <Input
        type="text"
        placeholder={input ? input : "Please Enter Content-ID"}
        onInput={(e) => setInput(validator.clean(e.target.value))}
      />
    );
  }
    return    <Grid
    gap={2}
    container
    wrap="nowrap"
    item={true}
    justify="center"
    style={{ marginTop: 50 }}
  >
    <Grid xs={2} item={true}></Grid>
    <Grid xs={8} item={true} justify="center">
      {cidInput()}
    </Grid>
    <Grid xs={2} item={true}></Grid>
  </Grid>
}