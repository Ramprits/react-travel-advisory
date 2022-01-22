import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Typography from "@mui/material/Typography";
import { ListContainer } from "./List.style";

function List() {
  const [type, setType] = useState("resturents");
  const [rating, setRating] = useState("4");
  return (
    <ListContainer>
      <Box sx={{ minWidth: 120 }}>
        <Typography variant='h4'>
          Resturents, Hotels & Attractions around you
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <FormControl style={{ width: "200px" }}>
            <InputLabel variant='standard' htmlFor='uncontrolled-native'>
              Type
            </InputLabel>
            <NativeSelect
              onChange={(e) => setType(e.target.value)}
              defaultValue={type}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}>
              <option value={"resturents"}>Resturents</option>
              <option value={"hotels"}>Hotels</option>
              <option value={"attractions"}>Attractions</option>
            </NativeSelect>
          </FormControl>

          <FormControl style={{ width: "200px" }}>
            <InputLabel variant='standard' htmlFor='uncontrolled-native'>
              Rating
            </InputLabel>
            <NativeSelect
              defaultValue={rating}
              onChange={(e) => setRating(e.target.value)}
              inputProps={{
                name: "rating",
                id: "uncontrolled-native",
              }}>
              <option value={"3"}>Above 3.0</option>
              <option value={"4"}>Above 4.0</option>
              <option value={"4.5"}>Above 4.5</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Box>
    </ListContainer>
  );
}

export default List;
